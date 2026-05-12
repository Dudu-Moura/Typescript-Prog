
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
 * Model Livro
 * 
 */
export type Livro = $Result.DefaultSelection<Prisma.$LivroPayload>
/**
 * Model Emprestimo
 * 
 */
export type Emprestimo = $Result.DefaultSelection<Prisma.$EmprestimoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Livros
 * const livros = await prisma.livro.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Livros
   * const livros = await prisma.livro.findMany()
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
   * `prisma.livro`: Exposes CRUD operations for the **Livro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livros
    * const livros = await prisma.livro.findMany()
    * ```
    */
  get livro(): Prisma.LivroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emprestimo`: Exposes CRUD operations for the **Emprestimo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emprestimos
    * const emprestimos = await prisma.emprestimo.findMany()
    * ```
    */
  get emprestimo(): Prisma.EmprestimoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Livro: 'Livro',
    Emprestimo: 'Emprestimo',
    Usuario: 'Usuario'
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
      modelProps: "livro" | "emprestimo" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Livro: {
        payload: Prisma.$LivroPayload<ExtArgs>
        fields: Prisma.LivroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findFirst: {
            args: Prisma.LivroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findMany: {
            args: Prisma.LivroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          create: {
            args: Prisma.LivroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          createMany: {
            args: Prisma.LivroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LivroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          delete: {
            args: Prisma.LivroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          update: {
            args: Prisma.LivroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          deleteMany: {
            args: Prisma.LivroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LivroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          upsert: {
            args: Prisma.LivroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          aggregate: {
            args: Prisma.LivroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivro>
          }
          groupBy: {
            args: Prisma.LivroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivroGroupByOutputType>[]
          }
          count: {
            args: Prisma.LivroCountArgs<ExtArgs>
            result: $Utils.Optional<LivroCountAggregateOutputType> | number
          }
        }
      }
      Emprestimo: {
        payload: Prisma.$EmprestimoPayload<ExtArgs>
        fields: Prisma.EmprestimoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmprestimoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmprestimoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          findFirst: {
            args: Prisma.EmprestimoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmprestimoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          findMany: {
            args: Prisma.EmprestimoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>[]
          }
          create: {
            args: Prisma.EmprestimoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          createMany: {
            args: Prisma.EmprestimoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmprestimoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>[]
          }
          delete: {
            args: Prisma.EmprestimoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          update: {
            args: Prisma.EmprestimoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          deleteMany: {
            args: Prisma.EmprestimoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmprestimoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmprestimoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>[]
          }
          upsert: {
            args: Prisma.EmprestimoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          aggregate: {
            args: Prisma.EmprestimoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmprestimo>
          }
          groupBy: {
            args: Prisma.EmprestimoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmprestimoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmprestimoCountArgs<ExtArgs>
            result: $Utils.Optional<EmprestimoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    livro?: LivroOmit
    emprestimo?: EmprestimoOmit
    usuario?: UsuarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type LivroCountOutputType
   */

  export type LivroCountOutputType = {
    emprestimos: number
  }

  export type LivroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | LivroCountOutputTypeCountEmprestimosArgs
  }

  // Custom InputTypes
  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroCountOutputType
     */
    select?: LivroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestimoWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    emprestimos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | UsuarioCountOutputTypeCountEmprestimosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestimoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Livro
   */

  export type AggregateLivro = {
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  export type LivroAvgAggregateOutputType = {
    id: number | null
  }

  export type LivroSumAggregateOutputType = {
    id: number | null
  }

  export type LivroMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    autor: string | null
    isbn: string | null
    disponivel: boolean | null
    ativo: boolean | null
    deletadoEm: Date | null
    criadoEm: Date | null
  }

  export type LivroMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    autor: string | null
    isbn: string | null
    disponivel: boolean | null
    ativo: boolean | null
    deletadoEm: Date | null
    criadoEm: Date | null
  }

  export type LivroCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    autor: number
    isbn: number
    disponivel: number
    ativo: number
    deletadoEm: number
    criadoEm: number
    _all: number
  }


  export type LivroAvgAggregateInputType = {
    id?: true
  }

  export type LivroSumAggregateInputType = {
    id?: true
  }

  export type LivroMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    autor?: true
    isbn?: true
    disponivel?: true
    ativo?: true
    deletadoEm?: true
    criadoEm?: true
  }

  export type LivroMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    autor?: true
    isbn?: true
    disponivel?: true
    ativo?: true
    deletadoEm?: true
    criadoEm?: true
  }

  export type LivroCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    autor?: true
    isbn?: true
    disponivel?: true
    ativo?: true
    deletadoEm?: true
    criadoEm?: true
    _all?: true
  }

  export type LivroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livro to aggregate.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Livros
    **/
    _count?: true | LivroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivroMaxAggregateInputType
  }

  export type GetLivroAggregateType<T extends LivroAggregateArgs> = {
        [P in keyof T & keyof AggregateLivro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivro[P]>
      : GetScalarType<T[P], AggregateLivro[P]>
  }




  export type LivroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroWhereInput
    orderBy?: LivroOrderByWithAggregationInput | LivroOrderByWithAggregationInput[]
    by: LivroScalarFieldEnum[] | LivroScalarFieldEnum
    having?: LivroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivroCountAggregateInputType | true
    _avg?: LivroAvgAggregateInputType
    _sum?: LivroSumAggregateInputType
    _min?: LivroMinAggregateInputType
    _max?: LivroMaxAggregateInputType
  }

  export type LivroGroupByOutputType = {
    id: number
    titulo: string
    descricao: string
    autor: string
    isbn: string
    disponivel: boolean
    ativo: boolean
    deletadoEm: Date | null
    criadoEm: Date
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  type GetLivroGroupByPayload<T extends LivroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivroGroupByOutputType[P]>
            : GetScalarType<T[P], LivroGroupByOutputType[P]>
        }
      >
    >


  export type LivroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    autor?: boolean
    isbn?: boolean
    disponivel?: boolean
    ativo?: boolean
    deletadoEm?: boolean
    criadoEm?: boolean
    emprestimos?: boolean | Livro$emprestimosArgs<ExtArgs>
    _count?: boolean | LivroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    autor?: boolean
    isbn?: boolean
    disponivel?: boolean
    ativo?: boolean
    deletadoEm?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    autor?: boolean
    isbn?: boolean
    disponivel?: boolean
    ativo?: boolean
    deletadoEm?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    autor?: boolean
    isbn?: boolean
    disponivel?: boolean
    ativo?: boolean
    deletadoEm?: boolean
    criadoEm?: boolean
  }

  export type LivroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "autor" | "isbn" | "disponivel" | "ativo" | "deletadoEm" | "criadoEm", ExtArgs["result"]["livro"]>
  export type LivroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | Livro$emprestimosArgs<ExtArgs>
    _count?: boolean | LivroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LivroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LivroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LivroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Livro"
    objects: {
      emprestimos: Prisma.$EmprestimoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string
      autor: string
      isbn: string
      disponivel: boolean
      ativo: boolean
      deletadoEm: Date | null
      criadoEm: Date
    }, ExtArgs["result"]["livro"]>
    composites: {}
  }

  type LivroGetPayload<S extends boolean | null | undefined | LivroDefaultArgs> = $Result.GetResult<Prisma.$LivroPayload, S>

  type LivroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LivroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivroCountAggregateInputType | true
    }

  export interface LivroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Livro'], meta: { name: 'Livro' } }
    /**
     * Find zero or one Livro that matches the filter.
     * @param {LivroFindUniqueArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivroFindUniqueArgs>(args: SelectSubset<T, LivroFindUniqueArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LivroFindUniqueOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivroFindUniqueOrThrowArgs>(args: SelectSubset<T, LivroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivroFindFirstArgs>(args?: SelectSubset<T, LivroFindFirstArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivroFindFirstOrThrowArgs>(args?: SelectSubset<T, LivroFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livros
     * const livros = await prisma.livro.findMany()
     * 
     * // Get first 10 Livros
     * const livros = await prisma.livro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const livroWithIdOnly = await prisma.livro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LivroFindManyArgs>(args?: SelectSubset<T, LivroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livro.
     * @param {LivroCreateArgs} args - Arguments to create a Livro.
     * @example
     * // Create one Livro
     * const Livro = await prisma.livro.create({
     *   data: {
     *     // ... data to create a Livro
     *   }
     * })
     * 
     */
    create<T extends LivroCreateArgs>(args: SelectSubset<T, LivroCreateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livros.
     * @param {LivroCreateManyArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivroCreateManyArgs>(args?: SelectSubset<T, LivroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Livros and returns the data saved in the database.
     * @param {LivroCreateManyAndReturnArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Livros and only return the `id`
     * const livroWithIdOnly = await prisma.livro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LivroCreateManyAndReturnArgs>(args?: SelectSubset<T, LivroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Livro.
     * @param {LivroDeleteArgs} args - Arguments to delete one Livro.
     * @example
     * // Delete one Livro
     * const Livro = await prisma.livro.delete({
     *   where: {
     *     // ... filter to delete one Livro
     *   }
     * })
     * 
     */
    delete<T extends LivroDeleteArgs>(args: SelectSubset<T, LivroDeleteArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livro.
     * @param {LivroUpdateArgs} args - Arguments to update one Livro.
     * @example
     * // Update one Livro
     * const livro = await prisma.livro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LivroUpdateArgs>(args: SelectSubset<T, LivroUpdateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livros.
     * @param {LivroDeleteManyArgs} args - Arguments to filter Livros to delete.
     * @example
     * // Delete a few Livros
     * const { count } = await prisma.livro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivroDeleteManyArgs>(args?: SelectSubset<T, LivroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LivroUpdateManyArgs>(args: SelectSubset<T, LivroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros and returns the data updated in the database.
     * @param {LivroUpdateManyAndReturnArgs} args - Arguments to update many Livros.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Livros and only return the `id`
     * const livroWithIdOnly = await prisma.livro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LivroUpdateManyAndReturnArgs>(args: SelectSubset<T, LivroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Livro.
     * @param {LivroUpsertArgs} args - Arguments to update or create a Livro.
     * @example
     * // Update or create a Livro
     * const livro = await prisma.livro.upsert({
     *   create: {
     *     // ... data to create a Livro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livro we want to update
     *   }
     * })
     */
    upsert<T extends LivroUpsertArgs>(args: SelectSubset<T, LivroUpsertArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroCountArgs} args - Arguments to filter Livros to count.
     * @example
     * // Count the number of Livros
     * const count = await prisma.livro.count({
     *   where: {
     *     // ... the filter for the Livros we want to count
     *   }
     * })
    **/
    count<T extends LivroCountArgs>(
      args?: Subset<T, LivroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LivroAggregateArgs>(args: Subset<T, LivroAggregateArgs>): Prisma.PrismaPromise<GetLivroAggregateType<T>>

    /**
     * Group by Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroGroupByArgs} args - Group by arguments.
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
      T extends LivroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivroGroupByArgs['orderBy'] }
        : { orderBy?: LivroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LivroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Livro model
   */
  readonly fields: LivroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Livro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emprestimos<T extends Livro$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, Livro$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Livro model
   */
  interface LivroFieldRefs {
    readonly id: FieldRef<"Livro", 'Int'>
    readonly titulo: FieldRef<"Livro", 'String'>
    readonly descricao: FieldRef<"Livro", 'String'>
    readonly autor: FieldRef<"Livro", 'String'>
    readonly isbn: FieldRef<"Livro", 'String'>
    readonly disponivel: FieldRef<"Livro", 'Boolean'>
    readonly ativo: FieldRef<"Livro", 'Boolean'>
    readonly deletadoEm: FieldRef<"Livro", 'DateTime'>
    readonly criadoEm: FieldRef<"Livro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Livro findUnique
   */
  export type LivroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findUniqueOrThrow
   */
  export type LivroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findFirst
   */
  export type LivroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findFirstOrThrow
   */
  export type LivroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findMany
   */
  export type LivroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livros to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro create
   */
  export type LivroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The data needed to create a Livro.
     */
    data: XOR<LivroCreateInput, LivroUncheckedCreateInput>
  }

  /**
   * Livro createMany
   */
  export type LivroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livro createManyAndReturn
   */
  export type LivroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livro update
   */
  export type LivroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The data needed to update a Livro.
     */
    data: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
    /**
     * Choose, which Livro to update.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro updateMany
   */
  export type LivroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livro updateManyAndReturn
   */
  export type LivroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livro upsert
   */
  export type LivroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The filter to search for the Livro to update in case it exists.
     */
    where: LivroWhereUniqueInput
    /**
     * In case the Livro found by the `where` argument doesn't exist, create a new Livro with this data.
     */
    create: XOR<LivroCreateInput, LivroUncheckedCreateInput>
    /**
     * In case the Livro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
  }

  /**
   * Livro delete
   */
  export type LivroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter which Livro to delete.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro deleteMany
   */
  export type LivroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livros to delete
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to delete.
     */
    limit?: number
  }

  /**
   * Livro.emprestimos
   */
  export type Livro$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    where?: EmprestimoWhereInput
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    cursor?: EmprestimoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Livro without action
   */
  export type LivroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
  }


  /**
   * Model Emprestimo
   */

  export type AggregateEmprestimo = {
    _count: EmprestimoCountAggregateOutputType | null
    _avg: EmprestimoAvgAggregateOutputType | null
    _sum: EmprestimoSumAggregateOutputType | null
    _min: EmprestimoMinAggregateOutputType | null
    _max: EmprestimoMaxAggregateOutputType | null
  }

  export type EmprestimoAvgAggregateOutputType = {
    id: number | null
    livroId: number | null
    usuarioId: number | null
  }

  export type EmprestimoSumAggregateOutputType = {
    id: number | null
    livroId: number | null
    usuarioId: number | null
  }

  export type EmprestimoMinAggregateOutputType = {
    id: number | null
    livroId: number | null
    usuarioId: number | null
    dataEmprestimo: Date | null
    dataDevolucao: Date | null
    devolvido: boolean | null
  }

  export type EmprestimoMaxAggregateOutputType = {
    id: number | null
    livroId: number | null
    usuarioId: number | null
    dataEmprestimo: Date | null
    dataDevolucao: Date | null
    devolvido: boolean | null
  }

  export type EmprestimoCountAggregateOutputType = {
    id: number
    livroId: number
    usuarioId: number
    dataEmprestimo: number
    dataDevolucao: number
    devolvido: number
    _all: number
  }


  export type EmprestimoAvgAggregateInputType = {
    id?: true
    livroId?: true
    usuarioId?: true
  }

  export type EmprestimoSumAggregateInputType = {
    id?: true
    livroId?: true
    usuarioId?: true
  }

  export type EmprestimoMinAggregateInputType = {
    id?: true
    livroId?: true
    usuarioId?: true
    dataEmprestimo?: true
    dataDevolucao?: true
    devolvido?: true
  }

  export type EmprestimoMaxAggregateInputType = {
    id?: true
    livroId?: true
    usuarioId?: true
    dataEmprestimo?: true
    dataDevolucao?: true
    devolvido?: true
  }

  export type EmprestimoCountAggregateInputType = {
    id?: true
    livroId?: true
    usuarioId?: true
    dataEmprestimo?: true
    dataDevolucao?: true
    devolvido?: true
    _all?: true
  }

  export type EmprestimoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprestimo to aggregate.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emprestimos
    **/
    _count?: true | EmprestimoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmprestimoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmprestimoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmprestimoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmprestimoMaxAggregateInputType
  }

  export type GetEmprestimoAggregateType<T extends EmprestimoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmprestimo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmprestimo[P]>
      : GetScalarType<T[P], AggregateEmprestimo[P]>
  }




  export type EmprestimoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestimoWhereInput
    orderBy?: EmprestimoOrderByWithAggregationInput | EmprestimoOrderByWithAggregationInput[]
    by: EmprestimoScalarFieldEnum[] | EmprestimoScalarFieldEnum
    having?: EmprestimoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmprestimoCountAggregateInputType | true
    _avg?: EmprestimoAvgAggregateInputType
    _sum?: EmprestimoSumAggregateInputType
    _min?: EmprestimoMinAggregateInputType
    _max?: EmprestimoMaxAggregateInputType
  }

  export type EmprestimoGroupByOutputType = {
    id: number
    livroId: number
    usuarioId: number
    dataEmprestimo: Date
    dataDevolucao: Date | null
    devolvido: boolean
    _count: EmprestimoCountAggregateOutputType | null
    _avg: EmprestimoAvgAggregateOutputType | null
    _sum: EmprestimoSumAggregateOutputType | null
    _min: EmprestimoMinAggregateOutputType | null
    _max: EmprestimoMaxAggregateOutputType | null
  }

  type GetEmprestimoGroupByPayload<T extends EmprestimoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmprestimoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmprestimoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmprestimoGroupByOutputType[P]>
            : GetScalarType<T[P], EmprestimoGroupByOutputType[P]>
        }
      >
    >


  export type EmprestimoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    livroId?: boolean
    usuarioId?: boolean
    dataEmprestimo?: boolean
    dataDevolucao?: boolean
    devolvido?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type EmprestimoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    livroId?: boolean
    usuarioId?: boolean
    dataEmprestimo?: boolean
    dataDevolucao?: boolean
    devolvido?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type EmprestimoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    livroId?: boolean
    usuarioId?: boolean
    dataEmprestimo?: boolean
    dataDevolucao?: boolean
    devolvido?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type EmprestimoSelectScalar = {
    id?: boolean
    livroId?: boolean
    usuarioId?: boolean
    dataEmprestimo?: boolean
    dataDevolucao?: boolean
    devolvido?: boolean
  }

  export type EmprestimoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "livroId" | "usuarioId" | "dataEmprestimo" | "dataDevolucao" | "devolvido", ExtArgs["result"]["emprestimo"]>
  export type EmprestimoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EmprestimoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EmprestimoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $EmprestimoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emprestimo"
    objects: {
      livro: Prisma.$LivroPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      livroId: number
      usuarioId: number
      dataEmprestimo: Date
      dataDevolucao: Date | null
      devolvido: boolean
    }, ExtArgs["result"]["emprestimo"]>
    composites: {}
  }

  type EmprestimoGetPayload<S extends boolean | null | undefined | EmprestimoDefaultArgs> = $Result.GetResult<Prisma.$EmprestimoPayload, S>

  type EmprestimoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmprestimoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmprestimoCountAggregateInputType | true
    }

  export interface EmprestimoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emprestimo'], meta: { name: 'Emprestimo' } }
    /**
     * Find zero or one Emprestimo that matches the filter.
     * @param {EmprestimoFindUniqueArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmprestimoFindUniqueArgs>(args: SelectSubset<T, EmprestimoFindUniqueArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emprestimo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmprestimoFindUniqueOrThrowArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmprestimoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmprestimoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprestimo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindFirstArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmprestimoFindFirstArgs>(args?: SelectSubset<T, EmprestimoFindFirstArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprestimo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindFirstOrThrowArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmprestimoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmprestimoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emprestimos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emprestimos
     * const emprestimos = await prisma.emprestimo.findMany()
     * 
     * // Get first 10 Emprestimos
     * const emprestimos = await prisma.emprestimo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emprestimoWithIdOnly = await prisma.emprestimo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmprestimoFindManyArgs>(args?: SelectSubset<T, EmprestimoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emprestimo.
     * @param {EmprestimoCreateArgs} args - Arguments to create a Emprestimo.
     * @example
     * // Create one Emprestimo
     * const Emprestimo = await prisma.emprestimo.create({
     *   data: {
     *     // ... data to create a Emprestimo
     *   }
     * })
     * 
     */
    create<T extends EmprestimoCreateArgs>(args: SelectSubset<T, EmprestimoCreateArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emprestimos.
     * @param {EmprestimoCreateManyArgs} args - Arguments to create many Emprestimos.
     * @example
     * // Create many Emprestimos
     * const emprestimo = await prisma.emprestimo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmprestimoCreateManyArgs>(args?: SelectSubset<T, EmprestimoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emprestimos and returns the data saved in the database.
     * @param {EmprestimoCreateManyAndReturnArgs} args - Arguments to create many Emprestimos.
     * @example
     * // Create many Emprestimos
     * const emprestimo = await prisma.emprestimo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emprestimos and only return the `id`
     * const emprestimoWithIdOnly = await prisma.emprestimo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmprestimoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmprestimoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emprestimo.
     * @param {EmprestimoDeleteArgs} args - Arguments to delete one Emprestimo.
     * @example
     * // Delete one Emprestimo
     * const Emprestimo = await prisma.emprestimo.delete({
     *   where: {
     *     // ... filter to delete one Emprestimo
     *   }
     * })
     * 
     */
    delete<T extends EmprestimoDeleteArgs>(args: SelectSubset<T, EmprestimoDeleteArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emprestimo.
     * @param {EmprestimoUpdateArgs} args - Arguments to update one Emprestimo.
     * @example
     * // Update one Emprestimo
     * const emprestimo = await prisma.emprestimo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmprestimoUpdateArgs>(args: SelectSubset<T, EmprestimoUpdateArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emprestimos.
     * @param {EmprestimoDeleteManyArgs} args - Arguments to filter Emprestimos to delete.
     * @example
     * // Delete a few Emprestimos
     * const { count } = await prisma.emprestimo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmprestimoDeleteManyArgs>(args?: SelectSubset<T, EmprestimoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emprestimos
     * const emprestimo = await prisma.emprestimo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmprestimoUpdateManyArgs>(args: SelectSubset<T, EmprestimoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestimos and returns the data updated in the database.
     * @param {EmprestimoUpdateManyAndReturnArgs} args - Arguments to update many Emprestimos.
     * @example
     * // Update many Emprestimos
     * const emprestimo = await prisma.emprestimo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emprestimos and only return the `id`
     * const emprestimoWithIdOnly = await prisma.emprestimo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmprestimoUpdateManyAndReturnArgs>(args: SelectSubset<T, EmprestimoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emprestimo.
     * @param {EmprestimoUpsertArgs} args - Arguments to update or create a Emprestimo.
     * @example
     * // Update or create a Emprestimo
     * const emprestimo = await prisma.emprestimo.upsert({
     *   create: {
     *     // ... data to create a Emprestimo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emprestimo we want to update
     *   }
     * })
     */
    upsert<T extends EmprestimoUpsertArgs>(args: SelectSubset<T, EmprestimoUpsertArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoCountArgs} args - Arguments to filter Emprestimos to count.
     * @example
     * // Count the number of Emprestimos
     * const count = await prisma.emprestimo.count({
     *   where: {
     *     // ... the filter for the Emprestimos we want to count
     *   }
     * })
    **/
    count<T extends EmprestimoCountArgs>(
      args?: Subset<T, EmprestimoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmprestimoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmprestimoAggregateArgs>(args: Subset<T, EmprestimoAggregateArgs>): Prisma.PrismaPromise<GetEmprestimoAggregateType<T>>

    /**
     * Group by Emprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoGroupByArgs} args - Group by arguments.
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
      T extends EmprestimoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmprestimoGroupByArgs['orderBy'] }
        : { orderBy?: EmprestimoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmprestimoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmprestimoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emprestimo model
   */
  readonly fields: EmprestimoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emprestimo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmprestimoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livro<T extends LivroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivroDefaultArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Emprestimo model
   */
  interface EmprestimoFieldRefs {
    readonly id: FieldRef<"Emprestimo", 'Int'>
    readonly livroId: FieldRef<"Emprestimo", 'Int'>
    readonly usuarioId: FieldRef<"Emprestimo", 'Int'>
    readonly dataEmprestimo: FieldRef<"Emprestimo", 'DateTime'>
    readonly dataDevolucao: FieldRef<"Emprestimo", 'DateTime'>
    readonly devolvido: FieldRef<"Emprestimo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Emprestimo findUnique
   */
  export type EmprestimoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo findUniqueOrThrow
   */
  export type EmprestimoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo findFirst
   */
  export type EmprestimoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprestimos.
     */
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo findFirstOrThrow
   */
  export type EmprestimoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprestimos.
     */
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo findMany
   */
  export type EmprestimoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimos to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo create
   */
  export type EmprestimoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The data needed to create a Emprestimo.
     */
    data: XOR<EmprestimoCreateInput, EmprestimoUncheckedCreateInput>
  }

  /**
   * Emprestimo createMany
   */
  export type EmprestimoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emprestimos.
     */
    data: EmprestimoCreateManyInput | EmprestimoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emprestimo createManyAndReturn
   */
  export type EmprestimoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * The data used to create many Emprestimos.
     */
    data: EmprestimoCreateManyInput | EmprestimoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprestimo update
   */
  export type EmprestimoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The data needed to update a Emprestimo.
     */
    data: XOR<EmprestimoUpdateInput, EmprestimoUncheckedUpdateInput>
    /**
     * Choose, which Emprestimo to update.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo updateMany
   */
  export type EmprestimoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emprestimos.
     */
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyInput>
    /**
     * Filter which Emprestimos to update
     */
    where?: EmprestimoWhereInput
    /**
     * Limit how many Emprestimos to update.
     */
    limit?: number
  }

  /**
   * Emprestimo updateManyAndReturn
   */
  export type EmprestimoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * The data used to update Emprestimos.
     */
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyInput>
    /**
     * Filter which Emprestimos to update
     */
    where?: EmprestimoWhereInput
    /**
     * Limit how many Emprestimos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprestimo upsert
   */
  export type EmprestimoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The filter to search for the Emprestimo to update in case it exists.
     */
    where: EmprestimoWhereUniqueInput
    /**
     * In case the Emprestimo found by the `where` argument doesn't exist, create a new Emprestimo with this data.
     */
    create: XOR<EmprestimoCreateInput, EmprestimoUncheckedCreateInput>
    /**
     * In case the Emprestimo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmprestimoUpdateInput, EmprestimoUncheckedUpdateInput>
  }

  /**
   * Emprestimo delete
   */
  export type EmprestimoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter which Emprestimo to delete.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo deleteMany
   */
  export type EmprestimoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprestimos to delete
     */
    where?: EmprestimoWhereInput
    /**
     * Limit how many Emprestimos to delete.
     */
    limit?: number
  }

  /**
   * Emprestimo without action
   */
  export type EmprestimoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    criadoEm: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    criadoEm?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    criadoEm?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    criadoEm?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
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
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    criadoEm: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    emprestimos?: boolean | Usuario$emprestimosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "criadoEm", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | Usuario$emprestimosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      emprestimos: Prisma.$EmprestimoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      criadoEm: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emprestimos<T extends Usuario$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
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
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
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
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
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
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.emprestimos
   */
  export type Usuario$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    where?: EmprestimoWhereInput
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    cursor?: EmprestimoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
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


  export const LivroScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    autor: 'autor',
    isbn: 'isbn',
    disponivel: 'disponivel',
    ativo: 'ativo',
    deletadoEm: 'deletadoEm',
    criadoEm: 'criadoEm'
  };

  export type LivroScalarFieldEnum = (typeof LivroScalarFieldEnum)[keyof typeof LivroScalarFieldEnum]


  export const EmprestimoScalarFieldEnum: {
    id: 'id',
    livroId: 'livroId',
    usuarioId: 'usuarioId',
    dataEmprestimo: 'dataEmprestimo',
    dataDevolucao: 'dataDevolucao',
    devolvido: 'devolvido'
  };

  export type EmprestimoScalarFieldEnum = (typeof EmprestimoScalarFieldEnum)[keyof typeof EmprestimoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    criadoEm: 'criadoEm'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LivroWhereInput = {
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    id?: IntFilter<"Livro"> | number
    titulo?: StringFilter<"Livro"> | string
    descricao?: StringFilter<"Livro"> | string
    autor?: StringFilter<"Livro"> | string
    isbn?: StringFilter<"Livro"> | string
    disponivel?: BoolFilter<"Livro"> | boolean
    ativo?: BoolFilter<"Livro"> | boolean
    deletadoEm?: DateTimeNullableFilter<"Livro"> | Date | string | null
    criadoEm?: DateTimeFilter<"Livro"> | Date | string
    emprestimos?: EmprestimoListRelationFilter
  }

  export type LivroOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    autor?: SortOrder
    isbn?: SortOrder
    disponivel?: SortOrder
    ativo?: SortOrder
    deletadoEm?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    emprestimos?: EmprestimoOrderByRelationAggregateInput
  }

  export type LivroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    isbn?: string
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    titulo?: StringFilter<"Livro"> | string
    descricao?: StringFilter<"Livro"> | string
    autor?: StringFilter<"Livro"> | string
    disponivel?: BoolFilter<"Livro"> | boolean
    ativo?: BoolFilter<"Livro"> | boolean
    deletadoEm?: DateTimeNullableFilter<"Livro"> | Date | string | null
    criadoEm?: DateTimeFilter<"Livro"> | Date | string
    emprestimos?: EmprestimoListRelationFilter
  }, "id" | "isbn">

  export type LivroOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    autor?: SortOrder
    isbn?: SortOrder
    disponivel?: SortOrder
    ativo?: SortOrder
    deletadoEm?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: LivroCountOrderByAggregateInput
    _avg?: LivroAvgOrderByAggregateInput
    _max?: LivroMaxOrderByAggregateInput
    _min?: LivroMinOrderByAggregateInput
    _sum?: LivroSumOrderByAggregateInput
  }

  export type LivroScalarWhereWithAggregatesInput = {
    AND?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    OR?: LivroScalarWhereWithAggregatesInput[]
    NOT?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Livro"> | number
    titulo?: StringWithAggregatesFilter<"Livro"> | string
    descricao?: StringWithAggregatesFilter<"Livro"> | string
    autor?: StringWithAggregatesFilter<"Livro"> | string
    isbn?: StringWithAggregatesFilter<"Livro"> | string
    disponivel?: BoolWithAggregatesFilter<"Livro"> | boolean
    ativo?: BoolWithAggregatesFilter<"Livro"> | boolean
    deletadoEm?: DateTimeNullableWithAggregatesFilter<"Livro"> | Date | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Livro"> | Date | string
  }

  export type EmprestimoWhereInput = {
    AND?: EmprestimoWhereInput | EmprestimoWhereInput[]
    OR?: EmprestimoWhereInput[]
    NOT?: EmprestimoWhereInput | EmprestimoWhereInput[]
    id?: IntFilter<"Emprestimo"> | number
    livroId?: IntFilter<"Emprestimo"> | number
    usuarioId?: IntFilter<"Emprestimo"> | number
    dataEmprestimo?: DateTimeFilter<"Emprestimo"> | Date | string
    dataDevolucao?: DateTimeNullableFilter<"Emprestimo"> | Date | string | null
    devolvido?: BoolFilter<"Emprestimo"> | boolean
    livro?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type EmprestimoOrderByWithRelationInput = {
    id?: SortOrder
    livroId?: SortOrder
    usuarioId?: SortOrder
    dataEmprestimo?: SortOrder
    dataDevolucao?: SortOrderInput | SortOrder
    devolvido?: SortOrder
    livro?: LivroOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type EmprestimoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmprestimoWhereInput | EmprestimoWhereInput[]
    OR?: EmprestimoWhereInput[]
    NOT?: EmprestimoWhereInput | EmprestimoWhereInput[]
    livroId?: IntFilter<"Emprestimo"> | number
    usuarioId?: IntFilter<"Emprestimo"> | number
    dataEmprestimo?: DateTimeFilter<"Emprestimo"> | Date | string
    dataDevolucao?: DateTimeNullableFilter<"Emprestimo"> | Date | string | null
    devolvido?: BoolFilter<"Emprestimo"> | boolean
    livro?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type EmprestimoOrderByWithAggregationInput = {
    id?: SortOrder
    livroId?: SortOrder
    usuarioId?: SortOrder
    dataEmprestimo?: SortOrder
    dataDevolucao?: SortOrderInput | SortOrder
    devolvido?: SortOrder
    _count?: EmprestimoCountOrderByAggregateInput
    _avg?: EmprestimoAvgOrderByAggregateInput
    _max?: EmprestimoMaxOrderByAggregateInput
    _min?: EmprestimoMinOrderByAggregateInput
    _sum?: EmprestimoSumOrderByAggregateInput
  }

  export type EmprestimoScalarWhereWithAggregatesInput = {
    AND?: EmprestimoScalarWhereWithAggregatesInput | EmprestimoScalarWhereWithAggregatesInput[]
    OR?: EmprestimoScalarWhereWithAggregatesInput[]
    NOT?: EmprestimoScalarWhereWithAggregatesInput | EmprestimoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Emprestimo"> | number
    livroId?: IntWithAggregatesFilter<"Emprestimo"> | number
    usuarioId?: IntWithAggregatesFilter<"Emprestimo"> | number
    dataEmprestimo?: DateTimeWithAggregatesFilter<"Emprestimo"> | Date | string
    dataDevolucao?: DateTimeNullableWithAggregatesFilter<"Emprestimo"> | Date | string | null
    devolvido?: BoolWithAggregatesFilter<"Emprestimo"> | boolean
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    emprestimos?: EmprestimoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    emprestimos?: EmprestimoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    emprestimos?: EmprestimoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type LivroCreateInput = {
    titulo: string
    descricao: string
    autor: string
    isbn: string
    disponivel?: boolean
    ativo?: boolean
    deletadoEm?: Date | string | null
    criadoEm?: Date | string
    emprestimos?: EmprestimoCreateNestedManyWithoutLivroInput
  }

  export type LivroUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao: string
    autor: string
    isbn: string
    disponivel?: boolean
    ativo?: boolean
    deletadoEm?: Date | string | null
    criadoEm?: Date | string
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutLivroInput
  }

  export type LivroUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    ativo?: BoolFieldUpdateOperationsInput | boolean
    deletadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUpdateManyWithoutLivroNestedInput
  }

  export type LivroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    ativo?: BoolFieldUpdateOperationsInput | boolean
    deletadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type LivroCreateManyInput = {
    id?: number
    titulo: string
    descricao: string
    autor: string
    isbn: string
    disponivel?: boolean
    ativo?: boolean
    deletadoEm?: Date | string | null
    criadoEm?: Date | string
  }

  export type LivroUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    ativo?: BoolFieldUpdateOperationsInput | boolean
    deletadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LivroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    ativo?: BoolFieldUpdateOperationsInput | boolean
    deletadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmprestimoCreateInput = {
    dataEmprestimo?: Date | string
    dataDevolucao?: Date | string | null
    devolvido?: boolean
    livro: LivroCreateNestedOneWithoutEmprestimosInput
    usuario: UsuarioCreateNestedOneWithoutEmprestimosInput
  }

  export type EmprestimoUncheckedCreateInput = {
    id?: number
    livroId: number
    usuarioId: number
    dataEmprestimo?: Date | string
    dataDevolucao?: Date | string | null
    devolvido?: boolean
  }

  export type EmprestimoUpdateInput = {
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
    livro?: LivroUpdateOneRequiredWithoutEmprestimosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type EmprestimoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    livroId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmprestimoCreateManyInput = {
    id?: number
    livroId: number
    usuarioId: number
    dataEmprestimo?: Date | string
    dataDevolucao?: Date | string | null
    devolvido?: boolean
  }

  export type EmprestimoUpdateManyMutationInput = {
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmprestimoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    livroId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    emprestimos?: EmprestimoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmprestimoListRelationFilter = {
    every?: EmprestimoWhereInput
    some?: EmprestimoWhereInput
    none?: EmprestimoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmprestimoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LivroCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    autor?: SortOrder
    isbn?: SortOrder
    disponivel?: SortOrder
    ativo?: SortOrder
    deletadoEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type LivroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LivroMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    autor?: SortOrder
    isbn?: SortOrder
    disponivel?: SortOrder
    ativo?: SortOrder
    deletadoEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type LivroMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    autor?: SortOrder
    isbn?: SortOrder
    disponivel?: SortOrder
    ativo?: SortOrder
    deletadoEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type LivroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LivroScalarRelationFilter = {
    is?: LivroWhereInput
    isNot?: LivroWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type EmprestimoCountOrderByAggregateInput = {
    id?: SortOrder
    livroId?: SortOrder
    usuarioId?: SortOrder
    dataEmprestimo?: SortOrder
    dataDevolucao?: SortOrder
    devolvido?: SortOrder
  }

  export type EmprestimoAvgOrderByAggregateInput = {
    id?: SortOrder
    livroId?: SortOrder
    usuarioId?: SortOrder
  }

  export type EmprestimoMaxOrderByAggregateInput = {
    id?: SortOrder
    livroId?: SortOrder
    usuarioId?: SortOrder
    dataEmprestimo?: SortOrder
    dataDevolucao?: SortOrder
    devolvido?: SortOrder
  }

  export type EmprestimoMinOrderByAggregateInput = {
    id?: SortOrder
    livroId?: SortOrder
    usuarioId?: SortOrder
    dataEmprestimo?: SortOrder
    dataDevolucao?: SortOrder
    devolvido?: SortOrder
  }

  export type EmprestimoSumOrderByAggregateInput = {
    id?: SortOrder
    livroId?: SortOrder
    usuarioId?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmprestimoCreateNestedManyWithoutLivroInput = {
    create?: XOR<EmprestimoCreateWithoutLivroInput, EmprestimoUncheckedCreateWithoutLivroInput> | EmprestimoCreateWithoutLivroInput[] | EmprestimoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutLivroInput | EmprestimoCreateOrConnectWithoutLivroInput[]
    createMany?: EmprestimoCreateManyLivroInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type EmprestimoUncheckedCreateNestedManyWithoutLivroInput = {
    create?: XOR<EmprestimoCreateWithoutLivroInput, EmprestimoUncheckedCreateWithoutLivroInput> | EmprestimoCreateWithoutLivroInput[] | EmprestimoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutLivroInput | EmprestimoCreateOrConnectWithoutLivroInput[]
    createMany?: EmprestimoCreateManyLivroInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmprestimoUpdateManyWithoutLivroNestedInput = {
    create?: XOR<EmprestimoCreateWithoutLivroInput, EmprestimoUncheckedCreateWithoutLivroInput> | EmprestimoCreateWithoutLivroInput[] | EmprestimoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutLivroInput | EmprestimoCreateOrConnectWithoutLivroInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutLivroInput | EmprestimoUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: EmprestimoCreateManyLivroInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutLivroInput | EmprestimoUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutLivroInput | EmprestimoUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmprestimoUncheckedUpdateManyWithoutLivroNestedInput = {
    create?: XOR<EmprestimoCreateWithoutLivroInput, EmprestimoUncheckedCreateWithoutLivroInput> | EmprestimoCreateWithoutLivroInput[] | EmprestimoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutLivroInput | EmprestimoCreateOrConnectWithoutLivroInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutLivroInput | EmprestimoUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: EmprestimoCreateManyLivroInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutLivroInput | EmprestimoUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutLivroInput | EmprestimoUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type LivroCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<LivroCreateWithoutEmprestimosInput, LivroUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: LivroCreateOrConnectWithoutEmprestimosInput
    connect?: LivroWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<UsuarioCreateWithoutEmprestimosInput, UsuarioUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmprestimosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type LivroUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<LivroCreateWithoutEmprestimosInput, LivroUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: LivroCreateOrConnectWithoutEmprestimosInput
    upsert?: LivroUpsertWithoutEmprestimosInput
    connect?: LivroWhereUniqueInput
    update?: XOR<XOR<LivroUpdateToOneWithWhereWithoutEmprestimosInput, LivroUpdateWithoutEmprestimosInput>, LivroUncheckedUpdateWithoutEmprestimosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<UsuarioCreateWithoutEmprestimosInput, UsuarioUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmprestimosInput
    upsert?: UsuarioUpsertWithoutEmprestimosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEmprestimosInput, UsuarioUpdateWithoutEmprestimosInput>, UsuarioUncheckedUpdateWithoutEmprestimosInput>
  }

  export type EmprestimoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EmprestimoCreateWithoutUsuarioInput, EmprestimoUncheckedCreateWithoutUsuarioInput> | EmprestimoCreateWithoutUsuarioInput[] | EmprestimoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutUsuarioInput | EmprestimoCreateOrConnectWithoutUsuarioInput[]
    createMany?: EmprestimoCreateManyUsuarioInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type EmprestimoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EmprestimoCreateWithoutUsuarioInput, EmprestimoUncheckedCreateWithoutUsuarioInput> | EmprestimoCreateWithoutUsuarioInput[] | EmprestimoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutUsuarioInput | EmprestimoCreateOrConnectWithoutUsuarioInput[]
    createMany?: EmprestimoCreateManyUsuarioInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type EmprestimoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EmprestimoCreateWithoutUsuarioInput, EmprestimoUncheckedCreateWithoutUsuarioInput> | EmprestimoCreateWithoutUsuarioInput[] | EmprestimoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutUsuarioInput | EmprestimoCreateOrConnectWithoutUsuarioInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutUsuarioInput | EmprestimoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EmprestimoCreateManyUsuarioInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutUsuarioInput | EmprestimoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutUsuarioInput | EmprestimoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type EmprestimoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EmprestimoCreateWithoutUsuarioInput, EmprestimoUncheckedCreateWithoutUsuarioInput> | EmprestimoCreateWithoutUsuarioInput[] | EmprestimoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutUsuarioInput | EmprestimoCreateOrConnectWithoutUsuarioInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutUsuarioInput | EmprestimoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EmprestimoCreateManyUsuarioInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutUsuarioInput | EmprestimoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutUsuarioInput | EmprestimoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EmprestimoCreateWithoutLivroInput = {
    dataEmprestimo?: Date | string
    dataDevolucao?: Date | string | null
    devolvido?: boolean
    usuario: UsuarioCreateNestedOneWithoutEmprestimosInput
  }

  export type EmprestimoUncheckedCreateWithoutLivroInput = {
    id?: number
    usuarioId: number
    dataEmprestimo?: Date | string
    dataDevolucao?: Date | string | null
    devolvido?: boolean
  }

  export type EmprestimoCreateOrConnectWithoutLivroInput = {
    where: EmprestimoWhereUniqueInput
    create: XOR<EmprestimoCreateWithoutLivroInput, EmprestimoUncheckedCreateWithoutLivroInput>
  }

  export type EmprestimoCreateManyLivroInputEnvelope = {
    data: EmprestimoCreateManyLivroInput | EmprestimoCreateManyLivroInput[]
    skipDuplicates?: boolean
  }

  export type EmprestimoUpsertWithWhereUniqueWithoutLivroInput = {
    where: EmprestimoWhereUniqueInput
    update: XOR<EmprestimoUpdateWithoutLivroInput, EmprestimoUncheckedUpdateWithoutLivroInput>
    create: XOR<EmprestimoCreateWithoutLivroInput, EmprestimoUncheckedCreateWithoutLivroInput>
  }

  export type EmprestimoUpdateWithWhereUniqueWithoutLivroInput = {
    where: EmprestimoWhereUniqueInput
    data: XOR<EmprestimoUpdateWithoutLivroInput, EmprestimoUncheckedUpdateWithoutLivroInput>
  }

  export type EmprestimoUpdateManyWithWhereWithoutLivroInput = {
    where: EmprestimoScalarWhereInput
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyWithoutLivroInput>
  }

  export type EmprestimoScalarWhereInput = {
    AND?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
    OR?: EmprestimoScalarWhereInput[]
    NOT?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
    id?: IntFilter<"Emprestimo"> | number
    livroId?: IntFilter<"Emprestimo"> | number
    usuarioId?: IntFilter<"Emprestimo"> | number
    dataEmprestimo?: DateTimeFilter<"Emprestimo"> | Date | string
    dataDevolucao?: DateTimeNullableFilter<"Emprestimo"> | Date | string | null
    devolvido?: BoolFilter<"Emprestimo"> | boolean
  }

  export type LivroCreateWithoutEmprestimosInput = {
    titulo: string
    descricao: string
    autor: string
    isbn: string
    disponivel?: boolean
    ativo?: boolean
    deletadoEm?: Date | string | null
    criadoEm?: Date | string
  }

  export type LivroUncheckedCreateWithoutEmprestimosInput = {
    id?: number
    titulo: string
    descricao: string
    autor: string
    isbn: string
    disponivel?: boolean
    ativo?: boolean
    deletadoEm?: Date | string | null
    criadoEm?: Date | string
  }

  export type LivroCreateOrConnectWithoutEmprestimosInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutEmprestimosInput, LivroUncheckedCreateWithoutEmprestimosInput>
  }

  export type UsuarioCreateWithoutEmprestimosInput = {
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutEmprestimosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutEmprestimosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEmprestimosInput, UsuarioUncheckedCreateWithoutEmprestimosInput>
  }

  export type LivroUpsertWithoutEmprestimosInput = {
    update: XOR<LivroUpdateWithoutEmprestimosInput, LivroUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<LivroCreateWithoutEmprestimosInput, LivroUncheckedCreateWithoutEmprestimosInput>
    where?: LivroWhereInput
  }

  export type LivroUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: LivroWhereInput
    data: XOR<LivroUpdateWithoutEmprestimosInput, LivroUncheckedUpdateWithoutEmprestimosInput>
  }

  export type LivroUpdateWithoutEmprestimosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    ativo?: BoolFieldUpdateOperationsInput | boolean
    deletadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LivroUncheckedUpdateWithoutEmprestimosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    ativo?: BoolFieldUpdateOperationsInput | boolean
    deletadoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpsertWithoutEmprestimosInput = {
    update: XOR<UsuarioUpdateWithoutEmprestimosInput, UsuarioUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<UsuarioCreateWithoutEmprestimosInput, UsuarioUncheckedCreateWithoutEmprestimosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEmprestimosInput, UsuarioUncheckedUpdateWithoutEmprestimosInput>
  }

  export type UsuarioUpdateWithoutEmprestimosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutEmprestimosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmprestimoCreateWithoutUsuarioInput = {
    dataEmprestimo?: Date | string
    dataDevolucao?: Date | string | null
    devolvido?: boolean
    livro: LivroCreateNestedOneWithoutEmprestimosInput
  }

  export type EmprestimoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    livroId: number
    dataEmprestimo?: Date | string
    dataDevolucao?: Date | string | null
    devolvido?: boolean
  }

  export type EmprestimoCreateOrConnectWithoutUsuarioInput = {
    where: EmprestimoWhereUniqueInput
    create: XOR<EmprestimoCreateWithoutUsuarioInput, EmprestimoUncheckedCreateWithoutUsuarioInput>
  }

  export type EmprestimoCreateManyUsuarioInputEnvelope = {
    data: EmprestimoCreateManyUsuarioInput | EmprestimoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type EmprestimoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EmprestimoWhereUniqueInput
    update: XOR<EmprestimoUpdateWithoutUsuarioInput, EmprestimoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EmprestimoCreateWithoutUsuarioInput, EmprestimoUncheckedCreateWithoutUsuarioInput>
  }

  export type EmprestimoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EmprestimoWhereUniqueInput
    data: XOR<EmprestimoUpdateWithoutUsuarioInput, EmprestimoUncheckedUpdateWithoutUsuarioInput>
  }

  export type EmprestimoUpdateManyWithWhereWithoutUsuarioInput = {
    where: EmprestimoScalarWhereInput
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type EmprestimoCreateManyLivroInput = {
    id?: number
    usuarioId: number
    dataEmprestimo?: Date | string
    dataDevolucao?: Date | string | null
    devolvido?: boolean
  }

  export type EmprestimoUpdateWithoutLivroInput = {
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type EmprestimoUncheckedUpdateWithoutLivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmprestimoUncheckedUpdateManyWithoutLivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmprestimoCreateManyUsuarioInput = {
    id?: number
    livroId: number
    dataEmprestimo?: Date | string
    dataDevolucao?: Date | string | null
    devolvido?: boolean
  }

  export type EmprestimoUpdateWithoutUsuarioInput = {
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
    livro?: LivroUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type EmprestimoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    livroId?: IntFieldUpdateOperationsInput | number
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmprestimoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    livroId?: IntFieldUpdateOperationsInput | number
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
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