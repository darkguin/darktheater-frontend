import { DialogPosition } from './dialog-position.enum';

export const DialogPositionStyles = {
  [DialogPosition.CENTER]: 'dialog--center',
  [DialogPosition.RIGHT]: 'dialog--right dialog--center',
  [DialogPosition.LEFT]: 'dialog--left dialog--center',
  [DialogPosition.TOP]: 'dialog--top dialog--center',
  [DialogPosition.TOP_LEFT]: 'dialog--top dialog--left',
  [DialogPosition.TOP_RIGHT]: 'dialog--top dialog--right',
  [DialogPosition.BOTTOM]: 'dialog--bottom dialog--center',
  [DialogPosition.BOTTOM_LEFT]: 'dialog--bottom dialog--left',
  [DialogPosition.BOTTOM_RIGHT]: 'dialog--bottom dialog--right',
};
