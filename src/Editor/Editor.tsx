import { createFontBackgroundColorPlugin, createFontColorPlugin, createFontSizePlugin, createHorizontalRulePlugin, createIndentPlugin, createResetNodePlugin, createSelectOnBackspacePlugin } from "@udecode/plate";
import { createAlignPlugin } from "@udecode/plate-alignment";
import { createBoldPlugin, createCodePlugin, createItalicPlugin, createUnderlinePlugin, createStrikethroughPlugin } from "@udecode/plate-basic-marks";
import { createBlockquotePlugin } from "@udecode/plate-block-quote";
import { createExitBreakPlugin, createSoftBreakPlugin } from "@udecode/plate-break";
import { createDeserializeHtmlPlugin, createPlugins, Plate } from "@udecode/plate-core";
import { createHeadingPlugin } from "@udecode/plate-heading";
import { createImagePlugin } from "@udecode/plate-image";
import { createKbdPlugin } from "@udecode/plate-kbd";
import { createLinkPlugin } from "@udecode/plate-link";
import { createListPlugin } from "@udecode/plate-list";
import { createNormalizeTypesPlugin } from "@udecode/plate-normalizers";
import { createParagraphPlugin } from "@udecode/plate-paragraph";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";
import { createDndPlugin } from "@udecode/plate-ui-dnd";
import { HeadingToolbar } from "@udecode/plate-ui-toolbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import ToolBarButtons from './Toolbar';
import config from './config';
import { CSSProperties } from "react";

function Editor(): JSX.Element {
  const plugins = createPlugins([
    createParagraphPlugin(),
    createBlockquotePlugin(),
    createHeadingPlugin(),
    createImagePlugin({
      props: {
        caption: { placeholder: 'Écrivez une légende...', align: 'center' }
      },
    }),
    createLinkPlugin(),
    createListPlugin(),
    createAlignPlugin(config.align),
    createBoldPlugin(),
    createCodePlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createKbdPlugin(),
    createHorizontalRulePlugin(),
    createFontSizePlugin(),
    createFontColorPlugin(),
    createFontBackgroundColorPlugin(),
    createIndentPlugin(config.indent),
    createDndPlugin(),
    createResetNodePlugin(config.resetBlockType),
    createSoftBreakPlugin(config.softBreak),
    createExitBreakPlugin(config.exitBreak),
    createNormalizeTypesPlugin(config.forceLayout),
    createTrailingBlockPlugin(config.trailingBlock),
    createSelectOnBackspacePlugin(config.selectOnBackspace),
    createDeserializeHtmlPlugin(),
  ], {
    components: config.components,
  });

  const containerEditorStyle: CSSProperties = {
    border: 'solid 2px #e4e4e4',
    borderRadius: '4px',
  }

  return (
    <div style={containerEditorStyle}>
      <DndProvider backend={HTML5Backend}>
        <Plate
          id="mail-editor"
          plugins={plugins}
          editableProps={config.editableProps}
        >
          <HeadingToolbar style={{ marginBottom: 0, padding: '5px', margin: 0 }}>
            <ToolBarButtons />
          </HeadingToolbar>
        </Plate>
      </DndProvider>
    </div>
  );
}

export default Editor;
