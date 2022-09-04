export interface Player {
  api: (command: string, value?: any) => any;
  event?(event: string, listener: EventListener): () => void;
  [x: string]: any;
}
