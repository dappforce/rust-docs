initSidebarItems({"enum":[["WasmExecutionMethod","Specification of different methods of executing the runtime Wasm code."]],"fn":[["with_externalities_safe","Set up the externalities and safe calling environment to execute runtime calls."]],"macro":[["native_executor_instance","Implements a `NativeExecutionDispatch` for provided parameters."]],"mod":[["error","Rust executor possible errors."],["sandbox","This module implements sandboxing support in the runtime."]],"struct":[["NativeExecutor","A generic `CodeExecutor` implementation that uses a delegate to determine wasm code equivalence and dispatch to native code when possible, falling back on `WasmExecutor` when not."],["NativeVersion",""],["RuntimeVersion","Runtime version. This should not be thought of as classic Semver (major/minor/tiny). This triplet have different semantics and mis-interpretation could cause problems. In particular: bug fixes should result in an increment of `spec_version` and possibly `authoring_version`, absolutely not `impl_version` since they change the semantics of the runtime."],["WasmExecutor","An abstraction over Wasm code executor. Supports selecting execution backend and manages runtime cache."]],"trait":[["Codec","Trait that allows zero-copy read/write of value-references to/from slices in LE format."],["NativeExecutionDispatch","Delegate for dispatching a CodeExecutor call."],["RuntimeInfo","Provides runtime information."]]});