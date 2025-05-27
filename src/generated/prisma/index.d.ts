
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cargos
 * 
 */
export type Cargos = $Result.DefaultSelection<Prisma.$CargosPayload>
/**
 * Model Detalle_ventas_productos
 * 
 */
export type Detalle_ventas_productos = $Result.DefaultSelection<Prisma.$Detalle_ventas_productosPayload>
/**
 * Model Lote_productos
 * 
 */
export type Lote_productos = $Result.DefaultSelection<Prisma.$Lote_productosPayload>
/**
 * Model Medio_pagos
 * 
 */
export type Medio_pagos = $Result.DefaultSelection<Prisma.$Medio_pagosPayload>
/**
 * Model Productos
 * 
 */
export type Productos = $Result.DefaultSelection<Prisma.$ProductosPayload>
/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>
/**
 * Model Ventas
 * 
 */
export type Ventas = $Result.DefaultSelection<Prisma.$VentasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cargos
 * const cargos = await prisma.cargos.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cargos
   * const cargos = await prisma.cargos.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cargos`: Exposes CRUD operations for the **Cargos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cargos
    * const cargos = await prisma.cargos.findMany()
    * ```
    */
  get cargos(): Prisma.CargosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalle_ventas_productos`: Exposes CRUD operations for the **Detalle_ventas_productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalle_ventas_productos
    * const detalle_ventas_productos = await prisma.detalle_ventas_productos.findMany()
    * ```
    */
  get detalle_ventas_productos(): Prisma.Detalle_ventas_productosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lote_productos`: Exposes CRUD operations for the **Lote_productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lote_productos
    * const lote_productos = await prisma.lote_productos.findMany()
    * ```
    */
  get lote_productos(): Prisma.Lote_productosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medio_pagos`: Exposes CRUD operations for the **Medio_pagos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medio_pagos
    * const medio_pagos = await prisma.medio_pagos.findMany()
    * ```
    */
  get medio_pagos(): Prisma.Medio_pagosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productos`: Exposes CRUD operations for the **Productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.productos.findMany()
    * ```
    */
  get productos(): Prisma.ProductosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ventas`: Exposes CRUD operations for the **Ventas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.ventas.findMany()
    * ```
    */
  get ventas(): Prisma.VentasDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cargos: 'Cargos',
    Detalle_ventas_productos: 'Detalle_ventas_productos',
    Lote_productos: 'Lote_productos',
    Medio_pagos: 'Medio_pagos',
    Productos: 'Productos',
    Usuarios: 'Usuarios',
    Ventas: 'Ventas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cargos" | "detalle_ventas_productos" | "lote_productos" | "medio_pagos" | "productos" | "usuarios" | "ventas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cargos: {
        payload: Prisma.$CargosPayload<ExtArgs>
        fields: Prisma.CargosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CargosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CargosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosPayload>
          }
          findFirst: {
            args: Prisma.CargosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CargosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosPayload>
          }
          findMany: {
            args: Prisma.CargosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosPayload>[]
          }
          create: {
            args: Prisma.CargosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosPayload>
          }
          createMany: {
            args: Prisma.CargosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CargosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosPayload>
          }
          update: {
            args: Prisma.CargosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosPayload>
          }
          deleteMany: {
            args: Prisma.CargosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CargosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CargosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargosPayload>
          }
          aggregate: {
            args: Prisma.CargosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCargos>
          }
          groupBy: {
            args: Prisma.CargosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CargosGroupByOutputType>[]
          }
          count: {
            args: Prisma.CargosCountArgs<ExtArgs>
            result: $Utils.Optional<CargosCountAggregateOutputType> | number
          }
        }
      }
      Detalle_ventas_productos: {
        payload: Prisma.$Detalle_ventas_productosPayload<ExtArgs>
        fields: Prisma.Detalle_ventas_productosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Detalle_ventas_productosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_ventas_productosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Detalle_ventas_productosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_ventas_productosPayload>
          }
          findFirst: {
            args: Prisma.Detalle_ventas_productosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_ventas_productosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Detalle_ventas_productosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_ventas_productosPayload>
          }
          findMany: {
            args: Prisma.Detalle_ventas_productosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_ventas_productosPayload>[]
          }
          create: {
            args: Prisma.Detalle_ventas_productosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_ventas_productosPayload>
          }
          createMany: {
            args: Prisma.Detalle_ventas_productosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Detalle_ventas_productosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_ventas_productosPayload>
          }
          update: {
            args: Prisma.Detalle_ventas_productosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_ventas_productosPayload>
          }
          deleteMany: {
            args: Prisma.Detalle_ventas_productosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Detalle_ventas_productosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Detalle_ventas_productosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_ventas_productosPayload>
          }
          aggregate: {
            args: Prisma.Detalle_ventas_productosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalle_ventas_productos>
          }
          groupBy: {
            args: Prisma.Detalle_ventas_productosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detalle_ventas_productosGroupByOutputType>[]
          }
          count: {
            args: Prisma.Detalle_ventas_productosCountArgs<ExtArgs>
            result: $Utils.Optional<Detalle_ventas_productosCountAggregateOutputType> | number
          }
        }
      }
      Lote_productos: {
        payload: Prisma.$Lote_productosPayload<ExtArgs>
        fields: Prisma.Lote_productosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Lote_productosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lote_productosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Lote_productosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lote_productosPayload>
          }
          findFirst: {
            args: Prisma.Lote_productosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lote_productosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Lote_productosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lote_productosPayload>
          }
          findMany: {
            args: Prisma.Lote_productosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lote_productosPayload>[]
          }
          create: {
            args: Prisma.Lote_productosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lote_productosPayload>
          }
          createMany: {
            args: Prisma.Lote_productosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Lote_productosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lote_productosPayload>
          }
          update: {
            args: Prisma.Lote_productosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lote_productosPayload>
          }
          deleteMany: {
            args: Prisma.Lote_productosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Lote_productosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Lote_productosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lote_productosPayload>
          }
          aggregate: {
            args: Prisma.Lote_productosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLote_productos>
          }
          groupBy: {
            args: Prisma.Lote_productosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lote_productosGroupByOutputType>[]
          }
          count: {
            args: Prisma.Lote_productosCountArgs<ExtArgs>
            result: $Utils.Optional<Lote_productosCountAggregateOutputType> | number
          }
        }
      }
      Medio_pagos: {
        payload: Prisma.$Medio_pagosPayload<ExtArgs>
        fields: Prisma.Medio_pagosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Medio_pagosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medio_pagosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Medio_pagosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medio_pagosPayload>
          }
          findFirst: {
            args: Prisma.Medio_pagosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medio_pagosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Medio_pagosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medio_pagosPayload>
          }
          findMany: {
            args: Prisma.Medio_pagosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medio_pagosPayload>[]
          }
          create: {
            args: Prisma.Medio_pagosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medio_pagosPayload>
          }
          createMany: {
            args: Prisma.Medio_pagosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Medio_pagosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medio_pagosPayload>
          }
          update: {
            args: Prisma.Medio_pagosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medio_pagosPayload>
          }
          deleteMany: {
            args: Prisma.Medio_pagosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Medio_pagosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Medio_pagosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medio_pagosPayload>
          }
          aggregate: {
            args: Prisma.Medio_pagosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedio_pagos>
          }
          groupBy: {
            args: Prisma.Medio_pagosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Medio_pagosGroupByOutputType>[]
          }
          count: {
            args: Prisma.Medio_pagosCountArgs<ExtArgs>
            result: $Utils.Optional<Medio_pagosCountAggregateOutputType> | number
          }
        }
      }
      Productos: {
        payload: Prisma.$ProductosPayload<ExtArgs>
        fields: Prisma.ProductosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          findFirst: {
            args: Prisma.ProductosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          findMany: {
            args: Prisma.ProductosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>[]
          }
          create: {
            args: Prisma.ProductosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          createMany: {
            args: Prisma.ProductosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          update: {
            args: Prisma.ProductosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          deleteMany: {
            args: Prisma.ProductosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          aggregate: {
            args: Prisma.ProductosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductos>
          }
          groupBy: {
            args: Prisma.ProductosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductosCountArgs<ExtArgs>
            result: $Utils.Optional<ProductosCountAggregateOutputType> | number
          }
        }
      }
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      Ventas: {
        payload: Prisma.$VentasPayload<ExtArgs>
        fields: Prisma.VentasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentasPayload>
          }
          findFirst: {
            args: Prisma.VentasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentasPayload>
          }
          findMany: {
            args: Prisma.VentasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentasPayload>[]
          }
          create: {
            args: Prisma.VentasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentasPayload>
          }
          createMany: {
            args: Prisma.VentasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VentasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentasPayload>
          }
          update: {
            args: Prisma.VentasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentasPayload>
          }
          deleteMany: {
            args: Prisma.VentasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VentasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentasPayload>
          }
          aggregate: {
            args: Prisma.VentasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVentas>
          }
          groupBy: {
            args: Prisma.VentasGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentasGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentasCountArgs<ExtArgs>
            result: $Utils.Optional<VentasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cargos?: CargosOmit
    detalle_ventas_productos?: Detalle_ventas_productosOmit
    lote_productos?: Lote_productosOmit
    medio_pagos?: Medio_pagosOmit
    productos?: ProductosOmit
    usuarios?: UsuariosOmit
    ventas?: VentasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CargosCountOutputType
   */

  export type CargosCountOutputType = {
    Usuarios: number
  }

  export type CargosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuarios?: boolean | CargosCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * CargosCountOutputType without action
   */
  export type CargosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargosCountOutputType
     */
    select?: CargosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CargosCountOutputType without action
   */
  export type CargosCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
  }


  /**
   * Count Type Medio_pagosCountOutputType
   */

  export type Medio_pagosCountOutputType = {
    Ventas: number
  }

  export type Medio_pagosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ventas?: boolean | Medio_pagosCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * Medio_pagosCountOutputType without action
   */
  export type Medio_pagosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medio_pagosCountOutputType
     */
    select?: Medio_pagosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Medio_pagosCountOutputType without action
   */
  export type Medio_pagosCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentasWhereInput
  }


  /**
   * Count Type ProductosCountOutputType
   */

  export type ProductosCountOutputType = {
    Detalle_ventas_productos: number
    Lote_productos: number
  }

  export type ProductosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Detalle_ventas_productos?: boolean | ProductosCountOutputTypeCountDetalle_ventas_productosArgs
    Lote_productos?: boolean | ProductosCountOutputTypeCountLote_productosArgs
  }

  // Custom InputTypes
  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductosCountOutputType
     */
    select?: ProductosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountDetalle_ventas_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Detalle_ventas_productosWhereInput
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountLote_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Lote_productosWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    Ventas: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ventas?: boolean | UsuariosCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentasWhereInput
  }


  /**
   * Count Type VentasCountOutputType
   */

  export type VentasCountOutputType = {
    Detalle_ventas_productos: number
  }

  export type VentasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Detalle_ventas_productos?: boolean | VentasCountOutputTypeCountDetalle_ventas_productosArgs
  }

  // Custom InputTypes
  /**
   * VentasCountOutputType without action
   */
  export type VentasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentasCountOutputType
     */
    select?: VentasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VentasCountOutputType without action
   */
  export type VentasCountOutputTypeCountDetalle_ventas_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Detalle_ventas_productosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cargos
   */

  export type AggregateCargos = {
    _count: CargosCountAggregateOutputType | null
    _avg: CargosAvgAggregateOutputType | null
    _sum: CargosSumAggregateOutputType | null
    _min: CargosMinAggregateOutputType | null
    _max: CargosMaxAggregateOutputType | null
  }

  export type CargosAvgAggregateOutputType = {
    Id_cargo: number | null
  }

  export type CargosSumAggregateOutputType = {
    Id_cargo: number | null
  }

  export type CargosMinAggregateOutputType = {
    Id_cargo: number | null
    Nombre_cargo: string | null
  }

  export type CargosMaxAggregateOutputType = {
    Id_cargo: number | null
    Nombre_cargo: string | null
  }

  export type CargosCountAggregateOutputType = {
    Id_cargo: number
    Nombre_cargo: number
    _all: number
  }


  export type CargosAvgAggregateInputType = {
    Id_cargo?: true
  }

  export type CargosSumAggregateInputType = {
    Id_cargo?: true
  }

  export type CargosMinAggregateInputType = {
    Id_cargo?: true
    Nombre_cargo?: true
  }

  export type CargosMaxAggregateInputType = {
    Id_cargo?: true
    Nombre_cargo?: true
  }

  export type CargosCountAggregateInputType = {
    Id_cargo?: true
    Nombre_cargo?: true
    _all?: true
  }

  export type CargosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargos to aggregate.
     */
    where?: CargosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargosOrderByWithRelationInput | CargosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CargosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cargos
    **/
    _count?: true | CargosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CargosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CargosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CargosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CargosMaxAggregateInputType
  }

  export type GetCargosAggregateType<T extends CargosAggregateArgs> = {
        [P in keyof T & keyof AggregateCargos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCargos[P]>
      : GetScalarType<T[P], AggregateCargos[P]>
  }




  export type CargosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargosWhereInput
    orderBy?: CargosOrderByWithAggregationInput | CargosOrderByWithAggregationInput[]
    by: CargosScalarFieldEnum[] | CargosScalarFieldEnum
    having?: CargosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CargosCountAggregateInputType | true
    _avg?: CargosAvgAggregateInputType
    _sum?: CargosSumAggregateInputType
    _min?: CargosMinAggregateInputType
    _max?: CargosMaxAggregateInputType
  }

  export type CargosGroupByOutputType = {
    Id_cargo: number
    Nombre_cargo: string | null
    _count: CargosCountAggregateOutputType | null
    _avg: CargosAvgAggregateOutputType | null
    _sum: CargosSumAggregateOutputType | null
    _min: CargosMinAggregateOutputType | null
    _max: CargosMaxAggregateOutputType | null
  }

  type GetCargosGroupByPayload<T extends CargosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CargosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CargosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CargosGroupByOutputType[P]>
            : GetScalarType<T[P], CargosGroupByOutputType[P]>
        }
      >
    >


  export type CargosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_cargo?: boolean
    Nombre_cargo?: boolean
    Usuarios?: boolean | Cargos$UsuariosArgs<ExtArgs>
    _count?: boolean | CargosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargos"]>



  export type CargosSelectScalar = {
    Id_cargo?: boolean
    Nombre_cargo?: boolean
  }

  export type CargosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_cargo" | "Nombre_cargo", ExtArgs["result"]["cargos"]>
  export type CargosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuarios?: boolean | Cargos$UsuariosArgs<ExtArgs>
    _count?: boolean | CargosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CargosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cargos"
    objects: {
      Usuarios: Prisma.$UsuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id_cargo: number
      Nombre_cargo: string | null
    }, ExtArgs["result"]["cargos"]>
    composites: {}
  }

  type CargosGetPayload<S extends boolean | null | undefined | CargosDefaultArgs> = $Result.GetResult<Prisma.$CargosPayload, S>

  type CargosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CargosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CargosCountAggregateInputType | true
    }

  export interface CargosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cargos'], meta: { name: 'Cargos' } }
    /**
     * Find zero or one Cargos that matches the filter.
     * @param {CargosFindUniqueArgs} args - Arguments to find a Cargos
     * @example
     * // Get one Cargos
     * const cargos = await prisma.cargos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CargosFindUniqueArgs>(args: SelectSubset<T, CargosFindUniqueArgs<ExtArgs>>): Prisma__CargosClient<$Result.GetResult<Prisma.$CargosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cargos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CargosFindUniqueOrThrowArgs} args - Arguments to find a Cargos
     * @example
     * // Get one Cargos
     * const cargos = await prisma.cargos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CargosFindUniqueOrThrowArgs>(args: SelectSubset<T, CargosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CargosClient<$Result.GetResult<Prisma.$CargosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargosFindFirstArgs} args - Arguments to find a Cargos
     * @example
     * // Get one Cargos
     * const cargos = await prisma.cargos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CargosFindFirstArgs>(args?: SelectSubset<T, CargosFindFirstArgs<ExtArgs>>): Prisma__CargosClient<$Result.GetResult<Prisma.$CargosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargosFindFirstOrThrowArgs} args - Arguments to find a Cargos
     * @example
     * // Get one Cargos
     * const cargos = await prisma.cargos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CargosFindFirstOrThrowArgs>(args?: SelectSubset<T, CargosFindFirstOrThrowArgs<ExtArgs>>): Prisma__CargosClient<$Result.GetResult<Prisma.$CargosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cargos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cargos
     * const cargos = await prisma.cargos.findMany()
     * 
     * // Get first 10 Cargos
     * const cargos = await prisma.cargos.findMany({ take: 10 })
     * 
     * // Only select the `Id_cargo`
     * const cargosWithId_cargoOnly = await prisma.cargos.findMany({ select: { Id_cargo: true } })
     * 
     */
    findMany<T extends CargosFindManyArgs>(args?: SelectSubset<T, CargosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cargos.
     * @param {CargosCreateArgs} args - Arguments to create a Cargos.
     * @example
     * // Create one Cargos
     * const Cargos = await prisma.cargos.create({
     *   data: {
     *     // ... data to create a Cargos
     *   }
     * })
     * 
     */
    create<T extends CargosCreateArgs>(args: SelectSubset<T, CargosCreateArgs<ExtArgs>>): Prisma__CargosClient<$Result.GetResult<Prisma.$CargosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cargos.
     * @param {CargosCreateManyArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargos = await prisma.cargos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CargosCreateManyArgs>(args?: SelectSubset<T, CargosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cargos.
     * @param {CargosDeleteArgs} args - Arguments to delete one Cargos.
     * @example
     * // Delete one Cargos
     * const Cargos = await prisma.cargos.delete({
     *   where: {
     *     // ... filter to delete one Cargos
     *   }
     * })
     * 
     */
    delete<T extends CargosDeleteArgs>(args: SelectSubset<T, CargosDeleteArgs<ExtArgs>>): Prisma__CargosClient<$Result.GetResult<Prisma.$CargosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cargos.
     * @param {CargosUpdateArgs} args - Arguments to update one Cargos.
     * @example
     * // Update one Cargos
     * const cargos = await prisma.cargos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CargosUpdateArgs>(args: SelectSubset<T, CargosUpdateArgs<ExtArgs>>): Prisma__CargosClient<$Result.GetResult<Prisma.$CargosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cargos.
     * @param {CargosDeleteManyArgs} args - Arguments to filter Cargos to delete.
     * @example
     * // Delete a few Cargos
     * const { count } = await prisma.cargos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CargosDeleteManyArgs>(args?: SelectSubset<T, CargosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cargos
     * const cargos = await prisma.cargos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CargosUpdateManyArgs>(args: SelectSubset<T, CargosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cargos.
     * @param {CargosUpsertArgs} args - Arguments to update or create a Cargos.
     * @example
     * // Update or create a Cargos
     * const cargos = await prisma.cargos.upsert({
     *   create: {
     *     // ... data to create a Cargos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cargos we want to update
     *   }
     * })
     */
    upsert<T extends CargosUpsertArgs>(args: SelectSubset<T, CargosUpsertArgs<ExtArgs>>): Prisma__CargosClient<$Result.GetResult<Prisma.$CargosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargosCountArgs} args - Arguments to filter Cargos to count.
     * @example
     * // Count the number of Cargos
     * const count = await prisma.cargos.count({
     *   where: {
     *     // ... the filter for the Cargos we want to count
     *   }
     * })
    **/
    count<T extends CargosCountArgs>(
      args?: Subset<T, CargosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CargosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CargosAggregateArgs>(args: Subset<T, CargosAggregateArgs>): Prisma.PrismaPromise<GetCargosAggregateType<T>>

    /**
     * Group by Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CargosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CargosGroupByArgs['orderBy'] }
        : { orderBy?: CargosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CargosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cargos model
   */
  readonly fields: CargosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cargos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CargosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuarios<T extends Cargos$UsuariosArgs<ExtArgs> = {}>(args?: Subset<T, Cargos$UsuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cargos model
   */
  interface CargosFieldRefs {
    readonly Id_cargo: FieldRef<"Cargos", 'Int'>
    readonly Nombre_cargo: FieldRef<"Cargos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cargos findUnique
   */
  export type CargosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargos
     */
    select?: CargosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargos
     */
    omit?: CargosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargosInclude<ExtArgs> | null
    /**
     * Filter, which Cargos to fetch.
     */
    where: CargosWhereUniqueInput
  }

  /**
   * Cargos findUniqueOrThrow
   */
  export type CargosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargos
     */
    select?: CargosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargos
     */
    omit?: CargosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargosInclude<ExtArgs> | null
    /**
     * Filter, which Cargos to fetch.
     */
    where: CargosWhereUniqueInput
  }

  /**
   * Cargos findFirst
   */
  export type CargosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargos
     */
    select?: CargosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargos
     */
    omit?: CargosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargosInclude<ExtArgs> | null
    /**
     * Filter, which Cargos to fetch.
     */
    where?: CargosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargosOrderByWithRelationInput | CargosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargos.
     */
    cursor?: CargosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargosScalarFieldEnum | CargosScalarFieldEnum[]
  }

  /**
   * Cargos findFirstOrThrow
   */
  export type CargosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargos
     */
    select?: CargosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargos
     */
    omit?: CargosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargosInclude<ExtArgs> | null
    /**
     * Filter, which Cargos to fetch.
     */
    where?: CargosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargosOrderByWithRelationInput | CargosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargos.
     */
    cursor?: CargosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargosScalarFieldEnum | CargosScalarFieldEnum[]
  }

  /**
   * Cargos findMany
   */
  export type CargosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargos
     */
    select?: CargosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargos
     */
    omit?: CargosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargosInclude<ExtArgs> | null
    /**
     * Filter, which Cargos to fetch.
     */
    where?: CargosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargosOrderByWithRelationInput | CargosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cargos.
     */
    cursor?: CargosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    distinct?: CargosScalarFieldEnum | CargosScalarFieldEnum[]
  }

  /**
   * Cargos create
   */
  export type CargosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargos
     */
    select?: CargosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargos
     */
    omit?: CargosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargosInclude<ExtArgs> | null
    /**
     * The data needed to create a Cargos.
     */
    data: XOR<CargosCreateInput, CargosUncheckedCreateInput>
  }

  /**
   * Cargos createMany
   */
  export type CargosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cargos.
     */
    data: CargosCreateManyInput | CargosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cargos update
   */
  export type CargosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargos
     */
    select?: CargosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargos
     */
    omit?: CargosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargosInclude<ExtArgs> | null
    /**
     * The data needed to update a Cargos.
     */
    data: XOR<CargosUpdateInput, CargosUncheckedUpdateInput>
    /**
     * Choose, which Cargos to update.
     */
    where: CargosWhereUniqueInput
  }

  /**
   * Cargos updateMany
   */
  export type CargosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cargos.
     */
    data: XOR<CargosUpdateManyMutationInput, CargosUncheckedUpdateManyInput>
    /**
     * Filter which Cargos to update
     */
    where?: CargosWhereInput
    /**
     * Limit how many Cargos to update.
     */
    limit?: number
  }

  /**
   * Cargos upsert
   */
  export type CargosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargos
     */
    select?: CargosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargos
     */
    omit?: CargosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargosInclude<ExtArgs> | null
    /**
     * The filter to search for the Cargos to update in case it exists.
     */
    where: CargosWhereUniqueInput
    /**
     * In case the Cargos found by the `where` argument doesn't exist, create a new Cargos with this data.
     */
    create: XOR<CargosCreateInput, CargosUncheckedCreateInput>
    /**
     * In case the Cargos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CargosUpdateInput, CargosUncheckedUpdateInput>
  }

  /**
   * Cargos delete
   */
  export type CargosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargos
     */
    select?: CargosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargos
     */
    omit?: CargosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargosInclude<ExtArgs> | null
    /**
     * Filter which Cargos to delete.
     */
    where: CargosWhereUniqueInput
  }

  /**
   * Cargos deleteMany
   */
  export type CargosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargos to delete
     */
    where?: CargosWhereInput
    /**
     * Limit how many Cargos to delete.
     */
    limit?: number
  }

  /**
   * Cargos.Usuarios
   */
  export type Cargos$UsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    cursor?: UsuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Cargos without action
   */
  export type CargosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargos
     */
    select?: CargosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargos
     */
    omit?: CargosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargosInclude<ExtArgs> | null
  }


  /**
   * Model Detalle_ventas_productos
   */

  export type AggregateDetalle_ventas_productos = {
    _count: Detalle_ventas_productosCountAggregateOutputType | null
    _avg: Detalle_ventas_productosAvgAggregateOutputType | null
    _sum: Detalle_ventas_productosSumAggregateOutputType | null
    _min: Detalle_ventas_productosMinAggregateOutputType | null
    _max: Detalle_ventas_productosMaxAggregateOutputType | null
  }

  export type Detalle_ventas_productosAvgAggregateOutputType = {
    Id_ventas: number | null
    Id_producto: number | null
    Cantidad: number | null
    Precio_total: Decimal | null
  }

  export type Detalle_ventas_productosSumAggregateOutputType = {
    Id_ventas: number | null
    Id_producto: number | null
    Cantidad: number | null
    Precio_total: Decimal | null
  }

  export type Detalle_ventas_productosMinAggregateOutputType = {
    Id_ventas: number | null
    Id_producto: number | null
    Cantidad: number | null
    Precio_total: Decimal | null
  }

  export type Detalle_ventas_productosMaxAggregateOutputType = {
    Id_ventas: number | null
    Id_producto: number | null
    Cantidad: number | null
    Precio_total: Decimal | null
  }

  export type Detalle_ventas_productosCountAggregateOutputType = {
    Id_ventas: number
    Id_producto: number
    Cantidad: number
    Precio_total: number
    _all: number
  }


  export type Detalle_ventas_productosAvgAggregateInputType = {
    Id_ventas?: true
    Id_producto?: true
    Cantidad?: true
    Precio_total?: true
  }

  export type Detalle_ventas_productosSumAggregateInputType = {
    Id_ventas?: true
    Id_producto?: true
    Cantidad?: true
    Precio_total?: true
  }

  export type Detalle_ventas_productosMinAggregateInputType = {
    Id_ventas?: true
    Id_producto?: true
    Cantidad?: true
    Precio_total?: true
  }

  export type Detalle_ventas_productosMaxAggregateInputType = {
    Id_ventas?: true
    Id_producto?: true
    Cantidad?: true
    Precio_total?: true
  }

  export type Detalle_ventas_productosCountAggregateInputType = {
    Id_ventas?: true
    Id_producto?: true
    Cantidad?: true
    Precio_total?: true
    _all?: true
  }

  export type Detalle_ventas_productosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detalle_ventas_productos to aggregate.
     */
    where?: Detalle_ventas_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalle_ventas_productos to fetch.
     */
    orderBy?: Detalle_ventas_productosOrderByWithRelationInput | Detalle_ventas_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Detalle_ventas_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalle_ventas_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalle_ventas_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Detalle_ventas_productos
    **/
    _count?: true | Detalle_ventas_productosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detalle_ventas_productosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detalle_ventas_productosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detalle_ventas_productosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detalle_ventas_productosMaxAggregateInputType
  }

  export type GetDetalle_ventas_productosAggregateType<T extends Detalle_ventas_productosAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalle_ventas_productos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalle_ventas_productos[P]>
      : GetScalarType<T[P], AggregateDetalle_ventas_productos[P]>
  }




  export type Detalle_ventas_productosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Detalle_ventas_productosWhereInput
    orderBy?: Detalle_ventas_productosOrderByWithAggregationInput | Detalle_ventas_productosOrderByWithAggregationInput[]
    by: Detalle_ventas_productosScalarFieldEnum[] | Detalle_ventas_productosScalarFieldEnum
    having?: Detalle_ventas_productosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detalle_ventas_productosCountAggregateInputType | true
    _avg?: Detalle_ventas_productosAvgAggregateInputType
    _sum?: Detalle_ventas_productosSumAggregateInputType
    _min?: Detalle_ventas_productosMinAggregateInputType
    _max?: Detalle_ventas_productosMaxAggregateInputType
  }

  export type Detalle_ventas_productosGroupByOutputType = {
    Id_ventas: number
    Id_producto: number
    Cantidad: number | null
    Precio_total: Decimal | null
    _count: Detalle_ventas_productosCountAggregateOutputType | null
    _avg: Detalle_ventas_productosAvgAggregateOutputType | null
    _sum: Detalle_ventas_productosSumAggregateOutputType | null
    _min: Detalle_ventas_productosMinAggregateOutputType | null
    _max: Detalle_ventas_productosMaxAggregateOutputType | null
  }

  type GetDetalle_ventas_productosGroupByPayload<T extends Detalle_ventas_productosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detalle_ventas_productosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detalle_ventas_productosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detalle_ventas_productosGroupByOutputType[P]>
            : GetScalarType<T[P], Detalle_ventas_productosGroupByOutputType[P]>
        }
      >
    >


  export type Detalle_ventas_productosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_ventas?: boolean
    Id_producto?: boolean
    Cantidad?: boolean
    Precio_total?: boolean
    Productos?: boolean | ProductosDefaultArgs<ExtArgs>
    Ventas?: boolean | VentasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_ventas_productos"]>



  export type Detalle_ventas_productosSelectScalar = {
    Id_ventas?: boolean
    Id_producto?: boolean
    Cantidad?: boolean
    Precio_total?: boolean
  }

  export type Detalle_ventas_productosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_ventas" | "Id_producto" | "Cantidad" | "Precio_total", ExtArgs["result"]["detalle_ventas_productos"]>
  export type Detalle_ventas_productosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Productos?: boolean | ProductosDefaultArgs<ExtArgs>
    Ventas?: boolean | VentasDefaultArgs<ExtArgs>
  }

  export type $Detalle_ventas_productosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Detalle_ventas_productos"
    objects: {
      Productos: Prisma.$ProductosPayload<ExtArgs>
      Ventas: Prisma.$VentasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id_ventas: number
      Id_producto: number
      Cantidad: number | null
      Precio_total: Prisma.Decimal | null
    }, ExtArgs["result"]["detalle_ventas_productos"]>
    composites: {}
  }

  type Detalle_ventas_productosGetPayload<S extends boolean | null | undefined | Detalle_ventas_productosDefaultArgs> = $Result.GetResult<Prisma.$Detalle_ventas_productosPayload, S>

  type Detalle_ventas_productosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Detalle_ventas_productosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detalle_ventas_productosCountAggregateInputType | true
    }

  export interface Detalle_ventas_productosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Detalle_ventas_productos'], meta: { name: 'Detalle_ventas_productos' } }
    /**
     * Find zero or one Detalle_ventas_productos that matches the filter.
     * @param {Detalle_ventas_productosFindUniqueArgs} args - Arguments to find a Detalle_ventas_productos
     * @example
     * // Get one Detalle_ventas_productos
     * const detalle_ventas_productos = await prisma.detalle_ventas_productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Detalle_ventas_productosFindUniqueArgs>(args: SelectSubset<T, Detalle_ventas_productosFindUniqueArgs<ExtArgs>>): Prisma__Detalle_ventas_productosClient<$Result.GetResult<Prisma.$Detalle_ventas_productosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detalle_ventas_productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Detalle_ventas_productosFindUniqueOrThrowArgs} args - Arguments to find a Detalle_ventas_productos
     * @example
     * // Get one Detalle_ventas_productos
     * const detalle_ventas_productos = await prisma.detalle_ventas_productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Detalle_ventas_productosFindUniqueOrThrowArgs>(args: SelectSubset<T, Detalle_ventas_productosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Detalle_ventas_productosClient<$Result.GetResult<Prisma.$Detalle_ventas_productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_ventas_productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_ventas_productosFindFirstArgs} args - Arguments to find a Detalle_ventas_productos
     * @example
     * // Get one Detalle_ventas_productos
     * const detalle_ventas_productos = await prisma.detalle_ventas_productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Detalle_ventas_productosFindFirstArgs>(args?: SelectSubset<T, Detalle_ventas_productosFindFirstArgs<ExtArgs>>): Prisma__Detalle_ventas_productosClient<$Result.GetResult<Prisma.$Detalle_ventas_productosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_ventas_productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_ventas_productosFindFirstOrThrowArgs} args - Arguments to find a Detalle_ventas_productos
     * @example
     * // Get one Detalle_ventas_productos
     * const detalle_ventas_productos = await prisma.detalle_ventas_productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Detalle_ventas_productosFindFirstOrThrowArgs>(args?: SelectSubset<T, Detalle_ventas_productosFindFirstOrThrowArgs<ExtArgs>>): Prisma__Detalle_ventas_productosClient<$Result.GetResult<Prisma.$Detalle_ventas_productosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detalle_ventas_productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_ventas_productosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalle_ventas_productos
     * const detalle_ventas_productos = await prisma.detalle_ventas_productos.findMany()
     * 
     * // Get first 10 Detalle_ventas_productos
     * const detalle_ventas_productos = await prisma.detalle_ventas_productos.findMany({ take: 10 })
     * 
     * // Only select the `Id_ventas`
     * const detalle_ventas_productosWithId_ventasOnly = await prisma.detalle_ventas_productos.findMany({ select: { Id_ventas: true } })
     * 
     */
    findMany<T extends Detalle_ventas_productosFindManyArgs>(args?: SelectSubset<T, Detalle_ventas_productosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detalle_ventas_productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detalle_ventas_productos.
     * @param {Detalle_ventas_productosCreateArgs} args - Arguments to create a Detalle_ventas_productos.
     * @example
     * // Create one Detalle_ventas_productos
     * const Detalle_ventas_productos = await prisma.detalle_ventas_productos.create({
     *   data: {
     *     // ... data to create a Detalle_ventas_productos
     *   }
     * })
     * 
     */
    create<T extends Detalle_ventas_productosCreateArgs>(args: SelectSubset<T, Detalle_ventas_productosCreateArgs<ExtArgs>>): Prisma__Detalle_ventas_productosClient<$Result.GetResult<Prisma.$Detalle_ventas_productosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detalle_ventas_productos.
     * @param {Detalle_ventas_productosCreateManyArgs} args - Arguments to create many Detalle_ventas_productos.
     * @example
     * // Create many Detalle_ventas_productos
     * const detalle_ventas_productos = await prisma.detalle_ventas_productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Detalle_ventas_productosCreateManyArgs>(args?: SelectSubset<T, Detalle_ventas_productosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Detalle_ventas_productos.
     * @param {Detalle_ventas_productosDeleteArgs} args - Arguments to delete one Detalle_ventas_productos.
     * @example
     * // Delete one Detalle_ventas_productos
     * const Detalle_ventas_productos = await prisma.detalle_ventas_productos.delete({
     *   where: {
     *     // ... filter to delete one Detalle_ventas_productos
     *   }
     * })
     * 
     */
    delete<T extends Detalle_ventas_productosDeleteArgs>(args: SelectSubset<T, Detalle_ventas_productosDeleteArgs<ExtArgs>>): Prisma__Detalle_ventas_productosClient<$Result.GetResult<Prisma.$Detalle_ventas_productosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detalle_ventas_productos.
     * @param {Detalle_ventas_productosUpdateArgs} args - Arguments to update one Detalle_ventas_productos.
     * @example
     * // Update one Detalle_ventas_productos
     * const detalle_ventas_productos = await prisma.detalle_ventas_productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Detalle_ventas_productosUpdateArgs>(args: SelectSubset<T, Detalle_ventas_productosUpdateArgs<ExtArgs>>): Prisma__Detalle_ventas_productosClient<$Result.GetResult<Prisma.$Detalle_ventas_productosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detalle_ventas_productos.
     * @param {Detalle_ventas_productosDeleteManyArgs} args - Arguments to filter Detalle_ventas_productos to delete.
     * @example
     * // Delete a few Detalle_ventas_productos
     * const { count } = await prisma.detalle_ventas_productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Detalle_ventas_productosDeleteManyArgs>(args?: SelectSubset<T, Detalle_ventas_productosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalle_ventas_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_ventas_productosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalle_ventas_productos
     * const detalle_ventas_productos = await prisma.detalle_ventas_productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Detalle_ventas_productosUpdateManyArgs>(args: SelectSubset<T, Detalle_ventas_productosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Detalle_ventas_productos.
     * @param {Detalle_ventas_productosUpsertArgs} args - Arguments to update or create a Detalle_ventas_productos.
     * @example
     * // Update or create a Detalle_ventas_productos
     * const detalle_ventas_productos = await prisma.detalle_ventas_productos.upsert({
     *   create: {
     *     // ... data to create a Detalle_ventas_productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalle_ventas_productos we want to update
     *   }
     * })
     */
    upsert<T extends Detalle_ventas_productosUpsertArgs>(args: SelectSubset<T, Detalle_ventas_productosUpsertArgs<ExtArgs>>): Prisma__Detalle_ventas_productosClient<$Result.GetResult<Prisma.$Detalle_ventas_productosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detalle_ventas_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_ventas_productosCountArgs} args - Arguments to filter Detalle_ventas_productos to count.
     * @example
     * // Count the number of Detalle_ventas_productos
     * const count = await prisma.detalle_ventas_productos.count({
     *   where: {
     *     // ... the filter for the Detalle_ventas_productos we want to count
     *   }
     * })
    **/
    count<T extends Detalle_ventas_productosCountArgs>(
      args?: Subset<T, Detalle_ventas_productosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detalle_ventas_productosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalle_ventas_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_ventas_productosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detalle_ventas_productosAggregateArgs>(args: Subset<T, Detalle_ventas_productosAggregateArgs>): Prisma.PrismaPromise<GetDetalle_ventas_productosAggregateType<T>>

    /**
     * Group by Detalle_ventas_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_ventas_productosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Detalle_ventas_productosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Detalle_ventas_productosGroupByArgs['orderBy'] }
        : { orderBy?: Detalle_ventas_productosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Detalle_ventas_productosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalle_ventas_productosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Detalle_ventas_productos model
   */
  readonly fields: Detalle_ventas_productosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Detalle_ventas_productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Detalle_ventas_productosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Productos<T extends ProductosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductosDefaultArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Ventas<T extends VentasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VentasDefaultArgs<ExtArgs>>): Prisma__VentasClient<$Result.GetResult<Prisma.$VentasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Detalle_ventas_productos model
   */
  interface Detalle_ventas_productosFieldRefs {
    readonly Id_ventas: FieldRef<"Detalle_ventas_productos", 'Int'>
    readonly Id_producto: FieldRef<"Detalle_ventas_productos", 'Int'>
    readonly Cantidad: FieldRef<"Detalle_ventas_productos", 'Int'>
    readonly Precio_total: FieldRef<"Detalle_ventas_productos", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Detalle_ventas_productos findUnique
   */
  export type Detalle_ventas_productosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_ventas_productos
     */
    select?: Detalle_ventas_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_ventas_productos
     */
    omit?: Detalle_ventas_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_ventas_productosInclude<ExtArgs> | null
    /**
     * Filter, which Detalle_ventas_productos to fetch.
     */
    where: Detalle_ventas_productosWhereUniqueInput
  }

  /**
   * Detalle_ventas_productos findUniqueOrThrow
   */
  export type Detalle_ventas_productosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_ventas_productos
     */
    select?: Detalle_ventas_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_ventas_productos
     */
    omit?: Detalle_ventas_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_ventas_productosInclude<ExtArgs> | null
    /**
     * Filter, which Detalle_ventas_productos to fetch.
     */
    where: Detalle_ventas_productosWhereUniqueInput
  }

  /**
   * Detalle_ventas_productos findFirst
   */
  export type Detalle_ventas_productosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_ventas_productos
     */
    select?: Detalle_ventas_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_ventas_productos
     */
    omit?: Detalle_ventas_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_ventas_productosInclude<ExtArgs> | null
    /**
     * Filter, which Detalle_ventas_productos to fetch.
     */
    where?: Detalle_ventas_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalle_ventas_productos to fetch.
     */
    orderBy?: Detalle_ventas_productosOrderByWithRelationInput | Detalle_ventas_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detalle_ventas_productos.
     */
    cursor?: Detalle_ventas_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalle_ventas_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalle_ventas_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detalle_ventas_productos.
     */
    distinct?: Detalle_ventas_productosScalarFieldEnum | Detalle_ventas_productosScalarFieldEnum[]
  }

  /**
   * Detalle_ventas_productos findFirstOrThrow
   */
  export type Detalle_ventas_productosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_ventas_productos
     */
    select?: Detalle_ventas_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_ventas_productos
     */
    omit?: Detalle_ventas_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_ventas_productosInclude<ExtArgs> | null
    /**
     * Filter, which Detalle_ventas_productos to fetch.
     */
    where?: Detalle_ventas_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalle_ventas_productos to fetch.
     */
    orderBy?: Detalle_ventas_productosOrderByWithRelationInput | Detalle_ventas_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detalle_ventas_productos.
     */
    cursor?: Detalle_ventas_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalle_ventas_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalle_ventas_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detalle_ventas_productos.
     */
    distinct?: Detalle_ventas_productosScalarFieldEnum | Detalle_ventas_productosScalarFieldEnum[]
  }

  /**
   * Detalle_ventas_productos findMany
   */
  export type Detalle_ventas_productosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_ventas_productos
     */
    select?: Detalle_ventas_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_ventas_productos
     */
    omit?: Detalle_ventas_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_ventas_productosInclude<ExtArgs> | null
    /**
     * Filter, which Detalle_ventas_productos to fetch.
     */
    where?: Detalle_ventas_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalle_ventas_productos to fetch.
     */
    orderBy?: Detalle_ventas_productosOrderByWithRelationInput | Detalle_ventas_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Detalle_ventas_productos.
     */
    cursor?: Detalle_ventas_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalle_ventas_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalle_ventas_productos.
     */
    skip?: number
    distinct?: Detalle_ventas_productosScalarFieldEnum | Detalle_ventas_productosScalarFieldEnum[]
  }

  /**
   * Detalle_ventas_productos create
   */
  export type Detalle_ventas_productosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_ventas_productos
     */
    select?: Detalle_ventas_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_ventas_productos
     */
    omit?: Detalle_ventas_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_ventas_productosInclude<ExtArgs> | null
    /**
     * The data needed to create a Detalle_ventas_productos.
     */
    data: XOR<Detalle_ventas_productosCreateInput, Detalle_ventas_productosUncheckedCreateInput>
  }

  /**
   * Detalle_ventas_productos createMany
   */
  export type Detalle_ventas_productosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Detalle_ventas_productos.
     */
    data: Detalle_ventas_productosCreateManyInput | Detalle_ventas_productosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Detalle_ventas_productos update
   */
  export type Detalle_ventas_productosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_ventas_productos
     */
    select?: Detalle_ventas_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_ventas_productos
     */
    omit?: Detalle_ventas_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_ventas_productosInclude<ExtArgs> | null
    /**
     * The data needed to update a Detalle_ventas_productos.
     */
    data: XOR<Detalle_ventas_productosUpdateInput, Detalle_ventas_productosUncheckedUpdateInput>
    /**
     * Choose, which Detalle_ventas_productos to update.
     */
    where: Detalle_ventas_productosWhereUniqueInput
  }

  /**
   * Detalle_ventas_productos updateMany
   */
  export type Detalle_ventas_productosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Detalle_ventas_productos.
     */
    data: XOR<Detalle_ventas_productosUpdateManyMutationInput, Detalle_ventas_productosUncheckedUpdateManyInput>
    /**
     * Filter which Detalle_ventas_productos to update
     */
    where?: Detalle_ventas_productosWhereInput
    /**
     * Limit how many Detalle_ventas_productos to update.
     */
    limit?: number
  }

  /**
   * Detalle_ventas_productos upsert
   */
  export type Detalle_ventas_productosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_ventas_productos
     */
    select?: Detalle_ventas_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_ventas_productos
     */
    omit?: Detalle_ventas_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_ventas_productosInclude<ExtArgs> | null
    /**
     * The filter to search for the Detalle_ventas_productos to update in case it exists.
     */
    where: Detalle_ventas_productosWhereUniqueInput
    /**
     * In case the Detalle_ventas_productos found by the `where` argument doesn't exist, create a new Detalle_ventas_productos with this data.
     */
    create: XOR<Detalle_ventas_productosCreateInput, Detalle_ventas_productosUncheckedCreateInput>
    /**
     * In case the Detalle_ventas_productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Detalle_ventas_productosUpdateInput, Detalle_ventas_productosUncheckedUpdateInput>
  }

  /**
   * Detalle_ventas_productos delete
   */
  export type Detalle_ventas_productosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_ventas_productos
     */
    select?: Detalle_ventas_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_ventas_productos
     */
    omit?: Detalle_ventas_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_ventas_productosInclude<ExtArgs> | null
    /**
     * Filter which Detalle_ventas_productos to delete.
     */
    where: Detalle_ventas_productosWhereUniqueInput
  }

  /**
   * Detalle_ventas_productos deleteMany
   */
  export type Detalle_ventas_productosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detalle_ventas_productos to delete
     */
    where?: Detalle_ventas_productosWhereInput
    /**
     * Limit how many Detalle_ventas_productos to delete.
     */
    limit?: number
  }

  /**
   * Detalle_ventas_productos without action
   */
  export type Detalle_ventas_productosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_ventas_productos
     */
    select?: Detalle_ventas_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_ventas_productos
     */
    omit?: Detalle_ventas_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_ventas_productosInclude<ExtArgs> | null
  }


  /**
   * Model Lote_productos
   */

  export type AggregateLote_productos = {
    _count: Lote_productosCountAggregateOutputType | null
    _avg: Lote_productosAvgAggregateOutputType | null
    _sum: Lote_productosSumAggregateOutputType | null
    _min: Lote_productosMinAggregateOutputType | null
    _max: Lote_productosMaxAggregateOutputType | null
  }

  export type Lote_productosAvgAggregateOutputType = {
    Id_lote: number | null
    Id_producto: number | null
    Precio_compra: Decimal | null
    Cantidad: number | null
    Stock: number | null
  }

  export type Lote_productosSumAggregateOutputType = {
    Id_lote: number | null
    Id_producto: number | null
    Precio_compra: Decimal | null
    Cantidad: number | null
    Stock: number | null
  }

  export type Lote_productosMinAggregateOutputType = {
    Id_lote: number | null
    Id_producto: number | null
    Precio_compra: Decimal | null
    Cantidad: number | null
    Stock: number | null
    Fecha: Date | null
  }

  export type Lote_productosMaxAggregateOutputType = {
    Id_lote: number | null
    Id_producto: number | null
    Precio_compra: Decimal | null
    Cantidad: number | null
    Stock: number | null
    Fecha: Date | null
  }

  export type Lote_productosCountAggregateOutputType = {
    Id_lote: number
    Id_producto: number
    Precio_compra: number
    Cantidad: number
    Stock: number
    Fecha: number
    _all: number
  }


  export type Lote_productosAvgAggregateInputType = {
    Id_lote?: true
    Id_producto?: true
    Precio_compra?: true
    Cantidad?: true
    Stock?: true
  }

  export type Lote_productosSumAggregateInputType = {
    Id_lote?: true
    Id_producto?: true
    Precio_compra?: true
    Cantidad?: true
    Stock?: true
  }

  export type Lote_productosMinAggregateInputType = {
    Id_lote?: true
    Id_producto?: true
    Precio_compra?: true
    Cantidad?: true
    Stock?: true
    Fecha?: true
  }

  export type Lote_productosMaxAggregateInputType = {
    Id_lote?: true
    Id_producto?: true
    Precio_compra?: true
    Cantidad?: true
    Stock?: true
    Fecha?: true
  }

  export type Lote_productosCountAggregateInputType = {
    Id_lote?: true
    Id_producto?: true
    Precio_compra?: true
    Cantidad?: true
    Stock?: true
    Fecha?: true
    _all?: true
  }

  export type Lote_productosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lote_productos to aggregate.
     */
    where?: Lote_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lote_productos to fetch.
     */
    orderBy?: Lote_productosOrderByWithRelationInput | Lote_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Lote_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lote_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lote_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lote_productos
    **/
    _count?: true | Lote_productosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lote_productosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lote_productosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lote_productosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lote_productosMaxAggregateInputType
  }

  export type GetLote_productosAggregateType<T extends Lote_productosAggregateArgs> = {
        [P in keyof T & keyof AggregateLote_productos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLote_productos[P]>
      : GetScalarType<T[P], AggregateLote_productos[P]>
  }




  export type Lote_productosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Lote_productosWhereInput
    orderBy?: Lote_productosOrderByWithAggregationInput | Lote_productosOrderByWithAggregationInput[]
    by: Lote_productosScalarFieldEnum[] | Lote_productosScalarFieldEnum
    having?: Lote_productosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lote_productosCountAggregateInputType | true
    _avg?: Lote_productosAvgAggregateInputType
    _sum?: Lote_productosSumAggregateInputType
    _min?: Lote_productosMinAggregateInputType
    _max?: Lote_productosMaxAggregateInputType
  }

  export type Lote_productosGroupByOutputType = {
    Id_lote: number
    Id_producto: number | null
    Precio_compra: Decimal | null
    Cantidad: number | null
    Stock: number | null
    Fecha: Date | null
    _count: Lote_productosCountAggregateOutputType | null
    _avg: Lote_productosAvgAggregateOutputType | null
    _sum: Lote_productosSumAggregateOutputType | null
    _min: Lote_productosMinAggregateOutputType | null
    _max: Lote_productosMaxAggregateOutputType | null
  }

  type GetLote_productosGroupByPayload<T extends Lote_productosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lote_productosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lote_productosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lote_productosGroupByOutputType[P]>
            : GetScalarType<T[P], Lote_productosGroupByOutputType[P]>
        }
      >
    >


  export type Lote_productosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_lote?: boolean
    Id_producto?: boolean
    Precio_compra?: boolean
    Cantidad?: boolean
    Stock?: boolean
    Fecha?: boolean
    Productos?: boolean | Lote_productos$ProductosArgs<ExtArgs>
  }, ExtArgs["result"]["lote_productos"]>



  export type Lote_productosSelectScalar = {
    Id_lote?: boolean
    Id_producto?: boolean
    Precio_compra?: boolean
    Cantidad?: boolean
    Stock?: boolean
    Fecha?: boolean
  }

  export type Lote_productosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_lote" | "Id_producto" | "Precio_compra" | "Cantidad" | "Stock" | "Fecha", ExtArgs["result"]["lote_productos"]>
  export type Lote_productosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Productos?: boolean | Lote_productos$ProductosArgs<ExtArgs>
  }

  export type $Lote_productosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lote_productos"
    objects: {
      Productos: Prisma.$ProductosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Id_lote: number
      Id_producto: number | null
      Precio_compra: Prisma.Decimal | null
      Cantidad: number | null
      Stock: number | null
      Fecha: Date | null
    }, ExtArgs["result"]["lote_productos"]>
    composites: {}
  }

  type Lote_productosGetPayload<S extends boolean | null | undefined | Lote_productosDefaultArgs> = $Result.GetResult<Prisma.$Lote_productosPayload, S>

  type Lote_productosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Lote_productosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lote_productosCountAggregateInputType | true
    }

  export interface Lote_productosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lote_productos'], meta: { name: 'Lote_productos' } }
    /**
     * Find zero or one Lote_productos that matches the filter.
     * @param {Lote_productosFindUniqueArgs} args - Arguments to find a Lote_productos
     * @example
     * // Get one Lote_productos
     * const lote_productos = await prisma.lote_productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Lote_productosFindUniqueArgs>(args: SelectSubset<T, Lote_productosFindUniqueArgs<ExtArgs>>): Prisma__Lote_productosClient<$Result.GetResult<Prisma.$Lote_productosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lote_productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Lote_productosFindUniqueOrThrowArgs} args - Arguments to find a Lote_productos
     * @example
     * // Get one Lote_productos
     * const lote_productos = await prisma.lote_productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Lote_productosFindUniqueOrThrowArgs>(args: SelectSubset<T, Lote_productosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Lote_productosClient<$Result.GetResult<Prisma.$Lote_productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lote_productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lote_productosFindFirstArgs} args - Arguments to find a Lote_productos
     * @example
     * // Get one Lote_productos
     * const lote_productos = await prisma.lote_productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Lote_productosFindFirstArgs>(args?: SelectSubset<T, Lote_productosFindFirstArgs<ExtArgs>>): Prisma__Lote_productosClient<$Result.GetResult<Prisma.$Lote_productosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lote_productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lote_productosFindFirstOrThrowArgs} args - Arguments to find a Lote_productos
     * @example
     * // Get one Lote_productos
     * const lote_productos = await prisma.lote_productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Lote_productosFindFirstOrThrowArgs>(args?: SelectSubset<T, Lote_productosFindFirstOrThrowArgs<ExtArgs>>): Prisma__Lote_productosClient<$Result.GetResult<Prisma.$Lote_productosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lote_productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lote_productosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lote_productos
     * const lote_productos = await prisma.lote_productos.findMany()
     * 
     * // Get first 10 Lote_productos
     * const lote_productos = await prisma.lote_productos.findMany({ take: 10 })
     * 
     * // Only select the `Id_lote`
     * const lote_productosWithId_loteOnly = await prisma.lote_productos.findMany({ select: { Id_lote: true } })
     * 
     */
    findMany<T extends Lote_productosFindManyArgs>(args?: SelectSubset<T, Lote_productosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Lote_productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lote_productos.
     * @param {Lote_productosCreateArgs} args - Arguments to create a Lote_productos.
     * @example
     * // Create one Lote_productos
     * const Lote_productos = await prisma.lote_productos.create({
     *   data: {
     *     // ... data to create a Lote_productos
     *   }
     * })
     * 
     */
    create<T extends Lote_productosCreateArgs>(args: SelectSubset<T, Lote_productosCreateArgs<ExtArgs>>): Prisma__Lote_productosClient<$Result.GetResult<Prisma.$Lote_productosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lote_productos.
     * @param {Lote_productosCreateManyArgs} args - Arguments to create many Lote_productos.
     * @example
     * // Create many Lote_productos
     * const lote_productos = await prisma.lote_productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Lote_productosCreateManyArgs>(args?: SelectSubset<T, Lote_productosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lote_productos.
     * @param {Lote_productosDeleteArgs} args - Arguments to delete one Lote_productos.
     * @example
     * // Delete one Lote_productos
     * const Lote_productos = await prisma.lote_productos.delete({
     *   where: {
     *     // ... filter to delete one Lote_productos
     *   }
     * })
     * 
     */
    delete<T extends Lote_productosDeleteArgs>(args: SelectSubset<T, Lote_productosDeleteArgs<ExtArgs>>): Prisma__Lote_productosClient<$Result.GetResult<Prisma.$Lote_productosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lote_productos.
     * @param {Lote_productosUpdateArgs} args - Arguments to update one Lote_productos.
     * @example
     * // Update one Lote_productos
     * const lote_productos = await prisma.lote_productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Lote_productosUpdateArgs>(args: SelectSubset<T, Lote_productosUpdateArgs<ExtArgs>>): Prisma__Lote_productosClient<$Result.GetResult<Prisma.$Lote_productosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lote_productos.
     * @param {Lote_productosDeleteManyArgs} args - Arguments to filter Lote_productos to delete.
     * @example
     * // Delete a few Lote_productos
     * const { count } = await prisma.lote_productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Lote_productosDeleteManyArgs>(args?: SelectSubset<T, Lote_productosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lote_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lote_productosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lote_productos
     * const lote_productos = await prisma.lote_productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Lote_productosUpdateManyArgs>(args: SelectSubset<T, Lote_productosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lote_productos.
     * @param {Lote_productosUpsertArgs} args - Arguments to update or create a Lote_productos.
     * @example
     * // Update or create a Lote_productos
     * const lote_productos = await prisma.lote_productos.upsert({
     *   create: {
     *     // ... data to create a Lote_productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lote_productos we want to update
     *   }
     * })
     */
    upsert<T extends Lote_productosUpsertArgs>(args: SelectSubset<T, Lote_productosUpsertArgs<ExtArgs>>): Prisma__Lote_productosClient<$Result.GetResult<Prisma.$Lote_productosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lote_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lote_productosCountArgs} args - Arguments to filter Lote_productos to count.
     * @example
     * // Count the number of Lote_productos
     * const count = await prisma.lote_productos.count({
     *   where: {
     *     // ... the filter for the Lote_productos we want to count
     *   }
     * })
    **/
    count<T extends Lote_productosCountArgs>(
      args?: Subset<T, Lote_productosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lote_productosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lote_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lote_productosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Lote_productosAggregateArgs>(args: Subset<T, Lote_productosAggregateArgs>): Prisma.PrismaPromise<GetLote_productosAggregateType<T>>

    /**
     * Group by Lote_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lote_productosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Lote_productosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Lote_productosGroupByArgs['orderBy'] }
        : { orderBy?: Lote_productosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Lote_productosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLote_productosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lote_productos model
   */
  readonly fields: Lote_productosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lote_productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Lote_productosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Productos<T extends Lote_productos$ProductosArgs<ExtArgs> = {}>(args?: Subset<T, Lote_productos$ProductosArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lote_productos model
   */
  interface Lote_productosFieldRefs {
    readonly Id_lote: FieldRef<"Lote_productos", 'Int'>
    readonly Id_producto: FieldRef<"Lote_productos", 'Int'>
    readonly Precio_compra: FieldRef<"Lote_productos", 'Decimal'>
    readonly Cantidad: FieldRef<"Lote_productos", 'Int'>
    readonly Stock: FieldRef<"Lote_productos", 'Int'>
    readonly Fecha: FieldRef<"Lote_productos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lote_productos findUnique
   */
  export type Lote_productosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote_productos
     */
    select?: Lote_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote_productos
     */
    omit?: Lote_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lote_productosInclude<ExtArgs> | null
    /**
     * Filter, which Lote_productos to fetch.
     */
    where: Lote_productosWhereUniqueInput
  }

  /**
   * Lote_productos findUniqueOrThrow
   */
  export type Lote_productosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote_productos
     */
    select?: Lote_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote_productos
     */
    omit?: Lote_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lote_productosInclude<ExtArgs> | null
    /**
     * Filter, which Lote_productos to fetch.
     */
    where: Lote_productosWhereUniqueInput
  }

  /**
   * Lote_productos findFirst
   */
  export type Lote_productosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote_productos
     */
    select?: Lote_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote_productos
     */
    omit?: Lote_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lote_productosInclude<ExtArgs> | null
    /**
     * Filter, which Lote_productos to fetch.
     */
    where?: Lote_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lote_productos to fetch.
     */
    orderBy?: Lote_productosOrderByWithRelationInput | Lote_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lote_productos.
     */
    cursor?: Lote_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lote_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lote_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lote_productos.
     */
    distinct?: Lote_productosScalarFieldEnum | Lote_productosScalarFieldEnum[]
  }

  /**
   * Lote_productos findFirstOrThrow
   */
  export type Lote_productosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote_productos
     */
    select?: Lote_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote_productos
     */
    omit?: Lote_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lote_productosInclude<ExtArgs> | null
    /**
     * Filter, which Lote_productos to fetch.
     */
    where?: Lote_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lote_productos to fetch.
     */
    orderBy?: Lote_productosOrderByWithRelationInput | Lote_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lote_productos.
     */
    cursor?: Lote_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lote_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lote_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lote_productos.
     */
    distinct?: Lote_productosScalarFieldEnum | Lote_productosScalarFieldEnum[]
  }

  /**
   * Lote_productos findMany
   */
  export type Lote_productosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote_productos
     */
    select?: Lote_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote_productos
     */
    omit?: Lote_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lote_productosInclude<ExtArgs> | null
    /**
     * Filter, which Lote_productos to fetch.
     */
    where?: Lote_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lote_productos to fetch.
     */
    orderBy?: Lote_productosOrderByWithRelationInput | Lote_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lote_productos.
     */
    cursor?: Lote_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lote_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lote_productos.
     */
    skip?: number
    distinct?: Lote_productosScalarFieldEnum | Lote_productosScalarFieldEnum[]
  }

  /**
   * Lote_productos create
   */
  export type Lote_productosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote_productos
     */
    select?: Lote_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote_productos
     */
    omit?: Lote_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lote_productosInclude<ExtArgs> | null
    /**
     * The data needed to create a Lote_productos.
     */
    data?: XOR<Lote_productosCreateInput, Lote_productosUncheckedCreateInput>
  }

  /**
   * Lote_productos createMany
   */
  export type Lote_productosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lote_productos.
     */
    data: Lote_productosCreateManyInput | Lote_productosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lote_productos update
   */
  export type Lote_productosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote_productos
     */
    select?: Lote_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote_productos
     */
    omit?: Lote_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lote_productosInclude<ExtArgs> | null
    /**
     * The data needed to update a Lote_productos.
     */
    data: XOR<Lote_productosUpdateInput, Lote_productosUncheckedUpdateInput>
    /**
     * Choose, which Lote_productos to update.
     */
    where: Lote_productosWhereUniqueInput
  }

  /**
   * Lote_productos updateMany
   */
  export type Lote_productosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lote_productos.
     */
    data: XOR<Lote_productosUpdateManyMutationInput, Lote_productosUncheckedUpdateManyInput>
    /**
     * Filter which Lote_productos to update
     */
    where?: Lote_productosWhereInput
    /**
     * Limit how many Lote_productos to update.
     */
    limit?: number
  }

  /**
   * Lote_productos upsert
   */
  export type Lote_productosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote_productos
     */
    select?: Lote_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote_productos
     */
    omit?: Lote_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lote_productosInclude<ExtArgs> | null
    /**
     * The filter to search for the Lote_productos to update in case it exists.
     */
    where: Lote_productosWhereUniqueInput
    /**
     * In case the Lote_productos found by the `where` argument doesn't exist, create a new Lote_productos with this data.
     */
    create: XOR<Lote_productosCreateInput, Lote_productosUncheckedCreateInput>
    /**
     * In case the Lote_productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Lote_productosUpdateInput, Lote_productosUncheckedUpdateInput>
  }

  /**
   * Lote_productos delete
   */
  export type Lote_productosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote_productos
     */
    select?: Lote_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote_productos
     */
    omit?: Lote_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lote_productosInclude<ExtArgs> | null
    /**
     * Filter which Lote_productos to delete.
     */
    where: Lote_productosWhereUniqueInput
  }

  /**
   * Lote_productos deleteMany
   */
  export type Lote_productosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lote_productos to delete
     */
    where?: Lote_productosWhereInput
    /**
     * Limit how many Lote_productos to delete.
     */
    limit?: number
  }

  /**
   * Lote_productos.Productos
   */
  export type Lote_productos$ProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    where?: ProductosWhereInput
  }

  /**
   * Lote_productos without action
   */
  export type Lote_productosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote_productos
     */
    select?: Lote_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote_productos
     */
    omit?: Lote_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lote_productosInclude<ExtArgs> | null
  }


  /**
   * Model Medio_pagos
   */

  export type AggregateMedio_pagos = {
    _count: Medio_pagosCountAggregateOutputType | null
    _avg: Medio_pagosAvgAggregateOutputType | null
    _sum: Medio_pagosSumAggregateOutputType | null
    _min: Medio_pagosMinAggregateOutputType | null
    _max: Medio_pagosMaxAggregateOutputType | null
  }

  export type Medio_pagosAvgAggregateOutputType = {
    Id_pago: number | null
  }

  export type Medio_pagosSumAggregateOutputType = {
    Id_pago: number | null
  }

  export type Medio_pagosMinAggregateOutputType = {
    Id_pago: number | null
    Nombre_pago: string | null
  }

  export type Medio_pagosMaxAggregateOutputType = {
    Id_pago: number | null
    Nombre_pago: string | null
  }

  export type Medio_pagosCountAggregateOutputType = {
    Id_pago: number
    Nombre_pago: number
    _all: number
  }


  export type Medio_pagosAvgAggregateInputType = {
    Id_pago?: true
  }

  export type Medio_pagosSumAggregateInputType = {
    Id_pago?: true
  }

  export type Medio_pagosMinAggregateInputType = {
    Id_pago?: true
    Nombre_pago?: true
  }

  export type Medio_pagosMaxAggregateInputType = {
    Id_pago?: true
    Nombre_pago?: true
  }

  export type Medio_pagosCountAggregateInputType = {
    Id_pago?: true
    Nombre_pago?: true
    _all?: true
  }

  export type Medio_pagosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medio_pagos to aggregate.
     */
    where?: Medio_pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medio_pagos to fetch.
     */
    orderBy?: Medio_pagosOrderByWithRelationInput | Medio_pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Medio_pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medio_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medio_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medio_pagos
    **/
    _count?: true | Medio_pagosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Medio_pagosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Medio_pagosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Medio_pagosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Medio_pagosMaxAggregateInputType
  }

  export type GetMedio_pagosAggregateType<T extends Medio_pagosAggregateArgs> = {
        [P in keyof T & keyof AggregateMedio_pagos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedio_pagos[P]>
      : GetScalarType<T[P], AggregateMedio_pagos[P]>
  }




  export type Medio_pagosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Medio_pagosWhereInput
    orderBy?: Medio_pagosOrderByWithAggregationInput | Medio_pagosOrderByWithAggregationInput[]
    by: Medio_pagosScalarFieldEnum[] | Medio_pagosScalarFieldEnum
    having?: Medio_pagosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Medio_pagosCountAggregateInputType | true
    _avg?: Medio_pagosAvgAggregateInputType
    _sum?: Medio_pagosSumAggregateInputType
    _min?: Medio_pagosMinAggregateInputType
    _max?: Medio_pagosMaxAggregateInputType
  }

  export type Medio_pagosGroupByOutputType = {
    Id_pago: number
    Nombre_pago: string | null
    _count: Medio_pagosCountAggregateOutputType | null
    _avg: Medio_pagosAvgAggregateOutputType | null
    _sum: Medio_pagosSumAggregateOutputType | null
    _min: Medio_pagosMinAggregateOutputType | null
    _max: Medio_pagosMaxAggregateOutputType | null
  }

  type GetMedio_pagosGroupByPayload<T extends Medio_pagosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Medio_pagosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Medio_pagosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Medio_pagosGroupByOutputType[P]>
            : GetScalarType<T[P], Medio_pagosGroupByOutputType[P]>
        }
      >
    >


  export type Medio_pagosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_pago?: boolean
    Nombre_pago?: boolean
    Ventas?: boolean | Medio_pagos$VentasArgs<ExtArgs>
    _count?: boolean | Medio_pagosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medio_pagos"]>



  export type Medio_pagosSelectScalar = {
    Id_pago?: boolean
    Nombre_pago?: boolean
  }

  export type Medio_pagosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_pago" | "Nombre_pago", ExtArgs["result"]["medio_pagos"]>
  export type Medio_pagosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ventas?: boolean | Medio_pagos$VentasArgs<ExtArgs>
    _count?: boolean | Medio_pagosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Medio_pagosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medio_pagos"
    objects: {
      Ventas: Prisma.$VentasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id_pago: number
      Nombre_pago: string | null
    }, ExtArgs["result"]["medio_pagos"]>
    composites: {}
  }

  type Medio_pagosGetPayload<S extends boolean | null | undefined | Medio_pagosDefaultArgs> = $Result.GetResult<Prisma.$Medio_pagosPayload, S>

  type Medio_pagosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Medio_pagosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Medio_pagosCountAggregateInputType | true
    }

  export interface Medio_pagosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medio_pagos'], meta: { name: 'Medio_pagos' } }
    /**
     * Find zero or one Medio_pagos that matches the filter.
     * @param {Medio_pagosFindUniqueArgs} args - Arguments to find a Medio_pagos
     * @example
     * // Get one Medio_pagos
     * const medio_pagos = await prisma.medio_pagos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Medio_pagosFindUniqueArgs>(args: SelectSubset<T, Medio_pagosFindUniqueArgs<ExtArgs>>): Prisma__Medio_pagosClient<$Result.GetResult<Prisma.$Medio_pagosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medio_pagos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Medio_pagosFindUniqueOrThrowArgs} args - Arguments to find a Medio_pagos
     * @example
     * // Get one Medio_pagos
     * const medio_pagos = await prisma.medio_pagos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Medio_pagosFindUniqueOrThrowArgs>(args: SelectSubset<T, Medio_pagosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Medio_pagosClient<$Result.GetResult<Prisma.$Medio_pagosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medio_pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medio_pagosFindFirstArgs} args - Arguments to find a Medio_pagos
     * @example
     * // Get one Medio_pagos
     * const medio_pagos = await prisma.medio_pagos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Medio_pagosFindFirstArgs>(args?: SelectSubset<T, Medio_pagosFindFirstArgs<ExtArgs>>): Prisma__Medio_pagosClient<$Result.GetResult<Prisma.$Medio_pagosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medio_pagos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medio_pagosFindFirstOrThrowArgs} args - Arguments to find a Medio_pagos
     * @example
     * // Get one Medio_pagos
     * const medio_pagos = await prisma.medio_pagos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Medio_pagosFindFirstOrThrowArgs>(args?: SelectSubset<T, Medio_pagosFindFirstOrThrowArgs<ExtArgs>>): Prisma__Medio_pagosClient<$Result.GetResult<Prisma.$Medio_pagosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medio_pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medio_pagosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medio_pagos
     * const medio_pagos = await prisma.medio_pagos.findMany()
     * 
     * // Get first 10 Medio_pagos
     * const medio_pagos = await prisma.medio_pagos.findMany({ take: 10 })
     * 
     * // Only select the `Id_pago`
     * const medio_pagosWithId_pagoOnly = await prisma.medio_pagos.findMany({ select: { Id_pago: true } })
     * 
     */
    findMany<T extends Medio_pagosFindManyArgs>(args?: SelectSubset<T, Medio_pagosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medio_pagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medio_pagos.
     * @param {Medio_pagosCreateArgs} args - Arguments to create a Medio_pagos.
     * @example
     * // Create one Medio_pagos
     * const Medio_pagos = await prisma.medio_pagos.create({
     *   data: {
     *     // ... data to create a Medio_pagos
     *   }
     * })
     * 
     */
    create<T extends Medio_pagosCreateArgs>(args: SelectSubset<T, Medio_pagosCreateArgs<ExtArgs>>): Prisma__Medio_pagosClient<$Result.GetResult<Prisma.$Medio_pagosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medio_pagos.
     * @param {Medio_pagosCreateManyArgs} args - Arguments to create many Medio_pagos.
     * @example
     * // Create many Medio_pagos
     * const medio_pagos = await prisma.medio_pagos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Medio_pagosCreateManyArgs>(args?: SelectSubset<T, Medio_pagosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Medio_pagos.
     * @param {Medio_pagosDeleteArgs} args - Arguments to delete one Medio_pagos.
     * @example
     * // Delete one Medio_pagos
     * const Medio_pagos = await prisma.medio_pagos.delete({
     *   where: {
     *     // ... filter to delete one Medio_pagos
     *   }
     * })
     * 
     */
    delete<T extends Medio_pagosDeleteArgs>(args: SelectSubset<T, Medio_pagosDeleteArgs<ExtArgs>>): Prisma__Medio_pagosClient<$Result.GetResult<Prisma.$Medio_pagosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medio_pagos.
     * @param {Medio_pagosUpdateArgs} args - Arguments to update one Medio_pagos.
     * @example
     * // Update one Medio_pagos
     * const medio_pagos = await prisma.medio_pagos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Medio_pagosUpdateArgs>(args: SelectSubset<T, Medio_pagosUpdateArgs<ExtArgs>>): Prisma__Medio_pagosClient<$Result.GetResult<Prisma.$Medio_pagosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medio_pagos.
     * @param {Medio_pagosDeleteManyArgs} args - Arguments to filter Medio_pagos to delete.
     * @example
     * // Delete a few Medio_pagos
     * const { count } = await prisma.medio_pagos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Medio_pagosDeleteManyArgs>(args?: SelectSubset<T, Medio_pagosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medio_pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medio_pagosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medio_pagos
     * const medio_pagos = await prisma.medio_pagos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Medio_pagosUpdateManyArgs>(args: SelectSubset<T, Medio_pagosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medio_pagos.
     * @param {Medio_pagosUpsertArgs} args - Arguments to update or create a Medio_pagos.
     * @example
     * // Update or create a Medio_pagos
     * const medio_pagos = await prisma.medio_pagos.upsert({
     *   create: {
     *     // ... data to create a Medio_pagos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medio_pagos we want to update
     *   }
     * })
     */
    upsert<T extends Medio_pagosUpsertArgs>(args: SelectSubset<T, Medio_pagosUpsertArgs<ExtArgs>>): Prisma__Medio_pagosClient<$Result.GetResult<Prisma.$Medio_pagosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medio_pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medio_pagosCountArgs} args - Arguments to filter Medio_pagos to count.
     * @example
     * // Count the number of Medio_pagos
     * const count = await prisma.medio_pagos.count({
     *   where: {
     *     // ... the filter for the Medio_pagos we want to count
     *   }
     * })
    **/
    count<T extends Medio_pagosCountArgs>(
      args?: Subset<T, Medio_pagosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Medio_pagosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medio_pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medio_pagosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Medio_pagosAggregateArgs>(args: Subset<T, Medio_pagosAggregateArgs>): Prisma.PrismaPromise<GetMedio_pagosAggregateType<T>>

    /**
     * Group by Medio_pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medio_pagosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Medio_pagosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Medio_pagosGroupByArgs['orderBy'] }
        : { orderBy?: Medio_pagosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Medio_pagosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedio_pagosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medio_pagos model
   */
  readonly fields: Medio_pagosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medio_pagos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Medio_pagosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ventas<T extends Medio_pagos$VentasArgs<ExtArgs> = {}>(args?: Subset<T, Medio_pagos$VentasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medio_pagos model
   */
  interface Medio_pagosFieldRefs {
    readonly Id_pago: FieldRef<"Medio_pagos", 'Int'>
    readonly Nombre_pago: FieldRef<"Medio_pagos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medio_pagos findUnique
   */
  export type Medio_pagosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medio_pagos
     */
    select?: Medio_pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medio_pagos
     */
    omit?: Medio_pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medio_pagosInclude<ExtArgs> | null
    /**
     * Filter, which Medio_pagos to fetch.
     */
    where: Medio_pagosWhereUniqueInput
  }

  /**
   * Medio_pagos findUniqueOrThrow
   */
  export type Medio_pagosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medio_pagos
     */
    select?: Medio_pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medio_pagos
     */
    omit?: Medio_pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medio_pagosInclude<ExtArgs> | null
    /**
     * Filter, which Medio_pagos to fetch.
     */
    where: Medio_pagosWhereUniqueInput
  }

  /**
   * Medio_pagos findFirst
   */
  export type Medio_pagosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medio_pagos
     */
    select?: Medio_pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medio_pagos
     */
    omit?: Medio_pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medio_pagosInclude<ExtArgs> | null
    /**
     * Filter, which Medio_pagos to fetch.
     */
    where?: Medio_pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medio_pagos to fetch.
     */
    orderBy?: Medio_pagosOrderByWithRelationInput | Medio_pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medio_pagos.
     */
    cursor?: Medio_pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medio_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medio_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medio_pagos.
     */
    distinct?: Medio_pagosScalarFieldEnum | Medio_pagosScalarFieldEnum[]
  }

  /**
   * Medio_pagos findFirstOrThrow
   */
  export type Medio_pagosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medio_pagos
     */
    select?: Medio_pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medio_pagos
     */
    omit?: Medio_pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medio_pagosInclude<ExtArgs> | null
    /**
     * Filter, which Medio_pagos to fetch.
     */
    where?: Medio_pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medio_pagos to fetch.
     */
    orderBy?: Medio_pagosOrderByWithRelationInput | Medio_pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medio_pagos.
     */
    cursor?: Medio_pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medio_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medio_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medio_pagos.
     */
    distinct?: Medio_pagosScalarFieldEnum | Medio_pagosScalarFieldEnum[]
  }

  /**
   * Medio_pagos findMany
   */
  export type Medio_pagosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medio_pagos
     */
    select?: Medio_pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medio_pagos
     */
    omit?: Medio_pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medio_pagosInclude<ExtArgs> | null
    /**
     * Filter, which Medio_pagos to fetch.
     */
    where?: Medio_pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medio_pagos to fetch.
     */
    orderBy?: Medio_pagosOrderByWithRelationInput | Medio_pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medio_pagos.
     */
    cursor?: Medio_pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medio_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medio_pagos.
     */
    skip?: number
    distinct?: Medio_pagosScalarFieldEnum | Medio_pagosScalarFieldEnum[]
  }

  /**
   * Medio_pagos create
   */
  export type Medio_pagosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medio_pagos
     */
    select?: Medio_pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medio_pagos
     */
    omit?: Medio_pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medio_pagosInclude<ExtArgs> | null
    /**
     * The data needed to create a Medio_pagos.
     */
    data?: XOR<Medio_pagosCreateInput, Medio_pagosUncheckedCreateInput>
  }

  /**
   * Medio_pagos createMany
   */
  export type Medio_pagosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medio_pagos.
     */
    data: Medio_pagosCreateManyInput | Medio_pagosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medio_pagos update
   */
  export type Medio_pagosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medio_pagos
     */
    select?: Medio_pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medio_pagos
     */
    omit?: Medio_pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medio_pagosInclude<ExtArgs> | null
    /**
     * The data needed to update a Medio_pagos.
     */
    data: XOR<Medio_pagosUpdateInput, Medio_pagosUncheckedUpdateInput>
    /**
     * Choose, which Medio_pagos to update.
     */
    where: Medio_pagosWhereUniqueInput
  }

  /**
   * Medio_pagos updateMany
   */
  export type Medio_pagosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medio_pagos.
     */
    data: XOR<Medio_pagosUpdateManyMutationInput, Medio_pagosUncheckedUpdateManyInput>
    /**
     * Filter which Medio_pagos to update
     */
    where?: Medio_pagosWhereInput
    /**
     * Limit how many Medio_pagos to update.
     */
    limit?: number
  }

  /**
   * Medio_pagos upsert
   */
  export type Medio_pagosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medio_pagos
     */
    select?: Medio_pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medio_pagos
     */
    omit?: Medio_pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medio_pagosInclude<ExtArgs> | null
    /**
     * The filter to search for the Medio_pagos to update in case it exists.
     */
    where: Medio_pagosWhereUniqueInput
    /**
     * In case the Medio_pagos found by the `where` argument doesn't exist, create a new Medio_pagos with this data.
     */
    create: XOR<Medio_pagosCreateInput, Medio_pagosUncheckedCreateInput>
    /**
     * In case the Medio_pagos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Medio_pagosUpdateInput, Medio_pagosUncheckedUpdateInput>
  }

  /**
   * Medio_pagos delete
   */
  export type Medio_pagosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medio_pagos
     */
    select?: Medio_pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medio_pagos
     */
    omit?: Medio_pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medio_pagosInclude<ExtArgs> | null
    /**
     * Filter which Medio_pagos to delete.
     */
    where: Medio_pagosWhereUniqueInput
  }

  /**
   * Medio_pagos deleteMany
   */
  export type Medio_pagosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medio_pagos to delete
     */
    where?: Medio_pagosWhereInput
    /**
     * Limit how many Medio_pagos to delete.
     */
    limit?: number
  }

  /**
   * Medio_pagos.Ventas
   */
  export type Medio_pagos$VentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ventas
     */
    select?: VentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ventas
     */
    omit?: VentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentasInclude<ExtArgs> | null
    where?: VentasWhereInput
    orderBy?: VentasOrderByWithRelationInput | VentasOrderByWithRelationInput[]
    cursor?: VentasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * Medio_pagos without action
   */
  export type Medio_pagosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medio_pagos
     */
    select?: Medio_pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medio_pagos
     */
    omit?: Medio_pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medio_pagosInclude<ExtArgs> | null
  }


  /**
   * Model Productos
   */

  export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  export type ProductosAvgAggregateOutputType = {
    Id_producto: number | null
    Precio_venta: Decimal | null
    Stock: number | null
  }

  export type ProductosSumAggregateOutputType = {
    Id_producto: number | null
    Precio_venta: Decimal | null
    Stock: number | null
  }

  export type ProductosMinAggregateOutputType = {
    Id_producto: number | null
    Nombre: string | null
    Precio_venta: Decimal | null
    Stock: number | null
  }

  export type ProductosMaxAggregateOutputType = {
    Id_producto: number | null
    Nombre: string | null
    Precio_venta: Decimal | null
    Stock: number | null
  }

  export type ProductosCountAggregateOutputType = {
    Id_producto: number
    Nombre: number
    Precio_venta: number
    Stock: number
    _all: number
  }


  export type ProductosAvgAggregateInputType = {
    Id_producto?: true
    Precio_venta?: true
    Stock?: true
  }

  export type ProductosSumAggregateInputType = {
    Id_producto?: true
    Precio_venta?: true
    Stock?: true
  }

  export type ProductosMinAggregateInputType = {
    Id_producto?: true
    Nombre?: true
    Precio_venta?: true
    Stock?: true
  }

  export type ProductosMaxAggregateInputType = {
    Id_producto?: true
    Nombre?: true
    Precio_venta?: true
    Stock?: true
  }

  export type ProductosCountAggregateInputType = {
    Id_producto?: true
    Nombre?: true
    Precio_venta?: true
    Stock?: true
    _all?: true
  }

  export type ProductosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to aggregate.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductosMaxAggregateInputType
  }

  export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos[P]>
      : GetScalarType<T[P], AggregateProductos[P]>
  }




  export type ProductosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductosWhereInput
    orderBy?: ProductosOrderByWithAggregationInput | ProductosOrderByWithAggregationInput[]
    by: ProductosScalarFieldEnum[] | ProductosScalarFieldEnum
    having?: ProductosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductosCountAggregateInputType | true
    _avg?: ProductosAvgAggregateInputType
    _sum?: ProductosSumAggregateInputType
    _min?: ProductosMinAggregateInputType
    _max?: ProductosMaxAggregateInputType
  }

  export type ProductosGroupByOutputType = {
    Id_producto: number
    Nombre: string | null
    Precio_venta: Decimal | null
    Stock: number | null
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  type GetProductosGroupByPayload<T extends ProductosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductosGroupByOutputType[P]>
            : GetScalarType<T[P], ProductosGroupByOutputType[P]>
        }
      >
    >


  export type ProductosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_producto?: boolean
    Nombre?: boolean
    Precio_venta?: boolean
    Stock?: boolean
    Detalle_ventas_productos?: boolean | Productos$Detalle_ventas_productosArgs<ExtArgs>
    Lote_productos?: boolean | Productos$Lote_productosArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>



  export type ProductosSelectScalar = {
    Id_producto?: boolean
    Nombre?: boolean
    Precio_venta?: boolean
    Stock?: boolean
  }

  export type ProductosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_producto" | "Nombre" | "Precio_venta" | "Stock", ExtArgs["result"]["productos"]>
  export type ProductosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Detalle_ventas_productos?: boolean | Productos$Detalle_ventas_productosArgs<ExtArgs>
    Lote_productos?: boolean | Productos$Lote_productosArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Productos"
    objects: {
      Detalle_ventas_productos: Prisma.$Detalle_ventas_productosPayload<ExtArgs>[]
      Lote_productos: Prisma.$Lote_productosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id_producto: number
      Nombre: string | null
      Precio_venta: Prisma.Decimal | null
      Stock: number | null
    }, ExtArgs["result"]["productos"]>
    composites: {}
  }

  type ProductosGetPayload<S extends boolean | null | undefined | ProductosDefaultArgs> = $Result.GetResult<Prisma.$ProductosPayload, S>

  type ProductosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductosCountAggregateInputType | true
    }

  export interface ProductosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Productos'], meta: { name: 'Productos' } }
    /**
     * Find zero or one Productos that matches the filter.
     * @param {ProductosFindUniqueArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductosFindUniqueArgs>(args: SelectSubset<T, ProductosFindUniqueArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductosFindUniqueOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductosFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindFirstArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductosFindFirstArgs>(args?: SelectSubset<T, ProductosFindFirstArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindFirstOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductosFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.productos.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.productos.findMany({ take: 10 })
     * 
     * // Only select the `Id_producto`
     * const productosWithId_productoOnly = await prisma.productos.findMany({ select: { Id_producto: true } })
     * 
     */
    findMany<T extends ProductosFindManyArgs>(args?: SelectSubset<T, ProductosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productos.
     * @param {ProductosCreateArgs} args - Arguments to create a Productos.
     * @example
     * // Create one Productos
     * const Productos = await prisma.productos.create({
     *   data: {
     *     // ... data to create a Productos
     *   }
     * })
     * 
     */
    create<T extends ProductosCreateArgs>(args: SelectSubset<T, ProductosCreateArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductosCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductosCreateManyArgs>(args?: SelectSubset<T, ProductosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Productos.
     * @param {ProductosDeleteArgs} args - Arguments to delete one Productos.
     * @example
     * // Delete one Productos
     * const Productos = await prisma.productos.delete({
     *   where: {
     *     // ... filter to delete one Productos
     *   }
     * })
     * 
     */
    delete<T extends ProductosDeleteArgs>(args: SelectSubset<T, ProductosDeleteArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productos.
     * @param {ProductosUpdateArgs} args - Arguments to update one Productos.
     * @example
     * // Update one Productos
     * const productos = await prisma.productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductosUpdateArgs>(args: SelectSubset<T, ProductosUpdateArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductosDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductosDeleteManyArgs>(args?: SelectSubset<T, ProductosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductosUpdateManyArgs>(args: SelectSubset<T, ProductosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Productos.
     * @param {ProductosUpsertArgs} args - Arguments to update or create a Productos.
     * @example
     * // Update or create a Productos
     * const productos = await prisma.productos.upsert({
     *   create: {
     *     // ... data to create a Productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos we want to update
     *   }
     * })
     */
    upsert<T extends ProductosUpsertArgs>(args: SelectSubset<T, ProductosUpsertArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.productos.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductosCountArgs>(
      args?: Subset<T, ProductosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductosAggregateArgs>(args: Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>

    /**
     * Group by Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductosGroupByArgs['orderBy'] }
        : { orderBy?: ProductosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Productos model
   */
  readonly fields: ProductosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Detalle_ventas_productos<T extends Productos$Detalle_ventas_productosArgs<ExtArgs> = {}>(args?: Subset<T, Productos$Detalle_ventas_productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detalle_ventas_productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Lote_productos<T extends Productos$Lote_productosArgs<ExtArgs> = {}>(args?: Subset<T, Productos$Lote_productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Lote_productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Productos model
   */
  interface ProductosFieldRefs {
    readonly Id_producto: FieldRef<"Productos", 'Int'>
    readonly Nombre: FieldRef<"Productos", 'String'>
    readonly Precio_venta: FieldRef<"Productos", 'Decimal'>
    readonly Stock: FieldRef<"Productos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Productos findUnique
   */
  export type ProductosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos findUniqueOrThrow
   */
  export type ProductosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos findFirst
   */
  export type ProductosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Productos findFirstOrThrow
   */
  export type ProductosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Productos findMany
   */
  export type ProductosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Productos create
   */
  export type ProductosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * The data needed to create a Productos.
     */
    data: XOR<ProductosCreateInput, ProductosUncheckedCreateInput>
  }

  /**
   * Productos createMany
   */
  export type ProductosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductosCreateManyInput | ProductosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Productos update
   */
  export type ProductosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * The data needed to update a Productos.
     */
    data: XOR<ProductosUpdateInput, ProductosUncheckedUpdateInput>
    /**
     * Choose, which Productos to update.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos updateMany
   */
  export type ProductosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductosUpdateManyMutationInput, ProductosUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductosWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Productos upsert
   */
  export type ProductosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * The filter to search for the Productos to update in case it exists.
     */
    where: ProductosWhereUniqueInput
    /**
     * In case the Productos found by the `where` argument doesn't exist, create a new Productos with this data.
     */
    create: XOR<ProductosCreateInput, ProductosUncheckedCreateInput>
    /**
     * In case the Productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductosUpdateInput, ProductosUncheckedUpdateInput>
  }

  /**
   * Productos delete
   */
  export type ProductosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter which Productos to delete.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos deleteMany
   */
  export type ProductosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductosWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Productos.Detalle_ventas_productos
   */
  export type Productos$Detalle_ventas_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_ventas_productos
     */
    select?: Detalle_ventas_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_ventas_productos
     */
    omit?: Detalle_ventas_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_ventas_productosInclude<ExtArgs> | null
    where?: Detalle_ventas_productosWhereInput
    orderBy?: Detalle_ventas_productosOrderByWithRelationInput | Detalle_ventas_productosOrderByWithRelationInput[]
    cursor?: Detalle_ventas_productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_ventas_productosScalarFieldEnum | Detalle_ventas_productosScalarFieldEnum[]
  }

  /**
   * Productos.Lote_productos
   */
  export type Productos$Lote_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote_productos
     */
    select?: Lote_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lote_productos
     */
    omit?: Lote_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lote_productosInclude<ExtArgs> | null
    where?: Lote_productosWhereInput
    orderBy?: Lote_productosOrderByWithRelationInput | Lote_productosOrderByWithRelationInput[]
    cursor?: Lote_productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Lote_productosScalarFieldEnum | Lote_productosScalarFieldEnum[]
  }

  /**
   * Productos without action
   */
  export type ProductosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
  }


  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    Id_usuario: number | null
    Cargo: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    Id_usuario: number | null
    Cargo: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    Id_usuario: number | null
    Nombre: string | null
    Apellido_1: string | null
    Apellido_2: string | null
    Contrasena: string | null
    Cargo: number | null
  }

  export type UsuariosMaxAggregateOutputType = {
    Id_usuario: number | null
    Nombre: string | null
    Apellido_1: string | null
    Apellido_2: string | null
    Contrasena: string | null
    Cargo: number | null
  }

  export type UsuariosCountAggregateOutputType = {
    Id_usuario: number
    Nombre: number
    Apellido_1: number
    Apellido_2: number
    Contrasena: number
    Cargo: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    Id_usuario?: true
    Cargo?: true
  }

  export type UsuariosSumAggregateInputType = {
    Id_usuario?: true
    Cargo?: true
  }

  export type UsuariosMinAggregateInputType = {
    Id_usuario?: true
    Nombre?: true
    Apellido_1?: true
    Apellido_2?: true
    Contrasena?: true
    Cargo?: true
  }

  export type UsuariosMaxAggregateInputType = {
    Id_usuario?: true
    Nombre?: true
    Apellido_1?: true
    Apellido_2?: true
    Contrasena?: true
    Cargo?: true
  }

  export type UsuariosCountAggregateInputType = {
    Id_usuario?: true
    Nombre?: true
    Apellido_1?: true
    Apellido_2?: true
    Contrasena?: true
    Cargo?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    Id_usuario: number
    Nombre: string | null
    Apellido_1: string | null
    Apellido_2: string | null
    Contrasena: string | null
    Cargo: number | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_usuario?: boolean
    Nombre?: boolean
    Apellido_1?: boolean
    Apellido_2?: boolean
    Contrasena?: boolean
    Cargo?: boolean
    Cargos?: boolean | Usuarios$CargosArgs<ExtArgs>
    Ventas?: boolean | Usuarios$VentasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type UsuariosSelectScalar = {
    Id_usuario?: boolean
    Nombre?: boolean
    Apellido_1?: boolean
    Apellido_2?: boolean
    Contrasena?: boolean
    Cargo?: boolean
  }

  export type UsuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_usuario" | "Nombre" | "Apellido_1" | "Apellido_2" | "Contrasena" | "Cargo", ExtArgs["result"]["usuarios"]>
  export type UsuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cargos?: boolean | Usuarios$CargosArgs<ExtArgs>
    Ventas?: boolean | Usuarios$VentasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {
      Cargos: Prisma.$CargosPayload<ExtArgs> | null
      Ventas: Prisma.$VentasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id_usuario: number
      Nombre: string | null
      Apellido_1: string | null
      Apellido_2: string | null
      Contrasena: string | null
      Cargo: number | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `Id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { Id_usuario: true } })
     * 
     */
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cargos<T extends Usuarios$CargosArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$CargosArgs<ExtArgs>>): Prisma__CargosClient<$Result.GetResult<Prisma.$CargosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Ventas<T extends Usuarios$VentasArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$VentasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuarios model
   */
  interface UsuariosFieldRefs {
    readonly Id_usuario: FieldRef<"Usuarios", 'Int'>
    readonly Nombre: FieldRef<"Usuarios", 'String'>
    readonly Apellido_1: FieldRef<"Usuarios", 'String'>
    readonly Apellido_2: FieldRef<"Usuarios", 'String'>
    readonly Contrasena: FieldRef<"Usuarios", 'String'>
    readonly Cargo: FieldRef<"Usuarios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuarios.Cargos
   */
  export type Usuarios$CargosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargos
     */
    select?: CargosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargos
     */
    omit?: CargosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargosInclude<ExtArgs> | null
    where?: CargosWhereInput
  }

  /**
   * Usuarios.Ventas
   */
  export type Usuarios$VentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ventas
     */
    select?: VentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ventas
     */
    omit?: VentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentasInclude<ExtArgs> | null
    where?: VentasWhereInput
    orderBy?: VentasOrderByWithRelationInput | VentasOrderByWithRelationInput[]
    cursor?: VentasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
  }


  /**
   * Model Ventas
   */

  export type AggregateVentas = {
    _count: VentasCountAggregateOutputType | null
    _avg: VentasAvgAggregateOutputType | null
    _sum: VentasSumAggregateOutputType | null
    _min: VentasMinAggregateOutputType | null
    _max: VentasMaxAggregateOutputType | null
  }

  export type VentasAvgAggregateOutputType = {
    Id_venta: number | null
    Id_pago: number | null
    Total_venta: Decimal | null
    Id_usuario: number | null
    Utilidad_total: Decimal | null
  }

  export type VentasSumAggregateOutputType = {
    Id_venta: number | null
    Id_pago: number | null
    Total_venta: Decimal | null
    Id_usuario: number | null
    Utilidad_total: Decimal | null
  }

  export type VentasMinAggregateOutputType = {
    Id_venta: number | null
    Id_pago: number | null
    Total_venta: Decimal | null
    Fecha_venta: Date | null
    Id_usuario: number | null
    Utilidad_total: Decimal | null
  }

  export type VentasMaxAggregateOutputType = {
    Id_venta: number | null
    Id_pago: number | null
    Total_venta: Decimal | null
    Fecha_venta: Date | null
    Id_usuario: number | null
    Utilidad_total: Decimal | null
  }

  export type VentasCountAggregateOutputType = {
    Id_venta: number
    Id_pago: number
    Total_venta: number
    Fecha_venta: number
    Id_usuario: number
    Utilidad_total: number
    _all: number
  }


  export type VentasAvgAggregateInputType = {
    Id_venta?: true
    Id_pago?: true
    Total_venta?: true
    Id_usuario?: true
    Utilidad_total?: true
  }

  export type VentasSumAggregateInputType = {
    Id_venta?: true
    Id_pago?: true
    Total_venta?: true
    Id_usuario?: true
    Utilidad_total?: true
  }

  export type VentasMinAggregateInputType = {
    Id_venta?: true
    Id_pago?: true
    Total_venta?: true
    Fecha_venta?: true
    Id_usuario?: true
    Utilidad_total?: true
  }

  export type VentasMaxAggregateInputType = {
    Id_venta?: true
    Id_pago?: true
    Total_venta?: true
    Fecha_venta?: true
    Id_usuario?: true
    Utilidad_total?: true
  }

  export type VentasCountAggregateInputType = {
    Id_venta?: true
    Id_pago?: true
    Total_venta?: true
    Fecha_venta?: true
    Id_usuario?: true
    Utilidad_total?: true
    _all?: true
  }

  export type VentasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ventas to aggregate.
     */
    where?: VentasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentasOrderByWithRelationInput | VentasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ventas
    **/
    _count?: true | VentasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentasMaxAggregateInputType
  }

  export type GetVentasAggregateType<T extends VentasAggregateArgs> = {
        [P in keyof T & keyof AggregateVentas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVentas[P]>
      : GetScalarType<T[P], AggregateVentas[P]>
  }




  export type VentasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentasWhereInput
    orderBy?: VentasOrderByWithAggregationInput | VentasOrderByWithAggregationInput[]
    by: VentasScalarFieldEnum[] | VentasScalarFieldEnum
    having?: VentasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentasCountAggregateInputType | true
    _avg?: VentasAvgAggregateInputType
    _sum?: VentasSumAggregateInputType
    _min?: VentasMinAggregateInputType
    _max?: VentasMaxAggregateInputType
  }

  export type VentasGroupByOutputType = {
    Id_venta: number
    Id_pago: number | null
    Total_venta: Decimal | null
    Fecha_venta: Date | null
    Id_usuario: number
    Utilidad_total: Decimal | null
    _count: VentasCountAggregateOutputType | null
    _avg: VentasAvgAggregateOutputType | null
    _sum: VentasSumAggregateOutputType | null
    _min: VentasMinAggregateOutputType | null
    _max: VentasMaxAggregateOutputType | null
  }

  type GetVentasGroupByPayload<T extends VentasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentasGroupByOutputType[P]>
            : GetScalarType<T[P], VentasGroupByOutputType[P]>
        }
      >
    >


  export type VentasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_venta?: boolean
    Id_pago?: boolean
    Total_venta?: boolean
    Fecha_venta?: boolean
    Id_usuario?: boolean
    Utilidad_total?: boolean
    Detalle_ventas_productos?: boolean | Ventas$Detalle_ventas_productosArgs<ExtArgs>
    Medio_pagos?: boolean | Ventas$Medio_pagosArgs<ExtArgs>
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
    _count?: boolean | VentasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ventas"]>



  export type VentasSelectScalar = {
    Id_venta?: boolean
    Id_pago?: boolean
    Total_venta?: boolean
    Fecha_venta?: boolean
    Id_usuario?: boolean
    Utilidad_total?: boolean
  }

  export type VentasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_venta" | "Id_pago" | "Total_venta" | "Fecha_venta" | "Id_usuario" | "Utilidad_total", ExtArgs["result"]["ventas"]>
  export type VentasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Detalle_ventas_productos?: boolean | Ventas$Detalle_ventas_productosArgs<ExtArgs>
    Medio_pagos?: boolean | Ventas$Medio_pagosArgs<ExtArgs>
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
    _count?: boolean | VentasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VentasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ventas"
    objects: {
      Detalle_ventas_productos: Prisma.$Detalle_ventas_productosPayload<ExtArgs>[]
      Medio_pagos: Prisma.$Medio_pagosPayload<ExtArgs> | null
      Usuarios: Prisma.$UsuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id_venta: number
      Id_pago: number | null
      Total_venta: Prisma.Decimal | null
      Fecha_venta: Date | null
      Id_usuario: number
      Utilidad_total: Prisma.Decimal | null
    }, ExtArgs["result"]["ventas"]>
    composites: {}
  }

  type VentasGetPayload<S extends boolean | null | undefined | VentasDefaultArgs> = $Result.GetResult<Prisma.$VentasPayload, S>

  type VentasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentasCountAggregateInputType | true
    }

  export interface VentasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ventas'], meta: { name: 'Ventas' } }
    /**
     * Find zero or one Ventas that matches the filter.
     * @param {VentasFindUniqueArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentasFindUniqueArgs>(args: SelectSubset<T, VentasFindUniqueArgs<ExtArgs>>): Prisma__VentasClient<$Result.GetResult<Prisma.$VentasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ventas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentasFindUniqueOrThrowArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentasFindUniqueOrThrowArgs>(args: SelectSubset<T, VentasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentasClient<$Result.GetResult<Prisma.$VentasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentasFindFirstArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentasFindFirstArgs>(args?: SelectSubset<T, VentasFindFirstArgs<ExtArgs>>): Prisma__VentasClient<$Result.GetResult<Prisma.$VentasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ventas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentasFindFirstOrThrowArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentasFindFirstOrThrowArgs>(args?: SelectSubset<T, VentasFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentasClient<$Result.GetResult<Prisma.$VentasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.ventas.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.ventas.findMany({ take: 10 })
     * 
     * // Only select the `Id_venta`
     * const ventasWithId_ventaOnly = await prisma.ventas.findMany({ select: { Id_venta: true } })
     * 
     */
    findMany<T extends VentasFindManyArgs>(args?: SelectSubset<T, VentasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ventas.
     * @param {VentasCreateArgs} args - Arguments to create a Ventas.
     * @example
     * // Create one Ventas
     * const Ventas = await prisma.ventas.create({
     *   data: {
     *     // ... data to create a Ventas
     *   }
     * })
     * 
     */
    create<T extends VentasCreateArgs>(args: SelectSubset<T, VentasCreateArgs<ExtArgs>>): Prisma__VentasClient<$Result.GetResult<Prisma.$VentasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas.
     * @param {VentasCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const ventas = await prisma.ventas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentasCreateManyArgs>(args?: SelectSubset<T, VentasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ventas.
     * @param {VentasDeleteArgs} args - Arguments to delete one Ventas.
     * @example
     * // Delete one Ventas
     * const Ventas = await prisma.ventas.delete({
     *   where: {
     *     // ... filter to delete one Ventas
     *   }
     * })
     * 
     */
    delete<T extends VentasDeleteArgs>(args: SelectSubset<T, VentasDeleteArgs<ExtArgs>>): Prisma__VentasClient<$Result.GetResult<Prisma.$VentasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ventas.
     * @param {VentasUpdateArgs} args - Arguments to update one Ventas.
     * @example
     * // Update one Ventas
     * const ventas = await prisma.ventas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentasUpdateArgs>(args: SelectSubset<T, VentasUpdateArgs<ExtArgs>>): Prisma__VentasClient<$Result.GetResult<Prisma.$VentasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas.
     * @param {VentasDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.ventas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentasDeleteManyArgs>(args?: SelectSubset<T, VentasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const ventas = await prisma.ventas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentasUpdateManyArgs>(args: SelectSubset<T, VentasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ventas.
     * @param {VentasUpsertArgs} args - Arguments to update or create a Ventas.
     * @example
     * // Update or create a Ventas
     * const ventas = await prisma.ventas.upsert({
     *   create: {
     *     // ... data to create a Ventas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ventas we want to update
     *   }
     * })
     */
    upsert<T extends VentasUpsertArgs>(args: SelectSubset<T, VentasUpsertArgs<ExtArgs>>): Prisma__VentasClient<$Result.GetResult<Prisma.$VentasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentasCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.ventas.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends VentasCountArgs>(
      args?: Subset<T, VentasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VentasAggregateArgs>(args: Subset<T, VentasAggregateArgs>): Prisma.PrismaPromise<GetVentasAggregateType<T>>

    /**
     * Group by Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VentasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentasGroupByArgs['orderBy'] }
        : { orderBy?: VentasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VentasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ventas model
   */
  readonly fields: VentasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ventas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Detalle_ventas_productos<T extends Ventas$Detalle_ventas_productosArgs<ExtArgs> = {}>(args?: Subset<T, Ventas$Detalle_ventas_productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detalle_ventas_productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Medio_pagos<T extends Ventas$Medio_pagosArgs<ExtArgs> = {}>(args?: Subset<T, Ventas$Medio_pagosArgs<ExtArgs>>): Prisma__Medio_pagosClient<$Result.GetResult<Prisma.$Medio_pagosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Usuarios<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ventas model
   */
  interface VentasFieldRefs {
    readonly Id_venta: FieldRef<"Ventas", 'Int'>
    readonly Id_pago: FieldRef<"Ventas", 'Int'>
    readonly Total_venta: FieldRef<"Ventas", 'Decimal'>
    readonly Fecha_venta: FieldRef<"Ventas", 'DateTime'>
    readonly Id_usuario: FieldRef<"Ventas", 'Int'>
    readonly Utilidad_total: FieldRef<"Ventas", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Ventas findUnique
   */
  export type VentasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ventas
     */
    select?: VentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ventas
     */
    omit?: VentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentasInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where: VentasWhereUniqueInput
  }

  /**
   * Ventas findUniqueOrThrow
   */
  export type VentasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ventas
     */
    select?: VentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ventas
     */
    omit?: VentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentasInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where: VentasWhereUniqueInput
  }

  /**
   * Ventas findFirst
   */
  export type VentasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ventas
     */
    select?: VentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ventas
     */
    omit?: VentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentasInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where?: VentasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentasOrderByWithRelationInput | VentasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * Ventas findFirstOrThrow
   */
  export type VentasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ventas
     */
    select?: VentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ventas
     */
    omit?: VentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentasInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where?: VentasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentasOrderByWithRelationInput | VentasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * Ventas findMany
   */
  export type VentasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ventas
     */
    select?: VentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ventas
     */
    omit?: VentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentasInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where?: VentasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentasOrderByWithRelationInput | VentasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ventas.
     */
    cursor?: VentasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * Ventas create
   */
  export type VentasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ventas
     */
    select?: VentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ventas
     */
    omit?: VentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentasInclude<ExtArgs> | null
    /**
     * The data needed to create a Ventas.
     */
    data: XOR<VentasCreateInput, VentasUncheckedCreateInput>
  }

  /**
   * Ventas createMany
   */
  export type VentasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ventas.
     */
    data: VentasCreateManyInput | VentasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ventas update
   */
  export type VentasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ventas
     */
    select?: VentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ventas
     */
    omit?: VentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentasInclude<ExtArgs> | null
    /**
     * The data needed to update a Ventas.
     */
    data: XOR<VentasUpdateInput, VentasUncheckedUpdateInput>
    /**
     * Choose, which Ventas to update.
     */
    where: VentasWhereUniqueInput
  }

  /**
   * Ventas updateMany
   */
  export type VentasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentasUpdateManyMutationInput, VentasUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentasWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
  }

  /**
   * Ventas upsert
   */
  export type VentasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ventas
     */
    select?: VentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ventas
     */
    omit?: VentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentasInclude<ExtArgs> | null
    /**
     * The filter to search for the Ventas to update in case it exists.
     */
    where: VentasWhereUniqueInput
    /**
     * In case the Ventas found by the `where` argument doesn't exist, create a new Ventas with this data.
     */
    create: XOR<VentasCreateInput, VentasUncheckedCreateInput>
    /**
     * In case the Ventas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentasUpdateInput, VentasUncheckedUpdateInput>
  }

  /**
   * Ventas delete
   */
  export type VentasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ventas
     */
    select?: VentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ventas
     */
    omit?: VentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentasInclude<ExtArgs> | null
    /**
     * Filter which Ventas to delete.
     */
    where: VentasWhereUniqueInput
  }

  /**
   * Ventas deleteMany
   */
  export type VentasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ventas to delete
     */
    where?: VentasWhereInput
    /**
     * Limit how many Ventas to delete.
     */
    limit?: number
  }

  /**
   * Ventas.Detalle_ventas_productos
   */
  export type Ventas$Detalle_ventas_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_ventas_productos
     */
    select?: Detalle_ventas_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_ventas_productos
     */
    omit?: Detalle_ventas_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_ventas_productosInclude<ExtArgs> | null
    where?: Detalle_ventas_productosWhereInput
    orderBy?: Detalle_ventas_productosOrderByWithRelationInput | Detalle_ventas_productosOrderByWithRelationInput[]
    cursor?: Detalle_ventas_productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_ventas_productosScalarFieldEnum | Detalle_ventas_productosScalarFieldEnum[]
  }

  /**
   * Ventas.Medio_pagos
   */
  export type Ventas$Medio_pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medio_pagos
     */
    select?: Medio_pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medio_pagos
     */
    omit?: Medio_pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medio_pagosInclude<ExtArgs> | null
    where?: Medio_pagosWhereInput
  }

  /**
   * Ventas without action
   */
  export type VentasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ventas
     */
    select?: VentasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ventas
     */
    omit?: VentasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CargosScalarFieldEnum: {
    Id_cargo: 'Id_cargo',
    Nombre_cargo: 'Nombre_cargo'
  };

  export type CargosScalarFieldEnum = (typeof CargosScalarFieldEnum)[keyof typeof CargosScalarFieldEnum]


  export const Detalle_ventas_productosScalarFieldEnum: {
    Id_ventas: 'Id_ventas',
    Id_producto: 'Id_producto',
    Cantidad: 'Cantidad',
    Precio_total: 'Precio_total'
  };

  export type Detalle_ventas_productosScalarFieldEnum = (typeof Detalle_ventas_productosScalarFieldEnum)[keyof typeof Detalle_ventas_productosScalarFieldEnum]


  export const Lote_productosScalarFieldEnum: {
    Id_lote: 'Id_lote',
    Id_producto: 'Id_producto',
    Precio_compra: 'Precio_compra',
    Cantidad: 'Cantidad',
    Stock: 'Stock',
    Fecha: 'Fecha'
  };

  export type Lote_productosScalarFieldEnum = (typeof Lote_productosScalarFieldEnum)[keyof typeof Lote_productosScalarFieldEnum]


  export const Medio_pagosScalarFieldEnum: {
    Id_pago: 'Id_pago',
    Nombre_pago: 'Nombre_pago'
  };

  export type Medio_pagosScalarFieldEnum = (typeof Medio_pagosScalarFieldEnum)[keyof typeof Medio_pagosScalarFieldEnum]


  export const ProductosScalarFieldEnum: {
    Id_producto: 'Id_producto',
    Nombre: 'Nombre',
    Precio_venta: 'Precio_venta',
    Stock: 'Stock'
  };

  export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    Id_usuario: 'Id_usuario',
    Nombre: 'Nombre',
    Apellido_1: 'Apellido_1',
    Apellido_2: 'Apellido_2',
    Contrasena: 'Contrasena',
    Cargo: 'Cargo'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const VentasScalarFieldEnum: {
    Id_venta: 'Id_venta',
    Id_pago: 'Id_pago',
    Total_venta: 'Total_venta',
    Fecha_venta: 'Fecha_venta',
    Id_usuario: 'Id_usuario',
    Utilidad_total: 'Utilidad_total'
  };

  export type VentasScalarFieldEnum = (typeof VentasScalarFieldEnum)[keyof typeof VentasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CargosOrderByRelevanceFieldEnum: {
    Nombre_cargo: 'Nombre_cargo'
  };

  export type CargosOrderByRelevanceFieldEnum = (typeof CargosOrderByRelevanceFieldEnum)[keyof typeof CargosOrderByRelevanceFieldEnum]


  export const Medio_pagosOrderByRelevanceFieldEnum: {
    Nombre_pago: 'Nombre_pago'
  };

  export type Medio_pagosOrderByRelevanceFieldEnum = (typeof Medio_pagosOrderByRelevanceFieldEnum)[keyof typeof Medio_pagosOrderByRelevanceFieldEnum]


  export const ProductosOrderByRelevanceFieldEnum: {
    Nombre: 'Nombre'
  };

  export type ProductosOrderByRelevanceFieldEnum = (typeof ProductosOrderByRelevanceFieldEnum)[keyof typeof ProductosOrderByRelevanceFieldEnum]


  export const UsuariosOrderByRelevanceFieldEnum: {
    Nombre: 'Nombre',
    Apellido_1: 'Apellido_1',
    Apellido_2: 'Apellido_2',
    Contrasena: 'Contrasena'
  };

  export type UsuariosOrderByRelevanceFieldEnum = (typeof UsuariosOrderByRelevanceFieldEnum)[keyof typeof UsuariosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CargosWhereInput = {
    AND?: CargosWhereInput | CargosWhereInput[]
    OR?: CargosWhereInput[]
    NOT?: CargosWhereInput | CargosWhereInput[]
    Id_cargo?: IntFilter<"Cargos"> | number
    Nombre_cargo?: StringNullableFilter<"Cargos"> | string | null
    Usuarios?: UsuariosListRelationFilter
  }

  export type CargosOrderByWithRelationInput = {
    Id_cargo?: SortOrder
    Nombre_cargo?: SortOrderInput | SortOrder
    Usuarios?: UsuariosOrderByRelationAggregateInput
    _relevance?: CargosOrderByRelevanceInput
  }

  export type CargosWhereUniqueInput = Prisma.AtLeast<{
    Id_cargo?: number
    AND?: CargosWhereInput | CargosWhereInput[]
    OR?: CargosWhereInput[]
    NOT?: CargosWhereInput | CargosWhereInput[]
    Nombre_cargo?: StringNullableFilter<"Cargos"> | string | null
    Usuarios?: UsuariosListRelationFilter
  }, "Id_cargo">

  export type CargosOrderByWithAggregationInput = {
    Id_cargo?: SortOrder
    Nombre_cargo?: SortOrderInput | SortOrder
    _count?: CargosCountOrderByAggregateInput
    _avg?: CargosAvgOrderByAggregateInput
    _max?: CargosMaxOrderByAggregateInput
    _min?: CargosMinOrderByAggregateInput
    _sum?: CargosSumOrderByAggregateInput
  }

  export type CargosScalarWhereWithAggregatesInput = {
    AND?: CargosScalarWhereWithAggregatesInput | CargosScalarWhereWithAggregatesInput[]
    OR?: CargosScalarWhereWithAggregatesInput[]
    NOT?: CargosScalarWhereWithAggregatesInput | CargosScalarWhereWithAggregatesInput[]
    Id_cargo?: IntWithAggregatesFilter<"Cargos"> | number
    Nombre_cargo?: StringNullableWithAggregatesFilter<"Cargos"> | string | null
  }

  export type Detalle_ventas_productosWhereInput = {
    AND?: Detalle_ventas_productosWhereInput | Detalle_ventas_productosWhereInput[]
    OR?: Detalle_ventas_productosWhereInput[]
    NOT?: Detalle_ventas_productosWhereInput | Detalle_ventas_productosWhereInput[]
    Id_ventas?: IntFilter<"Detalle_ventas_productos"> | number
    Id_producto?: IntFilter<"Detalle_ventas_productos"> | number
    Cantidad?: IntNullableFilter<"Detalle_ventas_productos"> | number | null
    Precio_total?: DecimalNullableFilter<"Detalle_ventas_productos"> | Decimal | DecimalJsLike | number | string | null
    Productos?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
    Ventas?: XOR<VentasScalarRelationFilter, VentasWhereInput>
  }

  export type Detalle_ventas_productosOrderByWithRelationInput = {
    Id_ventas?: SortOrder
    Id_producto?: SortOrder
    Cantidad?: SortOrderInput | SortOrder
    Precio_total?: SortOrderInput | SortOrder
    Productos?: ProductosOrderByWithRelationInput
    Ventas?: VentasOrderByWithRelationInput
  }

  export type Detalle_ventas_productosWhereUniqueInput = Prisma.AtLeast<{
    Id_ventas_Id_producto?: Detalle_ventas_productosId_ventasId_productoCompoundUniqueInput
    AND?: Detalle_ventas_productosWhereInput | Detalle_ventas_productosWhereInput[]
    OR?: Detalle_ventas_productosWhereInput[]
    NOT?: Detalle_ventas_productosWhereInput | Detalle_ventas_productosWhereInput[]
    Id_ventas?: IntFilter<"Detalle_ventas_productos"> | number
    Id_producto?: IntFilter<"Detalle_ventas_productos"> | number
    Cantidad?: IntNullableFilter<"Detalle_ventas_productos"> | number | null
    Precio_total?: DecimalNullableFilter<"Detalle_ventas_productos"> | Decimal | DecimalJsLike | number | string | null
    Productos?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
    Ventas?: XOR<VentasScalarRelationFilter, VentasWhereInput>
  }, "Id_ventas_Id_producto">

  export type Detalle_ventas_productosOrderByWithAggregationInput = {
    Id_ventas?: SortOrder
    Id_producto?: SortOrder
    Cantidad?: SortOrderInput | SortOrder
    Precio_total?: SortOrderInput | SortOrder
    _count?: Detalle_ventas_productosCountOrderByAggregateInput
    _avg?: Detalle_ventas_productosAvgOrderByAggregateInput
    _max?: Detalle_ventas_productosMaxOrderByAggregateInput
    _min?: Detalle_ventas_productosMinOrderByAggregateInput
    _sum?: Detalle_ventas_productosSumOrderByAggregateInput
  }

  export type Detalle_ventas_productosScalarWhereWithAggregatesInput = {
    AND?: Detalle_ventas_productosScalarWhereWithAggregatesInput | Detalle_ventas_productosScalarWhereWithAggregatesInput[]
    OR?: Detalle_ventas_productosScalarWhereWithAggregatesInput[]
    NOT?: Detalle_ventas_productosScalarWhereWithAggregatesInput | Detalle_ventas_productosScalarWhereWithAggregatesInput[]
    Id_ventas?: IntWithAggregatesFilter<"Detalle_ventas_productos"> | number
    Id_producto?: IntWithAggregatesFilter<"Detalle_ventas_productos"> | number
    Cantidad?: IntNullableWithAggregatesFilter<"Detalle_ventas_productos"> | number | null
    Precio_total?: DecimalNullableWithAggregatesFilter<"Detalle_ventas_productos"> | Decimal | DecimalJsLike | number | string | null
  }

  export type Lote_productosWhereInput = {
    AND?: Lote_productosWhereInput | Lote_productosWhereInput[]
    OR?: Lote_productosWhereInput[]
    NOT?: Lote_productosWhereInput | Lote_productosWhereInput[]
    Id_lote?: IntFilter<"Lote_productos"> | number
    Id_producto?: IntNullableFilter<"Lote_productos"> | number | null
    Precio_compra?: DecimalNullableFilter<"Lote_productos"> | Decimal | DecimalJsLike | number | string | null
    Cantidad?: IntNullableFilter<"Lote_productos"> | number | null
    Stock?: IntNullableFilter<"Lote_productos"> | number | null
    Fecha?: DateTimeNullableFilter<"Lote_productos"> | Date | string | null
    Productos?: XOR<ProductosNullableScalarRelationFilter, ProductosWhereInput> | null
  }

  export type Lote_productosOrderByWithRelationInput = {
    Id_lote?: SortOrder
    Id_producto?: SortOrderInput | SortOrder
    Precio_compra?: SortOrderInput | SortOrder
    Cantidad?: SortOrderInput | SortOrder
    Stock?: SortOrderInput | SortOrder
    Fecha?: SortOrderInput | SortOrder
    Productos?: ProductosOrderByWithRelationInput
  }

  export type Lote_productosWhereUniqueInput = Prisma.AtLeast<{
    Id_lote?: number
    AND?: Lote_productosWhereInput | Lote_productosWhereInput[]
    OR?: Lote_productosWhereInput[]
    NOT?: Lote_productosWhereInput | Lote_productosWhereInput[]
    Id_producto?: IntNullableFilter<"Lote_productos"> | number | null
    Precio_compra?: DecimalNullableFilter<"Lote_productos"> | Decimal | DecimalJsLike | number | string | null
    Cantidad?: IntNullableFilter<"Lote_productos"> | number | null
    Stock?: IntNullableFilter<"Lote_productos"> | number | null
    Fecha?: DateTimeNullableFilter<"Lote_productos"> | Date | string | null
    Productos?: XOR<ProductosNullableScalarRelationFilter, ProductosWhereInput> | null
  }, "Id_lote">

  export type Lote_productosOrderByWithAggregationInput = {
    Id_lote?: SortOrder
    Id_producto?: SortOrderInput | SortOrder
    Precio_compra?: SortOrderInput | SortOrder
    Cantidad?: SortOrderInput | SortOrder
    Stock?: SortOrderInput | SortOrder
    Fecha?: SortOrderInput | SortOrder
    _count?: Lote_productosCountOrderByAggregateInput
    _avg?: Lote_productosAvgOrderByAggregateInput
    _max?: Lote_productosMaxOrderByAggregateInput
    _min?: Lote_productosMinOrderByAggregateInput
    _sum?: Lote_productosSumOrderByAggregateInput
  }

  export type Lote_productosScalarWhereWithAggregatesInput = {
    AND?: Lote_productosScalarWhereWithAggregatesInput | Lote_productosScalarWhereWithAggregatesInput[]
    OR?: Lote_productosScalarWhereWithAggregatesInput[]
    NOT?: Lote_productosScalarWhereWithAggregatesInput | Lote_productosScalarWhereWithAggregatesInput[]
    Id_lote?: IntWithAggregatesFilter<"Lote_productos"> | number
    Id_producto?: IntNullableWithAggregatesFilter<"Lote_productos"> | number | null
    Precio_compra?: DecimalNullableWithAggregatesFilter<"Lote_productos"> | Decimal | DecimalJsLike | number | string | null
    Cantidad?: IntNullableWithAggregatesFilter<"Lote_productos"> | number | null
    Stock?: IntNullableWithAggregatesFilter<"Lote_productos"> | number | null
    Fecha?: DateTimeNullableWithAggregatesFilter<"Lote_productos"> | Date | string | null
  }

  export type Medio_pagosWhereInput = {
    AND?: Medio_pagosWhereInput | Medio_pagosWhereInput[]
    OR?: Medio_pagosWhereInput[]
    NOT?: Medio_pagosWhereInput | Medio_pagosWhereInput[]
    Id_pago?: IntFilter<"Medio_pagos"> | number
    Nombre_pago?: StringNullableFilter<"Medio_pagos"> | string | null
    Ventas?: VentasListRelationFilter
  }

  export type Medio_pagosOrderByWithRelationInput = {
    Id_pago?: SortOrder
    Nombre_pago?: SortOrderInput | SortOrder
    Ventas?: VentasOrderByRelationAggregateInput
    _relevance?: Medio_pagosOrderByRelevanceInput
  }

  export type Medio_pagosWhereUniqueInput = Prisma.AtLeast<{
    Id_pago?: number
    AND?: Medio_pagosWhereInput | Medio_pagosWhereInput[]
    OR?: Medio_pagosWhereInput[]
    NOT?: Medio_pagosWhereInput | Medio_pagosWhereInput[]
    Nombre_pago?: StringNullableFilter<"Medio_pagos"> | string | null
    Ventas?: VentasListRelationFilter
  }, "Id_pago">

  export type Medio_pagosOrderByWithAggregationInput = {
    Id_pago?: SortOrder
    Nombre_pago?: SortOrderInput | SortOrder
    _count?: Medio_pagosCountOrderByAggregateInput
    _avg?: Medio_pagosAvgOrderByAggregateInput
    _max?: Medio_pagosMaxOrderByAggregateInput
    _min?: Medio_pagosMinOrderByAggregateInput
    _sum?: Medio_pagosSumOrderByAggregateInput
  }

  export type Medio_pagosScalarWhereWithAggregatesInput = {
    AND?: Medio_pagosScalarWhereWithAggregatesInput | Medio_pagosScalarWhereWithAggregatesInput[]
    OR?: Medio_pagosScalarWhereWithAggregatesInput[]
    NOT?: Medio_pagosScalarWhereWithAggregatesInput | Medio_pagosScalarWhereWithAggregatesInput[]
    Id_pago?: IntWithAggregatesFilter<"Medio_pagos"> | number
    Nombre_pago?: StringNullableWithAggregatesFilter<"Medio_pagos"> | string | null
  }

  export type ProductosWhereInput = {
    AND?: ProductosWhereInput | ProductosWhereInput[]
    OR?: ProductosWhereInput[]
    NOT?: ProductosWhereInput | ProductosWhereInput[]
    Id_producto?: IntFilter<"Productos"> | number
    Nombre?: StringNullableFilter<"Productos"> | string | null
    Precio_venta?: DecimalNullableFilter<"Productos"> | Decimal | DecimalJsLike | number | string | null
    Stock?: IntNullableFilter<"Productos"> | number | null
    Detalle_ventas_productos?: Detalle_ventas_productosListRelationFilter
    Lote_productos?: Lote_productosListRelationFilter
  }

  export type ProductosOrderByWithRelationInput = {
    Id_producto?: SortOrder
    Nombre?: SortOrderInput | SortOrder
    Precio_venta?: SortOrderInput | SortOrder
    Stock?: SortOrderInput | SortOrder
    Detalle_ventas_productos?: Detalle_ventas_productosOrderByRelationAggregateInput
    Lote_productos?: Lote_productosOrderByRelationAggregateInput
    _relevance?: ProductosOrderByRelevanceInput
  }

  export type ProductosWhereUniqueInput = Prisma.AtLeast<{
    Id_producto?: number
    AND?: ProductosWhereInput | ProductosWhereInput[]
    OR?: ProductosWhereInput[]
    NOT?: ProductosWhereInput | ProductosWhereInput[]
    Nombre?: StringNullableFilter<"Productos"> | string | null
    Precio_venta?: DecimalNullableFilter<"Productos"> | Decimal | DecimalJsLike | number | string | null
    Stock?: IntNullableFilter<"Productos"> | number | null
    Detalle_ventas_productos?: Detalle_ventas_productosListRelationFilter
    Lote_productos?: Lote_productosListRelationFilter
  }, "Id_producto">

  export type ProductosOrderByWithAggregationInput = {
    Id_producto?: SortOrder
    Nombre?: SortOrderInput | SortOrder
    Precio_venta?: SortOrderInput | SortOrder
    Stock?: SortOrderInput | SortOrder
    _count?: ProductosCountOrderByAggregateInput
    _avg?: ProductosAvgOrderByAggregateInput
    _max?: ProductosMaxOrderByAggregateInput
    _min?: ProductosMinOrderByAggregateInput
    _sum?: ProductosSumOrderByAggregateInput
  }

  export type ProductosScalarWhereWithAggregatesInput = {
    AND?: ProductosScalarWhereWithAggregatesInput | ProductosScalarWhereWithAggregatesInput[]
    OR?: ProductosScalarWhereWithAggregatesInput[]
    NOT?: ProductosScalarWhereWithAggregatesInput | ProductosScalarWhereWithAggregatesInput[]
    Id_producto?: IntWithAggregatesFilter<"Productos"> | number
    Nombre?: StringNullableWithAggregatesFilter<"Productos"> | string | null
    Precio_venta?: DecimalNullableWithAggregatesFilter<"Productos"> | Decimal | DecimalJsLike | number | string | null
    Stock?: IntNullableWithAggregatesFilter<"Productos"> | number | null
  }

  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    Id_usuario?: IntFilter<"Usuarios"> | number
    Nombre?: StringNullableFilter<"Usuarios"> | string | null
    Apellido_1?: StringNullableFilter<"Usuarios"> | string | null
    Apellido_2?: StringNullableFilter<"Usuarios"> | string | null
    Contrasena?: StringNullableFilter<"Usuarios"> | string | null
    Cargo?: IntNullableFilter<"Usuarios"> | number | null
    Cargos?: XOR<CargosNullableScalarRelationFilter, CargosWhereInput> | null
    Ventas?: VentasListRelationFilter
  }

  export type UsuariosOrderByWithRelationInput = {
    Id_usuario?: SortOrder
    Nombre?: SortOrderInput | SortOrder
    Apellido_1?: SortOrderInput | SortOrder
    Apellido_2?: SortOrderInput | SortOrder
    Contrasena?: SortOrderInput | SortOrder
    Cargo?: SortOrderInput | SortOrder
    Cargos?: CargosOrderByWithRelationInput
    Ventas?: VentasOrderByRelationAggregateInput
    _relevance?: UsuariosOrderByRelevanceInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    Id_usuario?: number
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    Nombre?: StringNullableFilter<"Usuarios"> | string | null
    Apellido_1?: StringNullableFilter<"Usuarios"> | string | null
    Apellido_2?: StringNullableFilter<"Usuarios"> | string | null
    Contrasena?: StringNullableFilter<"Usuarios"> | string | null
    Cargo?: IntNullableFilter<"Usuarios"> | number | null
    Cargos?: XOR<CargosNullableScalarRelationFilter, CargosWhereInput> | null
    Ventas?: VentasListRelationFilter
  }, "Id_usuario">

  export type UsuariosOrderByWithAggregationInput = {
    Id_usuario?: SortOrder
    Nombre?: SortOrderInput | SortOrder
    Apellido_1?: SortOrderInput | SortOrder
    Apellido_2?: SortOrderInput | SortOrder
    Contrasena?: SortOrderInput | SortOrder
    Cargo?: SortOrderInput | SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _avg?: UsuariosAvgOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
    _sum?: UsuariosSumOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    Id_usuario?: IntWithAggregatesFilter<"Usuarios"> | number
    Nombre?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    Apellido_1?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    Apellido_2?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    Contrasena?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    Cargo?: IntNullableWithAggregatesFilter<"Usuarios"> | number | null
  }

  export type VentasWhereInput = {
    AND?: VentasWhereInput | VentasWhereInput[]
    OR?: VentasWhereInput[]
    NOT?: VentasWhereInput | VentasWhereInput[]
    Id_venta?: IntFilter<"Ventas"> | number
    Id_pago?: IntNullableFilter<"Ventas"> | number | null
    Total_venta?: DecimalNullableFilter<"Ventas"> | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: DateTimeNullableFilter<"Ventas"> | Date | string | null
    Id_usuario?: IntFilter<"Ventas"> | number
    Utilidad_total?: DecimalNullableFilter<"Ventas"> | Decimal | DecimalJsLike | number | string | null
    Detalle_ventas_productos?: Detalle_ventas_productosListRelationFilter
    Medio_pagos?: XOR<Medio_pagosNullableScalarRelationFilter, Medio_pagosWhereInput> | null
    Usuarios?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
  }

  export type VentasOrderByWithRelationInput = {
    Id_venta?: SortOrder
    Id_pago?: SortOrderInput | SortOrder
    Total_venta?: SortOrderInput | SortOrder
    Fecha_venta?: SortOrderInput | SortOrder
    Id_usuario?: SortOrder
    Utilidad_total?: SortOrderInput | SortOrder
    Detalle_ventas_productos?: Detalle_ventas_productosOrderByRelationAggregateInput
    Medio_pagos?: Medio_pagosOrderByWithRelationInput
    Usuarios?: UsuariosOrderByWithRelationInput
  }

  export type VentasWhereUniqueInput = Prisma.AtLeast<{
    Id_venta?: number
    AND?: VentasWhereInput | VentasWhereInput[]
    OR?: VentasWhereInput[]
    NOT?: VentasWhereInput | VentasWhereInput[]
    Id_pago?: IntNullableFilter<"Ventas"> | number | null
    Total_venta?: DecimalNullableFilter<"Ventas"> | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: DateTimeNullableFilter<"Ventas"> | Date | string | null
    Id_usuario?: IntFilter<"Ventas"> | number
    Utilidad_total?: DecimalNullableFilter<"Ventas"> | Decimal | DecimalJsLike | number | string | null
    Detalle_ventas_productos?: Detalle_ventas_productosListRelationFilter
    Medio_pagos?: XOR<Medio_pagosNullableScalarRelationFilter, Medio_pagosWhereInput> | null
    Usuarios?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
  }, "Id_venta">

  export type VentasOrderByWithAggregationInput = {
    Id_venta?: SortOrder
    Id_pago?: SortOrderInput | SortOrder
    Total_venta?: SortOrderInput | SortOrder
    Fecha_venta?: SortOrderInput | SortOrder
    Id_usuario?: SortOrder
    Utilidad_total?: SortOrderInput | SortOrder
    _count?: VentasCountOrderByAggregateInput
    _avg?: VentasAvgOrderByAggregateInput
    _max?: VentasMaxOrderByAggregateInput
    _min?: VentasMinOrderByAggregateInput
    _sum?: VentasSumOrderByAggregateInput
  }

  export type VentasScalarWhereWithAggregatesInput = {
    AND?: VentasScalarWhereWithAggregatesInput | VentasScalarWhereWithAggregatesInput[]
    OR?: VentasScalarWhereWithAggregatesInput[]
    NOT?: VentasScalarWhereWithAggregatesInput | VentasScalarWhereWithAggregatesInput[]
    Id_venta?: IntWithAggregatesFilter<"Ventas"> | number
    Id_pago?: IntNullableWithAggregatesFilter<"Ventas"> | number | null
    Total_venta?: DecimalNullableWithAggregatesFilter<"Ventas"> | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: DateTimeNullableWithAggregatesFilter<"Ventas"> | Date | string | null
    Id_usuario?: IntWithAggregatesFilter<"Ventas"> | number
    Utilidad_total?: DecimalNullableWithAggregatesFilter<"Ventas"> | Decimal | DecimalJsLike | number | string | null
  }

  export type CargosCreateInput = {
    Id_cargo: number
    Nombre_cargo?: string | null
    Usuarios?: UsuariosCreateNestedManyWithoutCargosInput
  }

  export type CargosUncheckedCreateInput = {
    Id_cargo: number
    Nombre_cargo?: string | null
    Usuarios?: UsuariosUncheckedCreateNestedManyWithoutCargosInput
  }

  export type CargosUpdateInput = {
    Id_cargo?: IntFieldUpdateOperationsInput | number
    Nombre_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    Usuarios?: UsuariosUpdateManyWithoutCargosNestedInput
  }

  export type CargosUncheckedUpdateInput = {
    Id_cargo?: IntFieldUpdateOperationsInput | number
    Nombre_cargo?: NullableStringFieldUpdateOperationsInput | string | null
    Usuarios?: UsuariosUncheckedUpdateManyWithoutCargosNestedInput
  }

  export type CargosCreateManyInput = {
    Id_cargo: number
    Nombre_cargo?: string | null
  }

  export type CargosUpdateManyMutationInput = {
    Id_cargo?: IntFieldUpdateOperationsInput | number
    Nombre_cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CargosUncheckedUpdateManyInput = {
    Id_cargo?: IntFieldUpdateOperationsInput | number
    Nombre_cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Detalle_ventas_productosCreateInput = {
    Cantidad?: number | null
    Precio_total?: Decimal | DecimalJsLike | number | string | null
    Productos: ProductosCreateNestedOneWithoutDetalle_ventas_productosInput
    Ventas: VentasCreateNestedOneWithoutDetalle_ventas_productosInput
  }

  export type Detalle_ventas_productosUncheckedCreateInput = {
    Id_ventas: number
    Id_producto: number
    Cantidad?: number | null
    Precio_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type Detalle_ventas_productosUpdateInput = {
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Precio_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Productos?: ProductosUpdateOneRequiredWithoutDetalle_ventas_productosNestedInput
    Ventas?: VentasUpdateOneRequiredWithoutDetalle_ventas_productosNestedInput
  }

  export type Detalle_ventas_productosUncheckedUpdateInput = {
    Id_ventas?: IntFieldUpdateOperationsInput | number
    Id_producto?: IntFieldUpdateOperationsInput | number
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Precio_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type Detalle_ventas_productosCreateManyInput = {
    Id_ventas: number
    Id_producto: number
    Cantidad?: number | null
    Precio_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type Detalle_ventas_productosUpdateManyMutationInput = {
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Precio_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type Detalle_ventas_productosUncheckedUpdateManyInput = {
    Id_ventas?: IntFieldUpdateOperationsInput | number
    Id_producto?: IntFieldUpdateOperationsInput | number
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Precio_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type Lote_productosCreateInput = {
    Precio_compra?: Decimal | DecimalJsLike | number | string | null
    Cantidad?: number | null
    Stock?: number | null
    Fecha?: Date | string | null
    Productos?: ProductosCreateNestedOneWithoutLote_productosInput
  }

  export type Lote_productosUncheckedCreateInput = {
    Id_lote?: number
    Id_producto?: number | null
    Precio_compra?: Decimal | DecimalJsLike | number | string | null
    Cantidad?: number | null
    Stock?: number | null
    Fecha?: Date | string | null
  }

  export type Lote_productosUpdateInput = {
    Precio_compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Productos?: ProductosUpdateOneWithoutLote_productosNestedInput
  }

  export type Lote_productosUncheckedUpdateInput = {
    Id_lote?: IntFieldUpdateOperationsInput | number
    Id_producto?: NullableIntFieldUpdateOperationsInput | number | null
    Precio_compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Lote_productosCreateManyInput = {
    Id_lote?: number
    Id_producto?: number | null
    Precio_compra?: Decimal | DecimalJsLike | number | string | null
    Cantidad?: number | null
    Stock?: number | null
    Fecha?: Date | string | null
  }

  export type Lote_productosUpdateManyMutationInput = {
    Precio_compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Lote_productosUncheckedUpdateManyInput = {
    Id_lote?: IntFieldUpdateOperationsInput | number
    Id_producto?: NullableIntFieldUpdateOperationsInput | number | null
    Precio_compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Medio_pagosCreateInput = {
    Nombre_pago?: string | null
    Ventas?: VentasCreateNestedManyWithoutMedio_pagosInput
  }

  export type Medio_pagosUncheckedCreateInput = {
    Id_pago?: number
    Nombre_pago?: string | null
    Ventas?: VentasUncheckedCreateNestedManyWithoutMedio_pagosInput
  }

  export type Medio_pagosUpdateInput = {
    Nombre_pago?: NullableStringFieldUpdateOperationsInput | string | null
    Ventas?: VentasUpdateManyWithoutMedio_pagosNestedInput
  }

  export type Medio_pagosUncheckedUpdateInput = {
    Id_pago?: IntFieldUpdateOperationsInput | number
    Nombre_pago?: NullableStringFieldUpdateOperationsInput | string | null
    Ventas?: VentasUncheckedUpdateManyWithoutMedio_pagosNestedInput
  }

  export type Medio_pagosCreateManyInput = {
    Id_pago?: number
    Nombre_pago?: string | null
  }

  export type Medio_pagosUpdateManyMutationInput = {
    Nombre_pago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Medio_pagosUncheckedUpdateManyInput = {
    Id_pago?: IntFieldUpdateOperationsInput | number
    Nombre_pago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductosCreateInput = {
    Id_producto: number
    Nombre?: string | null
    Precio_venta?: Decimal | DecimalJsLike | number | string | null
    Stock?: number | null
    Detalle_ventas_productos?: Detalle_ventas_productosCreateNestedManyWithoutProductosInput
    Lote_productos?: Lote_productosCreateNestedManyWithoutProductosInput
  }

  export type ProductosUncheckedCreateInput = {
    Id_producto: number
    Nombre?: string | null
    Precio_venta?: Decimal | DecimalJsLike | number | string | null
    Stock?: number | null
    Detalle_ventas_productos?: Detalle_ventas_productosUncheckedCreateNestedManyWithoutProductosInput
    Lote_productos?: Lote_productosUncheckedCreateNestedManyWithoutProductosInput
  }

  export type ProductosUpdateInput = {
    Id_producto?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Precio_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
    Detalle_ventas_productos?: Detalle_ventas_productosUpdateManyWithoutProductosNestedInput
    Lote_productos?: Lote_productosUpdateManyWithoutProductosNestedInput
  }

  export type ProductosUncheckedUpdateInput = {
    Id_producto?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Precio_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
    Detalle_ventas_productos?: Detalle_ventas_productosUncheckedUpdateManyWithoutProductosNestedInput
    Lote_productos?: Lote_productosUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type ProductosCreateManyInput = {
    Id_producto: number
    Nombre?: string | null
    Precio_venta?: Decimal | DecimalJsLike | number | string | null
    Stock?: number | null
  }

  export type ProductosUpdateManyMutationInput = {
    Id_producto?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Precio_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductosUncheckedUpdateManyInput = {
    Id_producto?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Precio_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuariosCreateInput = {
    Id_usuario: number
    Nombre?: string | null
    Apellido_1?: string | null
    Apellido_2?: string | null
    Contrasena?: string | null
    Cargos?: CargosCreateNestedOneWithoutUsuariosInput
    Ventas?: VentasCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateInput = {
    Id_usuario: number
    Nombre?: string | null
    Apellido_1?: string | null
    Apellido_2?: string | null
    Contrasena?: string | null
    Cargo?: number | null
    Ventas?: VentasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosUpdateInput = {
    Id_usuario?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_1?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_2?: NullableStringFieldUpdateOperationsInput | string | null
    Contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    Cargos?: CargosUpdateOneWithoutUsuariosNestedInput
    Ventas?: VentasUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateInput = {
    Id_usuario?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_1?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_2?: NullableStringFieldUpdateOperationsInput | string | null
    Contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    Cargo?: NullableIntFieldUpdateOperationsInput | number | null
    Ventas?: VentasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosCreateManyInput = {
    Id_usuario: number
    Nombre?: string | null
    Apellido_1?: string | null
    Apellido_2?: string | null
    Contrasena?: string | null
    Cargo?: number | null
  }

  export type UsuariosUpdateManyMutationInput = {
    Id_usuario?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_1?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_2?: NullableStringFieldUpdateOperationsInput | string | null
    Contrasena?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosUncheckedUpdateManyInput = {
    Id_usuario?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_1?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_2?: NullableStringFieldUpdateOperationsInput | string | null
    Contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    Cargo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VentasCreateInput = {
    Id_venta: number
    Total_venta?: Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: Date | string | null
    Utilidad_total?: Decimal | DecimalJsLike | number | string | null
    Detalle_ventas_productos?: Detalle_ventas_productosCreateNestedManyWithoutVentasInput
    Medio_pagos?: Medio_pagosCreateNestedOneWithoutVentasInput
    Usuarios: UsuariosCreateNestedOneWithoutVentasInput
  }

  export type VentasUncheckedCreateInput = {
    Id_venta: number
    Id_pago?: number | null
    Total_venta?: Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: Date | string | null
    Id_usuario: number
    Utilidad_total?: Decimal | DecimalJsLike | number | string | null
    Detalle_ventas_productos?: Detalle_ventas_productosUncheckedCreateNestedManyWithoutVentasInput
  }

  export type VentasUpdateInput = {
    Id_venta?: IntFieldUpdateOperationsInput | number
    Total_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Utilidad_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Detalle_ventas_productos?: Detalle_ventas_productosUpdateManyWithoutVentasNestedInput
    Medio_pagos?: Medio_pagosUpdateOneWithoutVentasNestedInput
    Usuarios?: UsuariosUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentasUncheckedUpdateInput = {
    Id_venta?: IntFieldUpdateOperationsInput | number
    Id_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Total_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_usuario?: IntFieldUpdateOperationsInput | number
    Utilidad_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Detalle_ventas_productos?: Detalle_ventas_productosUncheckedUpdateManyWithoutVentasNestedInput
  }

  export type VentasCreateManyInput = {
    Id_venta: number
    Id_pago?: number | null
    Total_venta?: Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: Date | string | null
    Id_usuario: number
    Utilidad_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type VentasUpdateManyMutationInput = {
    Id_venta?: IntFieldUpdateOperationsInput | number
    Total_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Utilidad_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type VentasUncheckedUpdateManyInput = {
    Id_venta?: IntFieldUpdateOperationsInput | number
    Id_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Total_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_usuario?: IntFieldUpdateOperationsInput | number
    Utilidad_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsuariosListRelationFilter = {
    every?: UsuariosWhereInput
    some?: UsuariosWhereInput
    none?: UsuariosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CargosOrderByRelevanceInput = {
    fields: CargosOrderByRelevanceFieldEnum | CargosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CargosCountOrderByAggregateInput = {
    Id_cargo?: SortOrder
    Nombre_cargo?: SortOrder
  }

  export type CargosAvgOrderByAggregateInput = {
    Id_cargo?: SortOrder
  }

  export type CargosMaxOrderByAggregateInput = {
    Id_cargo?: SortOrder
    Nombre_cargo?: SortOrder
  }

  export type CargosMinOrderByAggregateInput = {
    Id_cargo?: SortOrder
    Nombre_cargo?: SortOrder
  }

  export type CargosSumOrderByAggregateInput = {
    Id_cargo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ProductosScalarRelationFilter = {
    is?: ProductosWhereInput
    isNot?: ProductosWhereInput
  }

  export type VentasScalarRelationFilter = {
    is?: VentasWhereInput
    isNot?: VentasWhereInput
  }

  export type Detalle_ventas_productosId_ventasId_productoCompoundUniqueInput = {
    Id_ventas: number
    Id_producto: number
  }

  export type Detalle_ventas_productosCountOrderByAggregateInput = {
    Id_ventas?: SortOrder
    Id_producto?: SortOrder
    Cantidad?: SortOrder
    Precio_total?: SortOrder
  }

  export type Detalle_ventas_productosAvgOrderByAggregateInput = {
    Id_ventas?: SortOrder
    Id_producto?: SortOrder
    Cantidad?: SortOrder
    Precio_total?: SortOrder
  }

  export type Detalle_ventas_productosMaxOrderByAggregateInput = {
    Id_ventas?: SortOrder
    Id_producto?: SortOrder
    Cantidad?: SortOrder
    Precio_total?: SortOrder
  }

  export type Detalle_ventas_productosMinOrderByAggregateInput = {
    Id_ventas?: SortOrder
    Id_producto?: SortOrder
    Cantidad?: SortOrder
    Precio_total?: SortOrder
  }

  export type Detalle_ventas_productosSumOrderByAggregateInput = {
    Id_ventas?: SortOrder
    Id_producto?: SortOrder
    Cantidad?: SortOrder
    Precio_total?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProductosNullableScalarRelationFilter = {
    is?: ProductosWhereInput | null
    isNot?: ProductosWhereInput | null
  }

  export type Lote_productosCountOrderByAggregateInput = {
    Id_lote?: SortOrder
    Id_producto?: SortOrder
    Precio_compra?: SortOrder
    Cantidad?: SortOrder
    Stock?: SortOrder
    Fecha?: SortOrder
  }

  export type Lote_productosAvgOrderByAggregateInput = {
    Id_lote?: SortOrder
    Id_producto?: SortOrder
    Precio_compra?: SortOrder
    Cantidad?: SortOrder
    Stock?: SortOrder
  }

  export type Lote_productosMaxOrderByAggregateInput = {
    Id_lote?: SortOrder
    Id_producto?: SortOrder
    Precio_compra?: SortOrder
    Cantidad?: SortOrder
    Stock?: SortOrder
    Fecha?: SortOrder
  }

  export type Lote_productosMinOrderByAggregateInput = {
    Id_lote?: SortOrder
    Id_producto?: SortOrder
    Precio_compra?: SortOrder
    Cantidad?: SortOrder
    Stock?: SortOrder
    Fecha?: SortOrder
  }

  export type Lote_productosSumOrderByAggregateInput = {
    Id_lote?: SortOrder
    Id_producto?: SortOrder
    Precio_compra?: SortOrder
    Cantidad?: SortOrder
    Stock?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VentasListRelationFilter = {
    every?: VentasWhereInput
    some?: VentasWhereInput
    none?: VentasWhereInput
  }

  export type VentasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Medio_pagosOrderByRelevanceInput = {
    fields: Medio_pagosOrderByRelevanceFieldEnum | Medio_pagosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Medio_pagosCountOrderByAggregateInput = {
    Id_pago?: SortOrder
    Nombre_pago?: SortOrder
  }

  export type Medio_pagosAvgOrderByAggregateInput = {
    Id_pago?: SortOrder
  }

  export type Medio_pagosMaxOrderByAggregateInput = {
    Id_pago?: SortOrder
    Nombre_pago?: SortOrder
  }

  export type Medio_pagosMinOrderByAggregateInput = {
    Id_pago?: SortOrder
    Nombre_pago?: SortOrder
  }

  export type Medio_pagosSumOrderByAggregateInput = {
    Id_pago?: SortOrder
  }

  export type Detalle_ventas_productosListRelationFilter = {
    every?: Detalle_ventas_productosWhereInput
    some?: Detalle_ventas_productosWhereInput
    none?: Detalle_ventas_productosWhereInput
  }

  export type Lote_productosListRelationFilter = {
    every?: Lote_productosWhereInput
    some?: Lote_productosWhereInput
    none?: Lote_productosWhereInput
  }

  export type Detalle_ventas_productosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Lote_productosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductosOrderByRelevanceInput = {
    fields: ProductosOrderByRelevanceFieldEnum | ProductosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductosCountOrderByAggregateInput = {
    Id_producto?: SortOrder
    Nombre?: SortOrder
    Precio_venta?: SortOrder
    Stock?: SortOrder
  }

  export type ProductosAvgOrderByAggregateInput = {
    Id_producto?: SortOrder
    Precio_venta?: SortOrder
    Stock?: SortOrder
  }

  export type ProductosMaxOrderByAggregateInput = {
    Id_producto?: SortOrder
    Nombre?: SortOrder
    Precio_venta?: SortOrder
    Stock?: SortOrder
  }

  export type ProductosMinOrderByAggregateInput = {
    Id_producto?: SortOrder
    Nombre?: SortOrder
    Precio_venta?: SortOrder
    Stock?: SortOrder
  }

  export type ProductosSumOrderByAggregateInput = {
    Id_producto?: SortOrder
    Precio_venta?: SortOrder
    Stock?: SortOrder
  }

  export type CargosNullableScalarRelationFilter = {
    is?: CargosWhereInput | null
    isNot?: CargosWhereInput | null
  }

  export type UsuariosOrderByRelevanceInput = {
    fields: UsuariosOrderByRelevanceFieldEnum | UsuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuariosCountOrderByAggregateInput = {
    Id_usuario?: SortOrder
    Nombre?: SortOrder
    Apellido_1?: SortOrder
    Apellido_2?: SortOrder
    Contrasena?: SortOrder
    Cargo?: SortOrder
  }

  export type UsuariosAvgOrderByAggregateInput = {
    Id_usuario?: SortOrder
    Cargo?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    Id_usuario?: SortOrder
    Nombre?: SortOrder
    Apellido_1?: SortOrder
    Apellido_2?: SortOrder
    Contrasena?: SortOrder
    Cargo?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    Id_usuario?: SortOrder
    Nombre?: SortOrder
    Apellido_1?: SortOrder
    Apellido_2?: SortOrder
    Contrasena?: SortOrder
    Cargo?: SortOrder
  }

  export type UsuariosSumOrderByAggregateInput = {
    Id_usuario?: SortOrder
    Cargo?: SortOrder
  }

  export type Medio_pagosNullableScalarRelationFilter = {
    is?: Medio_pagosWhereInput | null
    isNot?: Medio_pagosWhereInput | null
  }

  export type UsuariosScalarRelationFilter = {
    is?: UsuariosWhereInput
    isNot?: UsuariosWhereInput
  }

  export type VentasCountOrderByAggregateInput = {
    Id_venta?: SortOrder
    Id_pago?: SortOrder
    Total_venta?: SortOrder
    Fecha_venta?: SortOrder
    Id_usuario?: SortOrder
    Utilidad_total?: SortOrder
  }

  export type VentasAvgOrderByAggregateInput = {
    Id_venta?: SortOrder
    Id_pago?: SortOrder
    Total_venta?: SortOrder
    Id_usuario?: SortOrder
    Utilidad_total?: SortOrder
  }

  export type VentasMaxOrderByAggregateInput = {
    Id_venta?: SortOrder
    Id_pago?: SortOrder
    Total_venta?: SortOrder
    Fecha_venta?: SortOrder
    Id_usuario?: SortOrder
    Utilidad_total?: SortOrder
  }

  export type VentasMinOrderByAggregateInput = {
    Id_venta?: SortOrder
    Id_pago?: SortOrder
    Total_venta?: SortOrder
    Fecha_venta?: SortOrder
    Id_usuario?: SortOrder
    Utilidad_total?: SortOrder
  }

  export type VentasSumOrderByAggregateInput = {
    Id_venta?: SortOrder
    Id_pago?: SortOrder
    Total_venta?: SortOrder
    Id_usuario?: SortOrder
    Utilidad_total?: SortOrder
  }

  export type UsuariosCreateNestedManyWithoutCargosInput = {
    create?: XOR<UsuariosCreateWithoutCargosInput, UsuariosUncheckedCreateWithoutCargosInput> | UsuariosCreateWithoutCargosInput[] | UsuariosUncheckedCreateWithoutCargosInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutCargosInput | UsuariosCreateOrConnectWithoutCargosInput[]
    createMany?: UsuariosCreateManyCargosInputEnvelope
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
  }

  export type UsuariosUncheckedCreateNestedManyWithoutCargosInput = {
    create?: XOR<UsuariosCreateWithoutCargosInput, UsuariosUncheckedCreateWithoutCargosInput> | UsuariosCreateWithoutCargosInput[] | UsuariosUncheckedCreateWithoutCargosInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutCargosInput | UsuariosCreateOrConnectWithoutCargosInput[]
    createMany?: UsuariosCreateManyCargosInputEnvelope
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuariosUpdateManyWithoutCargosNestedInput = {
    create?: XOR<UsuariosCreateWithoutCargosInput, UsuariosUncheckedCreateWithoutCargosInput> | UsuariosCreateWithoutCargosInput[] | UsuariosUncheckedCreateWithoutCargosInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutCargosInput | UsuariosCreateOrConnectWithoutCargosInput[]
    upsert?: UsuariosUpsertWithWhereUniqueWithoutCargosInput | UsuariosUpsertWithWhereUniqueWithoutCargosInput[]
    createMany?: UsuariosCreateManyCargosInputEnvelope
    set?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    disconnect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    delete?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    update?: UsuariosUpdateWithWhereUniqueWithoutCargosInput | UsuariosUpdateWithWhereUniqueWithoutCargosInput[]
    updateMany?: UsuariosUpdateManyWithWhereWithoutCargosInput | UsuariosUpdateManyWithWhereWithoutCargosInput[]
    deleteMany?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
  }

  export type UsuariosUncheckedUpdateManyWithoutCargosNestedInput = {
    create?: XOR<UsuariosCreateWithoutCargosInput, UsuariosUncheckedCreateWithoutCargosInput> | UsuariosCreateWithoutCargosInput[] | UsuariosUncheckedCreateWithoutCargosInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutCargosInput | UsuariosCreateOrConnectWithoutCargosInput[]
    upsert?: UsuariosUpsertWithWhereUniqueWithoutCargosInput | UsuariosUpsertWithWhereUniqueWithoutCargosInput[]
    createMany?: UsuariosCreateManyCargosInputEnvelope
    set?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    disconnect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    delete?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    update?: UsuariosUpdateWithWhereUniqueWithoutCargosInput | UsuariosUpdateWithWhereUniqueWithoutCargosInput[]
    updateMany?: UsuariosUpdateManyWithWhereWithoutCargosInput | UsuariosUpdateManyWithWhereWithoutCargosInput[]
    deleteMany?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
  }

  export type ProductosCreateNestedOneWithoutDetalle_ventas_productosInput = {
    create?: XOR<ProductosCreateWithoutDetalle_ventas_productosInput, ProductosUncheckedCreateWithoutDetalle_ventas_productosInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutDetalle_ventas_productosInput
    connect?: ProductosWhereUniqueInput
  }

  export type VentasCreateNestedOneWithoutDetalle_ventas_productosInput = {
    create?: XOR<VentasCreateWithoutDetalle_ventas_productosInput, VentasUncheckedCreateWithoutDetalle_ventas_productosInput>
    connectOrCreate?: VentasCreateOrConnectWithoutDetalle_ventas_productosInput
    connect?: VentasWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProductosUpdateOneRequiredWithoutDetalle_ventas_productosNestedInput = {
    create?: XOR<ProductosCreateWithoutDetalle_ventas_productosInput, ProductosUncheckedCreateWithoutDetalle_ventas_productosInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutDetalle_ventas_productosInput
    upsert?: ProductosUpsertWithoutDetalle_ventas_productosInput
    connect?: ProductosWhereUniqueInput
    update?: XOR<XOR<ProductosUpdateToOneWithWhereWithoutDetalle_ventas_productosInput, ProductosUpdateWithoutDetalle_ventas_productosInput>, ProductosUncheckedUpdateWithoutDetalle_ventas_productosInput>
  }

  export type VentasUpdateOneRequiredWithoutDetalle_ventas_productosNestedInput = {
    create?: XOR<VentasCreateWithoutDetalle_ventas_productosInput, VentasUncheckedCreateWithoutDetalle_ventas_productosInput>
    connectOrCreate?: VentasCreateOrConnectWithoutDetalle_ventas_productosInput
    upsert?: VentasUpsertWithoutDetalle_ventas_productosInput
    connect?: VentasWhereUniqueInput
    update?: XOR<XOR<VentasUpdateToOneWithWhereWithoutDetalle_ventas_productosInput, VentasUpdateWithoutDetalle_ventas_productosInput>, VentasUncheckedUpdateWithoutDetalle_ventas_productosInput>
  }

  export type ProductosCreateNestedOneWithoutLote_productosInput = {
    create?: XOR<ProductosCreateWithoutLote_productosInput, ProductosUncheckedCreateWithoutLote_productosInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutLote_productosInput
    connect?: ProductosWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProductosUpdateOneWithoutLote_productosNestedInput = {
    create?: XOR<ProductosCreateWithoutLote_productosInput, ProductosUncheckedCreateWithoutLote_productosInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutLote_productosInput
    upsert?: ProductosUpsertWithoutLote_productosInput
    disconnect?: ProductosWhereInput | boolean
    delete?: ProductosWhereInput | boolean
    connect?: ProductosWhereUniqueInput
    update?: XOR<XOR<ProductosUpdateToOneWithWhereWithoutLote_productosInput, ProductosUpdateWithoutLote_productosInput>, ProductosUncheckedUpdateWithoutLote_productosInput>
  }

  export type VentasCreateNestedManyWithoutMedio_pagosInput = {
    create?: XOR<VentasCreateWithoutMedio_pagosInput, VentasUncheckedCreateWithoutMedio_pagosInput> | VentasCreateWithoutMedio_pagosInput[] | VentasUncheckedCreateWithoutMedio_pagosInput[]
    connectOrCreate?: VentasCreateOrConnectWithoutMedio_pagosInput | VentasCreateOrConnectWithoutMedio_pagosInput[]
    createMany?: VentasCreateManyMedio_pagosInputEnvelope
    connect?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
  }

  export type VentasUncheckedCreateNestedManyWithoutMedio_pagosInput = {
    create?: XOR<VentasCreateWithoutMedio_pagosInput, VentasUncheckedCreateWithoutMedio_pagosInput> | VentasCreateWithoutMedio_pagosInput[] | VentasUncheckedCreateWithoutMedio_pagosInput[]
    connectOrCreate?: VentasCreateOrConnectWithoutMedio_pagosInput | VentasCreateOrConnectWithoutMedio_pagosInput[]
    createMany?: VentasCreateManyMedio_pagosInputEnvelope
    connect?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
  }

  export type VentasUpdateManyWithoutMedio_pagosNestedInput = {
    create?: XOR<VentasCreateWithoutMedio_pagosInput, VentasUncheckedCreateWithoutMedio_pagosInput> | VentasCreateWithoutMedio_pagosInput[] | VentasUncheckedCreateWithoutMedio_pagosInput[]
    connectOrCreate?: VentasCreateOrConnectWithoutMedio_pagosInput | VentasCreateOrConnectWithoutMedio_pagosInput[]
    upsert?: VentasUpsertWithWhereUniqueWithoutMedio_pagosInput | VentasUpsertWithWhereUniqueWithoutMedio_pagosInput[]
    createMany?: VentasCreateManyMedio_pagosInputEnvelope
    set?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    disconnect?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    delete?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    connect?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    update?: VentasUpdateWithWhereUniqueWithoutMedio_pagosInput | VentasUpdateWithWhereUniqueWithoutMedio_pagosInput[]
    updateMany?: VentasUpdateManyWithWhereWithoutMedio_pagosInput | VentasUpdateManyWithWhereWithoutMedio_pagosInput[]
    deleteMany?: VentasScalarWhereInput | VentasScalarWhereInput[]
  }

  export type VentasUncheckedUpdateManyWithoutMedio_pagosNestedInput = {
    create?: XOR<VentasCreateWithoutMedio_pagosInput, VentasUncheckedCreateWithoutMedio_pagosInput> | VentasCreateWithoutMedio_pagosInput[] | VentasUncheckedCreateWithoutMedio_pagosInput[]
    connectOrCreate?: VentasCreateOrConnectWithoutMedio_pagosInput | VentasCreateOrConnectWithoutMedio_pagosInput[]
    upsert?: VentasUpsertWithWhereUniqueWithoutMedio_pagosInput | VentasUpsertWithWhereUniqueWithoutMedio_pagosInput[]
    createMany?: VentasCreateManyMedio_pagosInputEnvelope
    set?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    disconnect?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    delete?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    connect?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    update?: VentasUpdateWithWhereUniqueWithoutMedio_pagosInput | VentasUpdateWithWhereUniqueWithoutMedio_pagosInput[]
    updateMany?: VentasUpdateManyWithWhereWithoutMedio_pagosInput | VentasUpdateManyWithWhereWithoutMedio_pagosInput[]
    deleteMany?: VentasScalarWhereInput | VentasScalarWhereInput[]
  }

  export type Detalle_ventas_productosCreateNestedManyWithoutProductosInput = {
    create?: XOR<Detalle_ventas_productosCreateWithoutProductosInput, Detalle_ventas_productosUncheckedCreateWithoutProductosInput> | Detalle_ventas_productosCreateWithoutProductosInput[] | Detalle_ventas_productosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: Detalle_ventas_productosCreateOrConnectWithoutProductosInput | Detalle_ventas_productosCreateOrConnectWithoutProductosInput[]
    createMany?: Detalle_ventas_productosCreateManyProductosInputEnvelope
    connect?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
  }

  export type Lote_productosCreateNestedManyWithoutProductosInput = {
    create?: XOR<Lote_productosCreateWithoutProductosInput, Lote_productosUncheckedCreateWithoutProductosInput> | Lote_productosCreateWithoutProductosInput[] | Lote_productosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: Lote_productosCreateOrConnectWithoutProductosInput | Lote_productosCreateOrConnectWithoutProductosInput[]
    createMany?: Lote_productosCreateManyProductosInputEnvelope
    connect?: Lote_productosWhereUniqueInput | Lote_productosWhereUniqueInput[]
  }

  export type Detalle_ventas_productosUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<Detalle_ventas_productosCreateWithoutProductosInput, Detalle_ventas_productosUncheckedCreateWithoutProductosInput> | Detalle_ventas_productosCreateWithoutProductosInput[] | Detalle_ventas_productosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: Detalle_ventas_productosCreateOrConnectWithoutProductosInput | Detalle_ventas_productosCreateOrConnectWithoutProductosInput[]
    createMany?: Detalle_ventas_productosCreateManyProductosInputEnvelope
    connect?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
  }

  export type Lote_productosUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<Lote_productosCreateWithoutProductosInput, Lote_productosUncheckedCreateWithoutProductosInput> | Lote_productosCreateWithoutProductosInput[] | Lote_productosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: Lote_productosCreateOrConnectWithoutProductosInput | Lote_productosCreateOrConnectWithoutProductosInput[]
    createMany?: Lote_productosCreateManyProductosInputEnvelope
    connect?: Lote_productosWhereUniqueInput | Lote_productosWhereUniqueInput[]
  }

  export type Detalle_ventas_productosUpdateManyWithoutProductosNestedInput = {
    create?: XOR<Detalle_ventas_productosCreateWithoutProductosInput, Detalle_ventas_productosUncheckedCreateWithoutProductosInput> | Detalle_ventas_productosCreateWithoutProductosInput[] | Detalle_ventas_productosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: Detalle_ventas_productosCreateOrConnectWithoutProductosInput | Detalle_ventas_productosCreateOrConnectWithoutProductosInput[]
    upsert?: Detalle_ventas_productosUpsertWithWhereUniqueWithoutProductosInput | Detalle_ventas_productosUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: Detalle_ventas_productosCreateManyProductosInputEnvelope
    set?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    disconnect?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    delete?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    connect?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    update?: Detalle_ventas_productosUpdateWithWhereUniqueWithoutProductosInput | Detalle_ventas_productosUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: Detalle_ventas_productosUpdateManyWithWhereWithoutProductosInput | Detalle_ventas_productosUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: Detalle_ventas_productosScalarWhereInput | Detalle_ventas_productosScalarWhereInput[]
  }

  export type Lote_productosUpdateManyWithoutProductosNestedInput = {
    create?: XOR<Lote_productosCreateWithoutProductosInput, Lote_productosUncheckedCreateWithoutProductosInput> | Lote_productosCreateWithoutProductosInput[] | Lote_productosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: Lote_productosCreateOrConnectWithoutProductosInput | Lote_productosCreateOrConnectWithoutProductosInput[]
    upsert?: Lote_productosUpsertWithWhereUniqueWithoutProductosInput | Lote_productosUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: Lote_productosCreateManyProductosInputEnvelope
    set?: Lote_productosWhereUniqueInput | Lote_productosWhereUniqueInput[]
    disconnect?: Lote_productosWhereUniqueInput | Lote_productosWhereUniqueInput[]
    delete?: Lote_productosWhereUniqueInput | Lote_productosWhereUniqueInput[]
    connect?: Lote_productosWhereUniqueInput | Lote_productosWhereUniqueInput[]
    update?: Lote_productosUpdateWithWhereUniqueWithoutProductosInput | Lote_productosUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: Lote_productosUpdateManyWithWhereWithoutProductosInput | Lote_productosUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: Lote_productosScalarWhereInput | Lote_productosScalarWhereInput[]
  }

  export type Detalle_ventas_productosUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<Detalle_ventas_productosCreateWithoutProductosInput, Detalle_ventas_productosUncheckedCreateWithoutProductosInput> | Detalle_ventas_productosCreateWithoutProductosInput[] | Detalle_ventas_productosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: Detalle_ventas_productosCreateOrConnectWithoutProductosInput | Detalle_ventas_productosCreateOrConnectWithoutProductosInput[]
    upsert?: Detalle_ventas_productosUpsertWithWhereUniqueWithoutProductosInput | Detalle_ventas_productosUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: Detalle_ventas_productosCreateManyProductosInputEnvelope
    set?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    disconnect?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    delete?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    connect?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    update?: Detalle_ventas_productosUpdateWithWhereUniqueWithoutProductosInput | Detalle_ventas_productosUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: Detalle_ventas_productosUpdateManyWithWhereWithoutProductosInput | Detalle_ventas_productosUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: Detalle_ventas_productosScalarWhereInput | Detalle_ventas_productosScalarWhereInput[]
  }

  export type Lote_productosUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<Lote_productosCreateWithoutProductosInput, Lote_productosUncheckedCreateWithoutProductosInput> | Lote_productosCreateWithoutProductosInput[] | Lote_productosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: Lote_productosCreateOrConnectWithoutProductosInput | Lote_productosCreateOrConnectWithoutProductosInput[]
    upsert?: Lote_productosUpsertWithWhereUniqueWithoutProductosInput | Lote_productosUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: Lote_productosCreateManyProductosInputEnvelope
    set?: Lote_productosWhereUniqueInput | Lote_productosWhereUniqueInput[]
    disconnect?: Lote_productosWhereUniqueInput | Lote_productosWhereUniqueInput[]
    delete?: Lote_productosWhereUniqueInput | Lote_productosWhereUniqueInput[]
    connect?: Lote_productosWhereUniqueInput | Lote_productosWhereUniqueInput[]
    update?: Lote_productosUpdateWithWhereUniqueWithoutProductosInput | Lote_productosUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: Lote_productosUpdateManyWithWhereWithoutProductosInput | Lote_productosUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: Lote_productosScalarWhereInput | Lote_productosScalarWhereInput[]
  }

  export type CargosCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<CargosCreateWithoutUsuariosInput, CargosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: CargosCreateOrConnectWithoutUsuariosInput
    connect?: CargosWhereUniqueInput
  }

  export type VentasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<VentasCreateWithoutUsuariosInput, VentasUncheckedCreateWithoutUsuariosInput> | VentasCreateWithoutUsuariosInput[] | VentasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: VentasCreateOrConnectWithoutUsuariosInput | VentasCreateOrConnectWithoutUsuariosInput[]
    createMany?: VentasCreateManyUsuariosInputEnvelope
    connect?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
  }

  export type VentasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<VentasCreateWithoutUsuariosInput, VentasUncheckedCreateWithoutUsuariosInput> | VentasCreateWithoutUsuariosInput[] | VentasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: VentasCreateOrConnectWithoutUsuariosInput | VentasCreateOrConnectWithoutUsuariosInput[]
    createMany?: VentasCreateManyUsuariosInputEnvelope
    connect?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
  }

  export type CargosUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<CargosCreateWithoutUsuariosInput, CargosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: CargosCreateOrConnectWithoutUsuariosInput
    upsert?: CargosUpsertWithoutUsuariosInput
    disconnect?: CargosWhereInput | boolean
    delete?: CargosWhereInput | boolean
    connect?: CargosWhereUniqueInput
    update?: XOR<XOR<CargosUpdateToOneWithWhereWithoutUsuariosInput, CargosUpdateWithoutUsuariosInput>, CargosUncheckedUpdateWithoutUsuariosInput>
  }

  export type VentasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<VentasCreateWithoutUsuariosInput, VentasUncheckedCreateWithoutUsuariosInput> | VentasCreateWithoutUsuariosInput[] | VentasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: VentasCreateOrConnectWithoutUsuariosInput | VentasCreateOrConnectWithoutUsuariosInput[]
    upsert?: VentasUpsertWithWhereUniqueWithoutUsuariosInput | VentasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: VentasCreateManyUsuariosInputEnvelope
    set?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    disconnect?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    delete?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    connect?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    update?: VentasUpdateWithWhereUniqueWithoutUsuariosInput | VentasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: VentasUpdateManyWithWhereWithoutUsuariosInput | VentasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: VentasScalarWhereInput | VentasScalarWhereInput[]
  }

  export type VentasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<VentasCreateWithoutUsuariosInput, VentasUncheckedCreateWithoutUsuariosInput> | VentasCreateWithoutUsuariosInput[] | VentasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: VentasCreateOrConnectWithoutUsuariosInput | VentasCreateOrConnectWithoutUsuariosInput[]
    upsert?: VentasUpsertWithWhereUniqueWithoutUsuariosInput | VentasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: VentasCreateManyUsuariosInputEnvelope
    set?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    disconnect?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    delete?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    connect?: VentasWhereUniqueInput | VentasWhereUniqueInput[]
    update?: VentasUpdateWithWhereUniqueWithoutUsuariosInput | VentasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: VentasUpdateManyWithWhereWithoutUsuariosInput | VentasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: VentasScalarWhereInput | VentasScalarWhereInput[]
  }

  export type Detalle_ventas_productosCreateNestedManyWithoutVentasInput = {
    create?: XOR<Detalle_ventas_productosCreateWithoutVentasInput, Detalle_ventas_productosUncheckedCreateWithoutVentasInput> | Detalle_ventas_productosCreateWithoutVentasInput[] | Detalle_ventas_productosUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: Detalle_ventas_productosCreateOrConnectWithoutVentasInput | Detalle_ventas_productosCreateOrConnectWithoutVentasInput[]
    createMany?: Detalle_ventas_productosCreateManyVentasInputEnvelope
    connect?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
  }

  export type Medio_pagosCreateNestedOneWithoutVentasInput = {
    create?: XOR<Medio_pagosCreateWithoutVentasInput, Medio_pagosUncheckedCreateWithoutVentasInput>
    connectOrCreate?: Medio_pagosCreateOrConnectWithoutVentasInput
    connect?: Medio_pagosWhereUniqueInput
  }

  export type UsuariosCreateNestedOneWithoutVentasInput = {
    create?: XOR<UsuariosCreateWithoutVentasInput, UsuariosUncheckedCreateWithoutVentasInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutVentasInput
    connect?: UsuariosWhereUniqueInput
  }

  export type Detalle_ventas_productosUncheckedCreateNestedManyWithoutVentasInput = {
    create?: XOR<Detalle_ventas_productosCreateWithoutVentasInput, Detalle_ventas_productosUncheckedCreateWithoutVentasInput> | Detalle_ventas_productosCreateWithoutVentasInput[] | Detalle_ventas_productosUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: Detalle_ventas_productosCreateOrConnectWithoutVentasInput | Detalle_ventas_productosCreateOrConnectWithoutVentasInput[]
    createMany?: Detalle_ventas_productosCreateManyVentasInputEnvelope
    connect?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
  }

  export type Detalle_ventas_productosUpdateManyWithoutVentasNestedInput = {
    create?: XOR<Detalle_ventas_productosCreateWithoutVentasInput, Detalle_ventas_productosUncheckedCreateWithoutVentasInput> | Detalle_ventas_productosCreateWithoutVentasInput[] | Detalle_ventas_productosUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: Detalle_ventas_productosCreateOrConnectWithoutVentasInput | Detalle_ventas_productosCreateOrConnectWithoutVentasInput[]
    upsert?: Detalle_ventas_productosUpsertWithWhereUniqueWithoutVentasInput | Detalle_ventas_productosUpsertWithWhereUniqueWithoutVentasInput[]
    createMany?: Detalle_ventas_productosCreateManyVentasInputEnvelope
    set?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    disconnect?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    delete?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    connect?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    update?: Detalle_ventas_productosUpdateWithWhereUniqueWithoutVentasInput | Detalle_ventas_productosUpdateWithWhereUniqueWithoutVentasInput[]
    updateMany?: Detalle_ventas_productosUpdateManyWithWhereWithoutVentasInput | Detalle_ventas_productosUpdateManyWithWhereWithoutVentasInput[]
    deleteMany?: Detalle_ventas_productosScalarWhereInput | Detalle_ventas_productosScalarWhereInput[]
  }

  export type Medio_pagosUpdateOneWithoutVentasNestedInput = {
    create?: XOR<Medio_pagosCreateWithoutVentasInput, Medio_pagosUncheckedCreateWithoutVentasInput>
    connectOrCreate?: Medio_pagosCreateOrConnectWithoutVentasInput
    upsert?: Medio_pagosUpsertWithoutVentasInput
    disconnect?: Medio_pagosWhereInput | boolean
    delete?: Medio_pagosWhereInput | boolean
    connect?: Medio_pagosWhereUniqueInput
    update?: XOR<XOR<Medio_pagosUpdateToOneWithWhereWithoutVentasInput, Medio_pagosUpdateWithoutVentasInput>, Medio_pagosUncheckedUpdateWithoutVentasInput>
  }

  export type UsuariosUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<UsuariosCreateWithoutVentasInput, UsuariosUncheckedCreateWithoutVentasInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutVentasInput
    upsert?: UsuariosUpsertWithoutVentasInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutVentasInput, UsuariosUpdateWithoutVentasInput>, UsuariosUncheckedUpdateWithoutVentasInput>
  }

  export type Detalle_ventas_productosUncheckedUpdateManyWithoutVentasNestedInput = {
    create?: XOR<Detalle_ventas_productosCreateWithoutVentasInput, Detalle_ventas_productosUncheckedCreateWithoutVentasInput> | Detalle_ventas_productosCreateWithoutVentasInput[] | Detalle_ventas_productosUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: Detalle_ventas_productosCreateOrConnectWithoutVentasInput | Detalle_ventas_productosCreateOrConnectWithoutVentasInput[]
    upsert?: Detalle_ventas_productosUpsertWithWhereUniqueWithoutVentasInput | Detalle_ventas_productosUpsertWithWhereUniqueWithoutVentasInput[]
    createMany?: Detalle_ventas_productosCreateManyVentasInputEnvelope
    set?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    disconnect?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    delete?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    connect?: Detalle_ventas_productosWhereUniqueInput | Detalle_ventas_productosWhereUniqueInput[]
    update?: Detalle_ventas_productosUpdateWithWhereUniqueWithoutVentasInput | Detalle_ventas_productosUpdateWithWhereUniqueWithoutVentasInput[]
    updateMany?: Detalle_ventas_productosUpdateManyWithWhereWithoutVentasInput | Detalle_ventas_productosUpdateManyWithWhereWithoutVentasInput[]
    deleteMany?: Detalle_ventas_productosScalarWhereInput | Detalle_ventas_productosScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsuariosCreateWithoutCargosInput = {
    Id_usuario: number
    Nombre?: string | null
    Apellido_1?: string | null
    Apellido_2?: string | null
    Contrasena?: string | null
    Ventas?: VentasCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutCargosInput = {
    Id_usuario: number
    Nombre?: string | null
    Apellido_1?: string | null
    Apellido_2?: string | null
    Contrasena?: string | null
    Ventas?: VentasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosCreateOrConnectWithoutCargosInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutCargosInput, UsuariosUncheckedCreateWithoutCargosInput>
  }

  export type UsuariosCreateManyCargosInputEnvelope = {
    data: UsuariosCreateManyCargosInput | UsuariosCreateManyCargosInput[]
    skipDuplicates?: boolean
  }

  export type UsuariosUpsertWithWhereUniqueWithoutCargosInput = {
    where: UsuariosWhereUniqueInput
    update: XOR<UsuariosUpdateWithoutCargosInput, UsuariosUncheckedUpdateWithoutCargosInput>
    create: XOR<UsuariosCreateWithoutCargosInput, UsuariosUncheckedCreateWithoutCargosInput>
  }

  export type UsuariosUpdateWithWhereUniqueWithoutCargosInput = {
    where: UsuariosWhereUniqueInput
    data: XOR<UsuariosUpdateWithoutCargosInput, UsuariosUncheckedUpdateWithoutCargosInput>
  }

  export type UsuariosUpdateManyWithWhereWithoutCargosInput = {
    where: UsuariosScalarWhereInput
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyWithoutCargosInput>
  }

  export type UsuariosScalarWhereInput = {
    AND?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
    OR?: UsuariosScalarWhereInput[]
    NOT?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
    Id_usuario?: IntFilter<"Usuarios"> | number
    Nombre?: StringNullableFilter<"Usuarios"> | string | null
    Apellido_1?: StringNullableFilter<"Usuarios"> | string | null
    Apellido_2?: StringNullableFilter<"Usuarios"> | string | null
    Contrasena?: StringNullableFilter<"Usuarios"> | string | null
    Cargo?: IntNullableFilter<"Usuarios"> | number | null
  }

  export type ProductosCreateWithoutDetalle_ventas_productosInput = {
    Id_producto: number
    Nombre?: string | null
    Precio_venta?: Decimal | DecimalJsLike | number | string | null
    Stock?: number | null
    Lote_productos?: Lote_productosCreateNestedManyWithoutProductosInput
  }

  export type ProductosUncheckedCreateWithoutDetalle_ventas_productosInput = {
    Id_producto: number
    Nombre?: string | null
    Precio_venta?: Decimal | DecimalJsLike | number | string | null
    Stock?: number | null
    Lote_productos?: Lote_productosUncheckedCreateNestedManyWithoutProductosInput
  }

  export type ProductosCreateOrConnectWithoutDetalle_ventas_productosInput = {
    where: ProductosWhereUniqueInput
    create: XOR<ProductosCreateWithoutDetalle_ventas_productosInput, ProductosUncheckedCreateWithoutDetalle_ventas_productosInput>
  }

  export type VentasCreateWithoutDetalle_ventas_productosInput = {
    Id_venta: number
    Total_venta?: Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: Date | string | null
    Utilidad_total?: Decimal | DecimalJsLike | number | string | null
    Medio_pagos?: Medio_pagosCreateNestedOneWithoutVentasInput
    Usuarios: UsuariosCreateNestedOneWithoutVentasInput
  }

  export type VentasUncheckedCreateWithoutDetalle_ventas_productosInput = {
    Id_venta: number
    Id_pago?: number | null
    Total_venta?: Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: Date | string | null
    Id_usuario: number
    Utilidad_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type VentasCreateOrConnectWithoutDetalle_ventas_productosInput = {
    where: VentasWhereUniqueInput
    create: XOR<VentasCreateWithoutDetalle_ventas_productosInput, VentasUncheckedCreateWithoutDetalle_ventas_productosInput>
  }

  export type ProductosUpsertWithoutDetalle_ventas_productosInput = {
    update: XOR<ProductosUpdateWithoutDetalle_ventas_productosInput, ProductosUncheckedUpdateWithoutDetalle_ventas_productosInput>
    create: XOR<ProductosCreateWithoutDetalle_ventas_productosInput, ProductosUncheckedCreateWithoutDetalle_ventas_productosInput>
    where?: ProductosWhereInput
  }

  export type ProductosUpdateToOneWithWhereWithoutDetalle_ventas_productosInput = {
    where?: ProductosWhereInput
    data: XOR<ProductosUpdateWithoutDetalle_ventas_productosInput, ProductosUncheckedUpdateWithoutDetalle_ventas_productosInput>
  }

  export type ProductosUpdateWithoutDetalle_ventas_productosInput = {
    Id_producto?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Precio_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
    Lote_productos?: Lote_productosUpdateManyWithoutProductosNestedInput
  }

  export type ProductosUncheckedUpdateWithoutDetalle_ventas_productosInput = {
    Id_producto?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Precio_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
    Lote_productos?: Lote_productosUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type VentasUpsertWithoutDetalle_ventas_productosInput = {
    update: XOR<VentasUpdateWithoutDetalle_ventas_productosInput, VentasUncheckedUpdateWithoutDetalle_ventas_productosInput>
    create: XOR<VentasCreateWithoutDetalle_ventas_productosInput, VentasUncheckedCreateWithoutDetalle_ventas_productosInput>
    where?: VentasWhereInput
  }

  export type VentasUpdateToOneWithWhereWithoutDetalle_ventas_productosInput = {
    where?: VentasWhereInput
    data: XOR<VentasUpdateWithoutDetalle_ventas_productosInput, VentasUncheckedUpdateWithoutDetalle_ventas_productosInput>
  }

  export type VentasUpdateWithoutDetalle_ventas_productosInput = {
    Id_venta?: IntFieldUpdateOperationsInput | number
    Total_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Utilidad_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Medio_pagos?: Medio_pagosUpdateOneWithoutVentasNestedInput
    Usuarios?: UsuariosUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentasUncheckedUpdateWithoutDetalle_ventas_productosInput = {
    Id_venta?: IntFieldUpdateOperationsInput | number
    Id_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Total_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_usuario?: IntFieldUpdateOperationsInput | number
    Utilidad_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ProductosCreateWithoutLote_productosInput = {
    Id_producto: number
    Nombre?: string | null
    Precio_venta?: Decimal | DecimalJsLike | number | string | null
    Stock?: number | null
    Detalle_ventas_productos?: Detalle_ventas_productosCreateNestedManyWithoutProductosInput
  }

  export type ProductosUncheckedCreateWithoutLote_productosInput = {
    Id_producto: number
    Nombre?: string | null
    Precio_venta?: Decimal | DecimalJsLike | number | string | null
    Stock?: number | null
    Detalle_ventas_productos?: Detalle_ventas_productosUncheckedCreateNestedManyWithoutProductosInput
  }

  export type ProductosCreateOrConnectWithoutLote_productosInput = {
    where: ProductosWhereUniqueInput
    create: XOR<ProductosCreateWithoutLote_productosInput, ProductosUncheckedCreateWithoutLote_productosInput>
  }

  export type ProductosUpsertWithoutLote_productosInput = {
    update: XOR<ProductosUpdateWithoutLote_productosInput, ProductosUncheckedUpdateWithoutLote_productosInput>
    create: XOR<ProductosCreateWithoutLote_productosInput, ProductosUncheckedCreateWithoutLote_productosInput>
    where?: ProductosWhereInput
  }

  export type ProductosUpdateToOneWithWhereWithoutLote_productosInput = {
    where?: ProductosWhereInput
    data: XOR<ProductosUpdateWithoutLote_productosInput, ProductosUncheckedUpdateWithoutLote_productosInput>
  }

  export type ProductosUpdateWithoutLote_productosInput = {
    Id_producto?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Precio_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
    Detalle_ventas_productos?: Detalle_ventas_productosUpdateManyWithoutProductosNestedInput
  }

  export type ProductosUncheckedUpdateWithoutLote_productosInput = {
    Id_producto?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Precio_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
    Detalle_ventas_productos?: Detalle_ventas_productosUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type VentasCreateWithoutMedio_pagosInput = {
    Id_venta: number
    Total_venta?: Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: Date | string | null
    Utilidad_total?: Decimal | DecimalJsLike | number | string | null
    Detalle_ventas_productos?: Detalle_ventas_productosCreateNestedManyWithoutVentasInput
    Usuarios: UsuariosCreateNestedOneWithoutVentasInput
  }

  export type VentasUncheckedCreateWithoutMedio_pagosInput = {
    Id_venta: number
    Total_venta?: Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: Date | string | null
    Id_usuario: number
    Utilidad_total?: Decimal | DecimalJsLike | number | string | null
    Detalle_ventas_productos?: Detalle_ventas_productosUncheckedCreateNestedManyWithoutVentasInput
  }

  export type VentasCreateOrConnectWithoutMedio_pagosInput = {
    where: VentasWhereUniqueInput
    create: XOR<VentasCreateWithoutMedio_pagosInput, VentasUncheckedCreateWithoutMedio_pagosInput>
  }

  export type VentasCreateManyMedio_pagosInputEnvelope = {
    data: VentasCreateManyMedio_pagosInput | VentasCreateManyMedio_pagosInput[]
    skipDuplicates?: boolean
  }

  export type VentasUpsertWithWhereUniqueWithoutMedio_pagosInput = {
    where: VentasWhereUniqueInput
    update: XOR<VentasUpdateWithoutMedio_pagosInput, VentasUncheckedUpdateWithoutMedio_pagosInput>
    create: XOR<VentasCreateWithoutMedio_pagosInput, VentasUncheckedCreateWithoutMedio_pagosInput>
  }

  export type VentasUpdateWithWhereUniqueWithoutMedio_pagosInput = {
    where: VentasWhereUniqueInput
    data: XOR<VentasUpdateWithoutMedio_pagosInput, VentasUncheckedUpdateWithoutMedio_pagosInput>
  }

  export type VentasUpdateManyWithWhereWithoutMedio_pagosInput = {
    where: VentasScalarWhereInput
    data: XOR<VentasUpdateManyMutationInput, VentasUncheckedUpdateManyWithoutMedio_pagosInput>
  }

  export type VentasScalarWhereInput = {
    AND?: VentasScalarWhereInput | VentasScalarWhereInput[]
    OR?: VentasScalarWhereInput[]
    NOT?: VentasScalarWhereInput | VentasScalarWhereInput[]
    Id_venta?: IntFilter<"Ventas"> | number
    Id_pago?: IntNullableFilter<"Ventas"> | number | null
    Total_venta?: DecimalNullableFilter<"Ventas"> | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: DateTimeNullableFilter<"Ventas"> | Date | string | null
    Id_usuario?: IntFilter<"Ventas"> | number
    Utilidad_total?: DecimalNullableFilter<"Ventas"> | Decimal | DecimalJsLike | number | string | null
  }

  export type Detalle_ventas_productosCreateWithoutProductosInput = {
    Cantidad?: number | null
    Precio_total?: Decimal | DecimalJsLike | number | string | null
    Ventas: VentasCreateNestedOneWithoutDetalle_ventas_productosInput
  }

  export type Detalle_ventas_productosUncheckedCreateWithoutProductosInput = {
    Id_ventas: number
    Cantidad?: number | null
    Precio_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type Detalle_ventas_productosCreateOrConnectWithoutProductosInput = {
    where: Detalle_ventas_productosWhereUniqueInput
    create: XOR<Detalle_ventas_productosCreateWithoutProductosInput, Detalle_ventas_productosUncheckedCreateWithoutProductosInput>
  }

  export type Detalle_ventas_productosCreateManyProductosInputEnvelope = {
    data: Detalle_ventas_productosCreateManyProductosInput | Detalle_ventas_productosCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type Lote_productosCreateWithoutProductosInput = {
    Precio_compra?: Decimal | DecimalJsLike | number | string | null
    Cantidad?: number | null
    Stock?: number | null
    Fecha?: Date | string | null
  }

  export type Lote_productosUncheckedCreateWithoutProductosInput = {
    Id_lote?: number
    Precio_compra?: Decimal | DecimalJsLike | number | string | null
    Cantidad?: number | null
    Stock?: number | null
    Fecha?: Date | string | null
  }

  export type Lote_productosCreateOrConnectWithoutProductosInput = {
    where: Lote_productosWhereUniqueInput
    create: XOR<Lote_productosCreateWithoutProductosInput, Lote_productosUncheckedCreateWithoutProductosInput>
  }

  export type Lote_productosCreateManyProductosInputEnvelope = {
    data: Lote_productosCreateManyProductosInput | Lote_productosCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type Detalle_ventas_productosUpsertWithWhereUniqueWithoutProductosInput = {
    where: Detalle_ventas_productosWhereUniqueInput
    update: XOR<Detalle_ventas_productosUpdateWithoutProductosInput, Detalle_ventas_productosUncheckedUpdateWithoutProductosInput>
    create: XOR<Detalle_ventas_productosCreateWithoutProductosInput, Detalle_ventas_productosUncheckedCreateWithoutProductosInput>
  }

  export type Detalle_ventas_productosUpdateWithWhereUniqueWithoutProductosInput = {
    where: Detalle_ventas_productosWhereUniqueInput
    data: XOR<Detalle_ventas_productosUpdateWithoutProductosInput, Detalle_ventas_productosUncheckedUpdateWithoutProductosInput>
  }

  export type Detalle_ventas_productosUpdateManyWithWhereWithoutProductosInput = {
    where: Detalle_ventas_productosScalarWhereInput
    data: XOR<Detalle_ventas_productosUpdateManyMutationInput, Detalle_ventas_productosUncheckedUpdateManyWithoutProductosInput>
  }

  export type Detalle_ventas_productosScalarWhereInput = {
    AND?: Detalle_ventas_productosScalarWhereInput | Detalle_ventas_productosScalarWhereInput[]
    OR?: Detalle_ventas_productosScalarWhereInput[]
    NOT?: Detalle_ventas_productosScalarWhereInput | Detalle_ventas_productosScalarWhereInput[]
    Id_ventas?: IntFilter<"Detalle_ventas_productos"> | number
    Id_producto?: IntFilter<"Detalle_ventas_productos"> | number
    Cantidad?: IntNullableFilter<"Detalle_ventas_productos"> | number | null
    Precio_total?: DecimalNullableFilter<"Detalle_ventas_productos"> | Decimal | DecimalJsLike | number | string | null
  }

  export type Lote_productosUpsertWithWhereUniqueWithoutProductosInput = {
    where: Lote_productosWhereUniqueInput
    update: XOR<Lote_productosUpdateWithoutProductosInput, Lote_productosUncheckedUpdateWithoutProductosInput>
    create: XOR<Lote_productosCreateWithoutProductosInput, Lote_productosUncheckedCreateWithoutProductosInput>
  }

  export type Lote_productosUpdateWithWhereUniqueWithoutProductosInput = {
    where: Lote_productosWhereUniqueInput
    data: XOR<Lote_productosUpdateWithoutProductosInput, Lote_productosUncheckedUpdateWithoutProductosInput>
  }

  export type Lote_productosUpdateManyWithWhereWithoutProductosInput = {
    where: Lote_productosScalarWhereInput
    data: XOR<Lote_productosUpdateManyMutationInput, Lote_productosUncheckedUpdateManyWithoutProductosInput>
  }

  export type Lote_productosScalarWhereInput = {
    AND?: Lote_productosScalarWhereInput | Lote_productosScalarWhereInput[]
    OR?: Lote_productosScalarWhereInput[]
    NOT?: Lote_productosScalarWhereInput | Lote_productosScalarWhereInput[]
    Id_lote?: IntFilter<"Lote_productos"> | number
    Id_producto?: IntNullableFilter<"Lote_productos"> | number | null
    Precio_compra?: DecimalNullableFilter<"Lote_productos"> | Decimal | DecimalJsLike | number | string | null
    Cantidad?: IntNullableFilter<"Lote_productos"> | number | null
    Stock?: IntNullableFilter<"Lote_productos"> | number | null
    Fecha?: DateTimeNullableFilter<"Lote_productos"> | Date | string | null
  }

  export type CargosCreateWithoutUsuariosInput = {
    Id_cargo: number
    Nombre_cargo?: string | null
  }

  export type CargosUncheckedCreateWithoutUsuariosInput = {
    Id_cargo: number
    Nombre_cargo?: string | null
  }

  export type CargosCreateOrConnectWithoutUsuariosInput = {
    where: CargosWhereUniqueInput
    create: XOR<CargosCreateWithoutUsuariosInput, CargosUncheckedCreateWithoutUsuariosInput>
  }

  export type VentasCreateWithoutUsuariosInput = {
    Id_venta: number
    Total_venta?: Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: Date | string | null
    Utilidad_total?: Decimal | DecimalJsLike | number | string | null
    Detalle_ventas_productos?: Detalle_ventas_productosCreateNestedManyWithoutVentasInput
    Medio_pagos?: Medio_pagosCreateNestedOneWithoutVentasInput
  }

  export type VentasUncheckedCreateWithoutUsuariosInput = {
    Id_venta: number
    Id_pago?: number | null
    Total_venta?: Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: Date | string | null
    Utilidad_total?: Decimal | DecimalJsLike | number | string | null
    Detalle_ventas_productos?: Detalle_ventas_productosUncheckedCreateNestedManyWithoutVentasInput
  }

  export type VentasCreateOrConnectWithoutUsuariosInput = {
    where: VentasWhereUniqueInput
    create: XOR<VentasCreateWithoutUsuariosInput, VentasUncheckedCreateWithoutUsuariosInput>
  }

  export type VentasCreateManyUsuariosInputEnvelope = {
    data: VentasCreateManyUsuariosInput | VentasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type CargosUpsertWithoutUsuariosInput = {
    update: XOR<CargosUpdateWithoutUsuariosInput, CargosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<CargosCreateWithoutUsuariosInput, CargosUncheckedCreateWithoutUsuariosInput>
    where?: CargosWhereInput
  }

  export type CargosUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: CargosWhereInput
    data: XOR<CargosUpdateWithoutUsuariosInput, CargosUncheckedUpdateWithoutUsuariosInput>
  }

  export type CargosUpdateWithoutUsuariosInput = {
    Id_cargo?: IntFieldUpdateOperationsInput | number
    Nombre_cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CargosUncheckedUpdateWithoutUsuariosInput = {
    Id_cargo?: IntFieldUpdateOperationsInput | number
    Nombre_cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VentasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: VentasWhereUniqueInput
    update: XOR<VentasUpdateWithoutUsuariosInput, VentasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<VentasCreateWithoutUsuariosInput, VentasUncheckedCreateWithoutUsuariosInput>
  }

  export type VentasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: VentasWhereUniqueInput
    data: XOR<VentasUpdateWithoutUsuariosInput, VentasUncheckedUpdateWithoutUsuariosInput>
  }

  export type VentasUpdateManyWithWhereWithoutUsuariosInput = {
    where: VentasScalarWhereInput
    data: XOR<VentasUpdateManyMutationInput, VentasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type Detalle_ventas_productosCreateWithoutVentasInput = {
    Cantidad?: number | null
    Precio_total?: Decimal | DecimalJsLike | number | string | null
    Productos: ProductosCreateNestedOneWithoutDetalle_ventas_productosInput
  }

  export type Detalle_ventas_productosUncheckedCreateWithoutVentasInput = {
    Id_producto: number
    Cantidad?: number | null
    Precio_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type Detalle_ventas_productosCreateOrConnectWithoutVentasInput = {
    where: Detalle_ventas_productosWhereUniqueInput
    create: XOR<Detalle_ventas_productosCreateWithoutVentasInput, Detalle_ventas_productosUncheckedCreateWithoutVentasInput>
  }

  export type Detalle_ventas_productosCreateManyVentasInputEnvelope = {
    data: Detalle_ventas_productosCreateManyVentasInput | Detalle_ventas_productosCreateManyVentasInput[]
    skipDuplicates?: boolean
  }

  export type Medio_pagosCreateWithoutVentasInput = {
    Nombre_pago?: string | null
  }

  export type Medio_pagosUncheckedCreateWithoutVentasInput = {
    Id_pago?: number
    Nombre_pago?: string | null
  }

  export type Medio_pagosCreateOrConnectWithoutVentasInput = {
    where: Medio_pagosWhereUniqueInput
    create: XOR<Medio_pagosCreateWithoutVentasInput, Medio_pagosUncheckedCreateWithoutVentasInput>
  }

  export type UsuariosCreateWithoutVentasInput = {
    Id_usuario: number
    Nombre?: string | null
    Apellido_1?: string | null
    Apellido_2?: string | null
    Contrasena?: string | null
    Cargos?: CargosCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutVentasInput = {
    Id_usuario: number
    Nombre?: string | null
    Apellido_1?: string | null
    Apellido_2?: string | null
    Contrasena?: string | null
    Cargo?: number | null
  }

  export type UsuariosCreateOrConnectWithoutVentasInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutVentasInput, UsuariosUncheckedCreateWithoutVentasInput>
  }

  export type Detalle_ventas_productosUpsertWithWhereUniqueWithoutVentasInput = {
    where: Detalle_ventas_productosWhereUniqueInput
    update: XOR<Detalle_ventas_productosUpdateWithoutVentasInput, Detalle_ventas_productosUncheckedUpdateWithoutVentasInput>
    create: XOR<Detalle_ventas_productosCreateWithoutVentasInput, Detalle_ventas_productosUncheckedCreateWithoutVentasInput>
  }

  export type Detalle_ventas_productosUpdateWithWhereUniqueWithoutVentasInput = {
    where: Detalle_ventas_productosWhereUniqueInput
    data: XOR<Detalle_ventas_productosUpdateWithoutVentasInput, Detalle_ventas_productosUncheckedUpdateWithoutVentasInput>
  }

  export type Detalle_ventas_productosUpdateManyWithWhereWithoutVentasInput = {
    where: Detalle_ventas_productosScalarWhereInput
    data: XOR<Detalle_ventas_productosUpdateManyMutationInput, Detalle_ventas_productosUncheckedUpdateManyWithoutVentasInput>
  }

  export type Medio_pagosUpsertWithoutVentasInput = {
    update: XOR<Medio_pagosUpdateWithoutVentasInput, Medio_pagosUncheckedUpdateWithoutVentasInput>
    create: XOR<Medio_pagosCreateWithoutVentasInput, Medio_pagosUncheckedCreateWithoutVentasInput>
    where?: Medio_pagosWhereInput
  }

  export type Medio_pagosUpdateToOneWithWhereWithoutVentasInput = {
    where?: Medio_pagosWhereInput
    data: XOR<Medio_pagosUpdateWithoutVentasInput, Medio_pagosUncheckedUpdateWithoutVentasInput>
  }

  export type Medio_pagosUpdateWithoutVentasInput = {
    Nombre_pago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Medio_pagosUncheckedUpdateWithoutVentasInput = {
    Id_pago?: IntFieldUpdateOperationsInput | number
    Nombre_pago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosUpsertWithoutVentasInput = {
    update: XOR<UsuariosUpdateWithoutVentasInput, UsuariosUncheckedUpdateWithoutVentasInput>
    create: XOR<UsuariosCreateWithoutVentasInput, UsuariosUncheckedCreateWithoutVentasInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutVentasInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutVentasInput, UsuariosUncheckedUpdateWithoutVentasInput>
  }

  export type UsuariosUpdateWithoutVentasInput = {
    Id_usuario?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_1?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_2?: NullableStringFieldUpdateOperationsInput | string | null
    Contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    Cargos?: CargosUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutVentasInput = {
    Id_usuario?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_1?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_2?: NullableStringFieldUpdateOperationsInput | string | null
    Contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    Cargo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuariosCreateManyCargosInput = {
    Id_usuario: number
    Nombre?: string | null
    Apellido_1?: string | null
    Apellido_2?: string | null
    Contrasena?: string | null
  }

  export type UsuariosUpdateWithoutCargosInput = {
    Id_usuario?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_1?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_2?: NullableStringFieldUpdateOperationsInput | string | null
    Contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    Ventas?: VentasUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutCargosInput = {
    Id_usuario?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_1?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_2?: NullableStringFieldUpdateOperationsInput | string | null
    Contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    Ventas?: VentasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateManyWithoutCargosInput = {
    Id_usuario?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_1?: NullableStringFieldUpdateOperationsInput | string | null
    Apellido_2?: NullableStringFieldUpdateOperationsInput | string | null
    Contrasena?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VentasCreateManyMedio_pagosInput = {
    Id_venta: number
    Total_venta?: Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: Date | string | null
    Id_usuario: number
    Utilidad_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type VentasUpdateWithoutMedio_pagosInput = {
    Id_venta?: IntFieldUpdateOperationsInput | number
    Total_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Utilidad_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Detalle_ventas_productos?: Detalle_ventas_productosUpdateManyWithoutVentasNestedInput
    Usuarios?: UsuariosUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentasUncheckedUpdateWithoutMedio_pagosInput = {
    Id_venta?: IntFieldUpdateOperationsInput | number
    Total_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_usuario?: IntFieldUpdateOperationsInput | number
    Utilidad_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Detalle_ventas_productos?: Detalle_ventas_productosUncheckedUpdateManyWithoutVentasNestedInput
  }

  export type VentasUncheckedUpdateManyWithoutMedio_pagosInput = {
    Id_venta?: IntFieldUpdateOperationsInput | number
    Total_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_usuario?: IntFieldUpdateOperationsInput | number
    Utilidad_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type Detalle_ventas_productosCreateManyProductosInput = {
    Id_ventas: number
    Cantidad?: number | null
    Precio_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type Lote_productosCreateManyProductosInput = {
    Id_lote?: number
    Precio_compra?: Decimal | DecimalJsLike | number | string | null
    Cantidad?: number | null
    Stock?: number | null
    Fecha?: Date | string | null
  }

  export type Detalle_ventas_productosUpdateWithoutProductosInput = {
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Precio_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Ventas?: VentasUpdateOneRequiredWithoutDetalle_ventas_productosNestedInput
  }

  export type Detalle_ventas_productosUncheckedUpdateWithoutProductosInput = {
    Id_ventas?: IntFieldUpdateOperationsInput | number
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Precio_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type Detalle_ventas_productosUncheckedUpdateManyWithoutProductosInput = {
    Id_ventas?: IntFieldUpdateOperationsInput | number
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Precio_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type Lote_productosUpdateWithoutProductosInput = {
    Precio_compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Lote_productosUncheckedUpdateWithoutProductosInput = {
    Id_lote?: IntFieldUpdateOperationsInput | number
    Precio_compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Lote_productosUncheckedUpdateManyWithoutProductosInput = {
    Id_lote?: IntFieldUpdateOperationsInput | number
    Precio_compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Stock?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VentasCreateManyUsuariosInput = {
    Id_venta: number
    Id_pago?: number | null
    Total_venta?: Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: Date | string | null
    Utilidad_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type VentasUpdateWithoutUsuariosInput = {
    Id_venta?: IntFieldUpdateOperationsInput | number
    Total_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Utilidad_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Detalle_ventas_productos?: Detalle_ventas_productosUpdateManyWithoutVentasNestedInput
    Medio_pagos?: Medio_pagosUpdateOneWithoutVentasNestedInput
  }

  export type VentasUncheckedUpdateWithoutUsuariosInput = {
    Id_venta?: IntFieldUpdateOperationsInput | number
    Id_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Total_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Utilidad_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Detalle_ventas_productos?: Detalle_ventas_productosUncheckedUpdateManyWithoutVentasNestedInput
  }

  export type VentasUncheckedUpdateManyWithoutUsuariosInput = {
    Id_venta?: IntFieldUpdateOperationsInput | number
    Id_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Total_venta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Fecha_venta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Utilidad_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type Detalle_ventas_productosCreateManyVentasInput = {
    Id_producto: number
    Cantidad?: number | null
    Precio_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type Detalle_ventas_productosUpdateWithoutVentasInput = {
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Precio_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Productos?: ProductosUpdateOneRequiredWithoutDetalle_ventas_productosNestedInput
  }

  export type Detalle_ventas_productosUncheckedUpdateWithoutVentasInput = {
    Id_producto?: IntFieldUpdateOperationsInput | number
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Precio_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type Detalle_ventas_productosUncheckedUpdateManyWithoutVentasInput = {
    Id_producto?: IntFieldUpdateOperationsInput | number
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Precio_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}