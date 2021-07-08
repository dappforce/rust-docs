initSidebarItems({"enum":[["Extern","An external item to a WebAssembly module, or a list of what can possibly be exported from a wasm module."],["ExternType","A list of all possible types which can be externally referenced from a WebAssembly module."],["Mutability","Indicator of whether a global is mutable or not"],["OptLevel","Possible optimization levels for the Cranelift codegen backend."],["ProfilingStrategy","Select which profiling technique to support."],["Strategy","Possible Compilation strategies for a wasm module."],["Val","Possible runtime values that a WebAssembly module can either consume or produce."],["ValType","A list of all possible value types in WebAssembly."]],"mod":[["unix","Unix-specific extension for the `wasmtime` crate."]],"struct":[["Caller","A structure representing the caller’s context when creating a function via [`Func::wrap`]."],["Config","Global configuration options used to create an [`Engine`] and customize its behavior."],["Engine","An `Engine` which is a global context for compilation and management of wasm modules."],["Export","An exported WebAssembly value."],["ExportType","A descriptor for an exported WebAssembly value."],["ExternRef","Represents an opaque reference to any data within WebAssembly."],["FrameInfo","Description of a frame in a backtrace for a `Trap`."],["Func","A WebAssembly function which can be called."],["FuncType","A descriptor for a function in a WebAssembly module."],["Global","A WebAssembly `global` value which can be read and written to."],["GlobalType","A WebAssembly global descriptor."],["ImportType","A descriptor for an imported value into a wasm module."],["Instance","An instantiated WebAssembly module."],["InterruptHandle","A threadsafe handle used to interrupt instances executing within a particular `Store`."],["Limits","Limits of tables/memories where the units of the limits are defined by the table/memory types."],["Linker","Structure used to link wasm modules/instances together."],["Memory","A WebAssembly linear memory."],["MemoryType","A descriptor for a WebAssembly memory type."],["Module","A compiled WebAssembly module, ready to be instantiated."],["Store","A `Store` is a collection of WebAssembly instances and host-defined items."],["Table","A WebAssembly `table`, or an array of values."],["TableType","A descriptor for a table in a WebAssembly module."],["Trap","A struct representing an aborted instruction execution, with a message indicating the cause."]],"trait":[["IntoFunc","Internal trait implemented for all arguments that can be passed to [`Func::wrap`]."],["LinearMemory","A linear memory. This trait provides an interface for raw memory buffers which are used by wasmtime, e.g. inside [‘Memory’]. Such buffers are in principle not thread safe. By implementing this trait together with MemoryCreator, one can supply wasmtime with custom allocated host managed memory."],["MemoryCreator","A memory creator. Can be used to provide a memory creator to wasmtime which supplies host managed memory."],["WasmRet","A trait implemented for types which can be returned from closures passed to [`Func::wrap`] and friends."],["WasmTy","A trait implemented for types which can be arguments to closures passed to [`Func::wrap`] and friends."]]});