declare namespace Oklab {
	export function linear_srgb_to_oklab(c: Vector3): Vector3;
	export function oklab_to_linear_srgb(c: Vector3): Vector3;
	export function compute_max_saturation(a: number, b: number): number;
	export function find_cusp(a: number, b: number): number;
	export function find_gamut_intersection(a: number, b: number, l1: number, c1: number, l0: number): number;
	export function gamut_clip_preserve_chroma(rgb: Vector3): Vector3;
	export function gamut_clip_project_to_0_5(rgb: Vector3): Vector3;
	export function gamut_clip_project_to_L_cusp(rgb: Vector3): Vector3;
	export function gamut_clip_adaptive_L0_0_5(rgb: Vector3, alpha?: number): Vector3;
	export function gamut_clip_adaptive_L0_L_cusp(rgb: Vector3, alpha?: number): Vector3;

	export const default_gamut_clip: typeof gamut_clip_adaptive_L0_0_5;

	export function color3_to_linear_srgb(c: Color3): Vector3;
	export function linear_srgb_to_color3(c: Vector3, use_default_gamut_clip?: boolean): Color3;
	export function oklch_to_oklab(oklch: Vector3): Vector3;
	export function oklab_to_oklch(oklab: Vector3): Vector3;
}

export = Oklab;
export as namespace Oklab;
