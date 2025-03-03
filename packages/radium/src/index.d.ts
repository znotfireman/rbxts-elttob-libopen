declare namespace Radium {
	export interface Dump {
		Classes: DumpClass[];
		Enums: DumpEnum[];
		Version: number;
	}

	export interface DumpClass {
		Name: string;
		Members: DumpClassMember[];
		Tags?: string[];
		Superclass: string;
		MemoryCategory: string;
	}

	export type DumpClassMember = DumpClassProperty | DumpClassFunction | DumpClassEvent | DumpClassCallback;

	export interface DumpClassProperty {
		MemberType: "Property";
		Name: string;
		Tags?: string[];
		ValueType: DumpType;
		Security: {
			Read: DumpSecurity;
			Write: DumpSecurity;
		};
		Serialization: {
			CanLoad: boolean;
			CanSave: boolean;
		};
		ThreadSafety: DumpThreadSafety;
		Category: string;
	}

	export interface DumpClassFunction {
		MemberType: "Function";
		Name: string;
		Tags?: string[];
		Parameters: DumpFunctionParameter[];
		ReturnType: DumpType;
		Security: DumpSecurity;
		ThreadSafety: DumpThreadSafety;
	}

	export interface DumpClassEvent {
		MemberType: "Event";
		Name: string;
		Tags?: string[];
		Parameters: DumpFunctionParameter[];
		Security: DumpSecurity;
		ThreadSafety: DumpThreadSafety;
	}

	export interface DumpClassCallback {
		MemberType: "Callback";
		Name: string;
		Tags?: string[];
		Parameters: DumpFunctionParameter[];
		ReturnType: DumpType;
		Security: DumpSecurity;
		ThreadSafety: DumpThreadSafety;
	}

	export interface DumpFunctionParameter {
		Name: string;
		Type: DumpType;
	}

	export interface DumpType {
		Name: string;
		Category: string;
	}

	export type DumpSecurity =
		| "None"
		| "LocalUserSecurity"
		| "NotAccessibleSecurity"
		| "PluginSecurity"
		| "RobloxScriptSecurity"
		| "RobloxSecurity";

	export type DumpThreadSafety = "Unsafe" | "ReadSafe" | "Safe";

	export interface DumpEnum {
		Name: string;
		Items: DumpEnumItem[];
	}

	export interface DumpEnumItem {
		Name: string;
		Value: number;
	}

	export let dump: Dump | undefined;

	export type DownloadResult =
		| {
				ok: true;
		  }
		| {
				ok: false;
				id: "httpFail";
				error: string;
				humanReadable: string;
		  }
		| {
				ok: false;
				id: "jsonFail";
				error: string;
				humanReadable: string;
		  };

	export function download(): DownloadResult;
	export function unload(): void;

	export const caches: {
		listClassNames?: string[];
		findClass?: Map<string, { value?: DumpClass }>;
		findSubclassNames?: Map<string, { value: DumpClass }>;
		findAllInheritedMembers?: Map<string, { value?: Map<string, DumpClassMember> }>;
	};

	export function listClassNames(saveToCache?: boolean): string[];
	export function findClass(className: string, saveToCache?: boolean): DumpClass | undefined;
	export function findSubclasses(superclassName: string, saveToCache?: boolean): DumpClass[];
	export function findAllInheritedMembers(
		className: string,
		saveToCache?: boolean,
	): Map<string, DumpClassMember> | undefined;
}

export = Radium;
export as namespace Radium;
