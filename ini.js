export type CursorEffectResult = {
    destroy(): void;
}

type DefaultOptions = {
    readonly element?: HTMLElement;
}
export type AntsCursorOptions = {
    readonly numberOfAnts?: number;
    readonly followRange?: number;
    readonly color?: string;
    readonly speed?: number;
    readonly lineFormationSpeed?: number;
} & DefaultOptions;

export function antsCursor(options?: AntsCursorOptions): CursorEffectResult;
