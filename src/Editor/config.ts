import {
  createPlateUI,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_HR,
  ELEMENT_IMAGE,
  ELEMENT_PARAGRAPH,
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  KEYS_HEADING,
} from '@udecode/plate'

const resetBlockTypesCommonRule = {
  types: [ELEMENT_BLOCKQUOTE, ELEMENT_IMAGE],
  defaultType: ELEMENT_PARAGRAPH,
}

const config = {
  editableProps: {
    spellCheck: true,
    autoFocus: false,
    placeholder: 'Ecrivez...',
    style: {
      padding: '15px',
    },
  },
  components: createPlateUI(),
  align: {
    inject: {
      props: {
        validTypes: [
          ELEMENT_PARAGRAPH,
          ELEMENT_H1,
          ELEMENT_H2,
          ELEMENT_H3,
        ],
      },
    },
  },
  indent: {
    inject: {
      props: {
        validTypes: [
          ELEMENT_PARAGRAPH,
          ELEMENT_H1,
          ELEMENT_H2,
          ELEMENT_H3,
          ELEMENT_BLOCKQUOTE,
        ],
      },
    },
  },
  resetBlockType: {
    options: {
      rules: [
        {
          ...resetBlockTypesCommonRule,
          hotkey: 'Enter',
          predicate: isBlockAboveEmpty,
        },
        {
          ...resetBlockTypesCommonRule,
          hotkey: 'Backspace',
          predicate: isSelectionAtBlockStart,
        },
      ],
    },
  },
  trailingBlock: { type: ELEMENT_PARAGRAPH },
  softBreak: {
    options: {
      rules: [
        { hotkey: 'shift+enter' },
        {
          hotkey: 'enter',
          query: {
            allow: [ELEMENT_BLOCKQUOTE, ELEMENT_IMAGE],
          },
        },
      ],
    },
  },
  exitBreak: {
    options: {
      rules: [
        {
          hotkey: 'mod+enter',
        },
        {
          hotkey: 'mod+shift+enter',
          before: true,
        },
        {
          hotkey: 'enter',
          query: {
            start: true,
            end: true,
            allow: KEYS_HEADING,
          },
        },
      ],
    },
  },
  selectOnBackspace: {
    options: {
      query: {
        allow: [ELEMENT_IMAGE, ELEMENT_HR],
      },
    },
  },
  forceLayout: {
    options: {
      rules: [{ path: [0], type: ELEMENT_H1 }],
    },
  },
};

export default config;

