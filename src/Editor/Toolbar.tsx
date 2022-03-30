import {
  Check,
  Code,
  FontDownload,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatColorText,
  FormatIndentDecrease,
  FormatIndentIncrease,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatStrikethrough,
  FormatUnderlined,
  HorizontalRule,
  Image,
  Link,
  Looks3,
  LooksOne,
  LooksTwo
} from "@mui/icons-material";
import {
  ELEMENT_BLOCKQUOTE,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_HR,
  ELEMENT_OL,
  ELEMENT_UL,
  getPluginType,
  getPreventDefaultHandler,
  indent,
  MARK_BG_COLOR,
  MARK_BOLD,
  MARK_CODE,
  MARK_COLOR,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
  outdent,
  AlignToolbarButton,
  ToolbarButton,
  ColorPickerToolbarDropdown,
  BlockToolbarButton,
  ImageToolbarButton,
  LinkToolbarButton,
  ListToolbarButton,
  MarkToolbarButton,
  usePlateEditorRef,
} from '@udecode/plate'


function BasicElementToolbarButtons(): JSX.Element {
  const editor = usePlateEditorRef();

  return (
    <>
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H1)}
        icon={<LooksOne />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H2)}
        icon={<LooksTwo />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H3)}
        icon={<Looks3 />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={<FormatQuote />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_HR)}
        icon={<HorizontalRule />}
      />
    </>
  );
}

function IndentToolbarButtons(): JSX.Element {
  const editor = usePlateEditorRef();

  return (
    <>
      <ToolbarButton
        onMouseDown={editor && getPreventDefaultHandler(outdent, editor)}
        icon={<FormatIndentDecrease />}
      />
      <ToolbarButton
        onMouseDown={editor && getPreventDefaultHandler(indent, editor)}
        icon={<FormatIndentIncrease />}
      />
    </>
  );
}

function ListToolbarButtons(): JSX.Element {
  const editor = usePlateEditorRef();

  return (
    <>
      <ListToolbarButton
        type={getPluginType(editor, ELEMENT_UL)}
        icon={<FormatListBulleted />}
      />
      <ListToolbarButton
        type={getPluginType(editor, ELEMENT_OL)}
        icon={<FormatListNumbered />}
      />
    </>
  );
}

function AlignToolbarButtons(): JSX.Element {
  return (
    <>
      <AlignToolbarButton value="left" icon={<FormatAlignLeft />} />
      <AlignToolbarButton value="center" icon={<FormatAlignCenter />} />
      <AlignToolbarButton value="right" icon={<FormatAlignRight />} />
      <AlignToolbarButton value="justify" icon={<FormatAlignJustify />} />
    </>
  );
}

function BasicMarkToolbarButtons(): JSX.Element {
  const editor = usePlateEditorRef();

  return (
    <>
      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_STRIKETHROUGH)}
        icon={<FormatStrikethrough />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_CODE)}
        icon={<Code />}
      />
    </>
  );
}

function ToolbarButtons(): JSX.Element {
  return (
    <>
      <BasicElementToolbarButtons />
      <ListToolbarButtons />
      <IndentToolbarButtons />
      <BasicMarkToolbarButtons />
      <ColorPickerToolbarDropdown
        pluginKey={MARK_COLOR}
        icon={<FormatColorText />}
        selectedIcon={<Check />}
      />
      <ColorPickerToolbarDropdown
        pluginKey={MARK_BG_COLOR}
        icon={<FontDownload />}
        selectedIcon={<Check />}
      />
      <AlignToolbarButtons />
      <LinkToolbarButton icon={<Link />} />
      <ImageToolbarButton icon={<Image />} />
    </>
  );
}

export default ToolbarButtons;
