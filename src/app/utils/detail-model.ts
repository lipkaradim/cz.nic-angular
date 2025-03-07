export interface DNS {
  name: string;
  ip_address: string;
}

export interface NSSet {
  handle: string;
  registrar: string;
  dns: DNS[];
}

export interface KeySet {
  handle: string;
  registrar: string;
  dns_keys: string[];
}

export interface Publish {
  organization: boolean;
  name: boolean;
}

export interface Contact {
  handle: string;
  organization: string;
  name: string;
  publish: Publish;
}

export interface Events {
  registered: {
      timestamp: string;
      registrar_handle: string;
  };
  transferred: {
      timestamp: string;
      registrar_handle: string;
  };
  updated: {
      timestamp: string;
      registrar_handle: string;
  };
  unregistered: {
    timestamp: string;
    registrar_handle: string;
  };
}

export interface Flag {
  name: string;
  active: boolean;
  description: string;
}

export interface StateFlags {
  flags: Flag[];
  groups: string[][];
}

export interface DomainInfo {
  fqdn: string;
  nsset: NSSet;
  keyset: KeySet;
  owner: Contact;
  sponsoring_registrar: string;
  administrative_contacts: Contact[];
  expires_at: string;
  events: Events;
  state_flags: StateFlags;
}