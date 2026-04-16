import { describe, expect, test } from 'bun:test';

import {
  createLocalNotificationPresenceSnapshot,
  getOrCreateNotificationClientId,
  getOrCreateNotificationDeviceId,
  listLiveLocalNotificationPresence,
  publishLocalNotificationPresence,
  shouldNotifyLocallyForChat,
  withdrawLocalNotificationPresence,
} from '../../web/src/ui/notification-delivery-coordinator.ts';

function createStorage() {
  const values = new Map();
  return {
    get length() {
      return values.size;
    },
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(String(key), String(value));
    },
    removeItem(key) {
      values.delete(String(key));
    },
    key(index) {
      return Array.from(values.keys())[index] || null;
    },
  };
}

function createRuntime() {
  const localStorage = createStorage();
  const sessionStorage = createStorage();
  const document = {
    visibilityState: 'visible',
    hasFocus() {
      return true;
    },
  };
  const runtimeWindow = {
    localStorage,
    sessionStorage,
  };
  return { runtimeWindow, document };
}

describe('notification delivery coordinator', () => {
  test('creates stable device and client ids', () => {
    const { runtimeWindow } = createRuntime();
    const deviceId = getOrCreateNotificationDeviceId(runtimeWindow as any);
    const clientId = getOrCreateNotificationClientId(runtimeWindow as any);

    expect(deviceId).toBe(getOrCreateNotificationDeviceId(runtimeWindow as any));
    expect(clientId).toBe(getOrCreateNotificationClientId(runtimeWindow as any));
  });

  test('elects exactly one hidden local notifier per device/chat', () => {
    const { runtimeWindow, document } = createRuntime();
    const deviceId = getOrCreateNotificationDeviceId(runtimeWindow as any);

    publishLocalNotificationPresence({
      deviceId,
      clientId: 'client-a',
      chatJid: 'web:default',
      visibilityState: 'hidden',
      hasFocus: false,
      updatedAtMs: 1000,
    }, runtimeWindow as any);
    publishLocalNotificationPresence({
      deviceId,
      clientId: 'client-b',
      chatJid: 'web:default',
      visibilityState: 'hidden',
      hasFocus: false,
      updatedAtMs: 1000,
    }, runtimeWindow as any);

    expect(shouldNotifyLocallyForChat({
      chatJid: 'web:default',
      runtimeWindow: runtimeWindow as any,
      runtimeDocument: { ...document, visibilityState: 'hidden', hasFocus: () => false } as any,
      deviceId,
      clientId: 'client-a',
      updatedAtMs: 1000,
    })).toBe(true);
    expect(shouldNotifyLocallyForChat({
      chatJid: 'web:default',
      runtimeWindow: runtimeWindow as any,
      runtimeDocument: { ...document, visibilityState: 'hidden', hasFocus: () => false } as any,
      deviceId,
      clientId: 'client-b',
      updatedAtMs: 1000,
    })).toBe(false);
  });

  test('suppresses local notifications when the same chat is visible elsewhere on the device', () => {
    const { runtimeWindow, document } = createRuntime();
    const deviceId = getOrCreateNotificationDeviceId(runtimeWindow as any);
    publishLocalNotificationPresence({
      deviceId,
      clientId: 'client-visible',
      chatJid: 'web:default',
      visibilityState: 'visible',
      hasFocus: true,
      updatedAtMs: 1000,
    }, runtimeWindow as any);

    expect(shouldNotifyLocallyForChat({
      chatJid: 'web:default',
      runtimeWindow: runtimeWindow as any,
      runtimeDocument: { ...document, visibilityState: 'hidden', hasFocus: () => false } as any,
      deviceId,
      clientId: 'client-hidden',
      updatedAtMs: 1000,
    })).toBe(false);
  });

  test('prunes withdrawn or stale presence records', () => {
    const { runtimeWindow, document } = createRuntime();
    const snapshot = createLocalNotificationPresenceSnapshot({
      chatJid: 'web:default',
      runtimeWindow: runtimeWindow as any,
      runtimeDocument: document as any,
      updatedAtMs: 1000,
    });
    publishLocalNotificationPresence(snapshot, runtimeWindow as any);

    expect(listLiveLocalNotificationPresence({
      runtimeWindow: runtimeWindow as any,
      deviceId: snapshot.deviceId,
      nowMs: 1000,
    })).toHaveLength(1);

    withdrawLocalNotificationPresence(snapshot, runtimeWindow as any);
    expect(listLiveLocalNotificationPresence({
      runtimeWindow: runtimeWindow as any,
      deviceId: snapshot.deviceId,
      nowMs: 1000,
    })).toHaveLength(0);
  });
});
