// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolCallResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolCallResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const signal_send_messageTool: Tool = {
  definition: {
    name: 'signal_send_message',
    description: 'Send encrypted message to Signal recipient or group',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[signal] signal_send_message executed');
      return ok('signal_send_message', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'signal_send_message',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const signal_receive_messagesTool: Tool = {
  definition: {
    name: 'signal_receive_messages',
    description: 'Receive and process incoming Signal messages',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[signal] signal_receive_messages executed');
      return ok('signal_receive_messages', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'signal_receive_messages',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const signal_manage_groupsTool: Tool = {
  definition: {
    name: 'signal_manage_groups',
    description: 'Create and manage Signal groups',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[signal] signal_manage_groups executed');
      return ok('signal_manage_groups', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'signal_manage_groups',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-signal] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-signal] Unloading...');
}
export const tools: Tool[] = [
  signal_send_messageTool,
  signal_receive_messagesTool,
  signal_manage_groupsTool,
];
