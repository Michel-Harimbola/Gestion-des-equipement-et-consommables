
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
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Emprunt
 * 
 */
export type Emprunt = $Result.DefaultSelection<Prisma.$EmpruntPayload>
/**
 * Model DemandeEmprunt
 * 
 */
export type DemandeEmprunt = $Result.DefaultSelection<Prisma.$DemandeEmpruntPayload>
/**
 * Model Equipement
 * 
 */
export type Equipement = $Result.DefaultSelection<Prisma.$EquipementPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Consommable
 * 
 */
export type Consommable = $Result.DefaultSelection<Prisma.$ConsommablePayload>
/**
 * Model UtilisationConsommable
 * 
 */
export type UtilisationConsommable = $Result.DefaultSelection<Prisma.$UtilisationConsommablePayload>
/**
 * Model Rapport
 * 
 */
export type Rapport = $Result.DefaultSelection<Prisma.$RapportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Obtention: {
  Achat: 'Achat',
  Don: 'Don'
};

export type Obtention = (typeof Obtention)[keyof typeof Obtention]


export const Periode: {
  Mensuel: 'Mensuel',
  Hebdo: 'Hebdo'
};

export type Periode = (typeof Periode)[keyof typeof Periode]


export const TypeNotification: {
  AlerteStock: 'AlerteStock',
  RappelRetour: 'RappelRetour',
  Acceptation: 'Acceptation',
  Refus: 'Refus'
};

export type TypeNotification = (typeof TypeNotification)[keyof typeof TypeNotification]


export const Statut: {
  EnCours: 'EnCours',
  EnRetard: 'EnRetard',
  Retourner: 'Retourner',
  EnAttente: 'EnAttente'
};

export type Statut = (typeof Statut)[keyof typeof Statut]


export const Disponibilite: {
  Disponible: 'Disponible',
  Emprunte: 'Emprunte',
  EnMaintenance: 'EnMaintenance',
  Indisponible: 'Indisponible'
};

export type Disponibilite = (typeof Disponibilite)[keyof typeof Disponibilite]


export const EtatMateriel: {
  Neuf: 'Neuf',
  BonEtat: 'BonEtat',
  EtatMoyen: 'EtatMoyen',
  MauvaisEtat: 'MauvaisEtat',
  HorsUsage: 'HorsUsage',
  EnReparation: 'EnReparation'
};

export type EtatMateriel = (typeof EtatMateriel)[keyof typeof EtatMateriel]


export const RoleUtilisateur: {
  admin: 'admin',
  regisseurEquipementInterne: 'regisseurEquipementInterne',
  client: 'client',
  partenaire: 'partenaire',
  personnelInterne: 'personnelInterne'
};

export type RoleUtilisateur = (typeof RoleUtilisateur)[keyof typeof RoleUtilisateur]


export const StatutDemande: {
  enAttente: 'enAttente',
  approuver: 'approuver',
  refuser: 'refuser'
};

export type StatutDemande = (typeof StatutDemande)[keyof typeof StatutDemande]


export const TypeDemande: {
  EMPRUNT: 'EMPRUNT',
  RETOUR: 'RETOUR'
};

export type TypeDemande = (typeof TypeDemande)[keyof typeof TypeDemande]

}

export type Obtention = $Enums.Obtention

export const Obtention: typeof $Enums.Obtention

export type Periode = $Enums.Periode

export const Periode: typeof $Enums.Periode

export type TypeNotification = $Enums.TypeNotification

export const TypeNotification: typeof $Enums.TypeNotification

export type Statut = $Enums.Statut

export const Statut: typeof $Enums.Statut

export type Disponibilite = $Enums.Disponibilite

export const Disponibilite: typeof $Enums.Disponibilite

export type EtatMateriel = $Enums.EtatMateriel

export const EtatMateriel: typeof $Enums.EtatMateriel

export type RoleUtilisateur = $Enums.RoleUtilisateur

export const RoleUtilisateur: typeof $Enums.RoleUtilisateur

export type StatutDemande = $Enums.StatutDemande

export const StatutDemande: typeof $Enums.StatutDemande

export type TypeDemande = $Enums.TypeDemande

export const TypeDemande: typeof $Enums.TypeDemande

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Utilisateurs
 * const utilisateurs = await prisma.utilisateur.findMany()
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
   * // Fetch zero or more Utilisateurs
   * const utilisateurs = await prisma.utilisateur.findMany()
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
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emprunt`: Exposes CRUD operations for the **Emprunt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emprunts
    * const emprunts = await prisma.emprunt.findMany()
    * ```
    */
  get emprunt(): Prisma.EmpruntDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.demandeEmprunt`: Exposes CRUD operations for the **DemandeEmprunt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DemandeEmprunts
    * const demandeEmprunts = await prisma.demandeEmprunt.findMany()
    * ```
    */
  get demandeEmprunt(): Prisma.DemandeEmpruntDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipement`: Exposes CRUD operations for the **Equipement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipements
    * const equipements = await prisma.equipement.findMany()
    * ```
    */
  get equipement(): Prisma.EquipementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consommable`: Exposes CRUD operations for the **Consommable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consommables
    * const consommables = await prisma.consommable.findMany()
    * ```
    */
  get consommable(): Prisma.ConsommableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilisationConsommable`: Exposes CRUD operations for the **UtilisationConsommable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UtilisationConsommables
    * const utilisationConsommables = await prisma.utilisationConsommable.findMany()
    * ```
    */
  get utilisationConsommable(): Prisma.UtilisationConsommableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rapport`: Exposes CRUD operations for the **Rapport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rapports
    * const rapports = await prisma.rapport.findMany()
    * ```
    */
  get rapport(): Prisma.RapportDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
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
    Utilisateur: 'Utilisateur',
    Emprunt: 'Emprunt',
    DemandeEmprunt: 'DemandeEmprunt',
    Equipement: 'Equipement',
    Notification: 'Notification',
    Consommable: 'Consommable',
    UtilisationConsommable: 'UtilisationConsommable',
    Rapport: 'Rapport'
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
      modelProps: "utilisateur" | "emprunt" | "demandeEmprunt" | "equipement" | "notification" | "consommable" | "utilisationConsommable" | "rapport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Emprunt: {
        payload: Prisma.$EmpruntPayload<ExtArgs>
        fields: Prisma.EmpruntFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpruntFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpruntFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>
          }
          findFirst: {
            args: Prisma.EmpruntFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpruntFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>
          }
          findMany: {
            args: Prisma.EmpruntFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>[]
          }
          create: {
            args: Prisma.EmpruntCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>
          }
          createMany: {
            args: Prisma.EmpruntCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpruntCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>[]
          }
          delete: {
            args: Prisma.EmpruntDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>
          }
          update: {
            args: Prisma.EmpruntUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>
          }
          deleteMany: {
            args: Prisma.EmpruntDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpruntUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpruntUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>[]
          }
          upsert: {
            args: Prisma.EmpruntUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>
          }
          aggregate: {
            args: Prisma.EmpruntAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmprunt>
          }
          groupBy: {
            args: Prisma.EmpruntGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpruntGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpruntCountArgs<ExtArgs>
            result: $Utils.Optional<EmpruntCountAggregateOutputType> | number
          }
        }
      }
      DemandeEmprunt: {
        payload: Prisma.$DemandeEmpruntPayload<ExtArgs>
        fields: Prisma.DemandeEmpruntFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemandeEmpruntFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandeEmpruntPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemandeEmpruntFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandeEmpruntPayload>
          }
          findFirst: {
            args: Prisma.DemandeEmpruntFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandeEmpruntPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemandeEmpruntFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandeEmpruntPayload>
          }
          findMany: {
            args: Prisma.DemandeEmpruntFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandeEmpruntPayload>[]
          }
          create: {
            args: Prisma.DemandeEmpruntCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandeEmpruntPayload>
          }
          createMany: {
            args: Prisma.DemandeEmpruntCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DemandeEmpruntCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandeEmpruntPayload>[]
          }
          delete: {
            args: Prisma.DemandeEmpruntDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandeEmpruntPayload>
          }
          update: {
            args: Prisma.DemandeEmpruntUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandeEmpruntPayload>
          }
          deleteMany: {
            args: Prisma.DemandeEmpruntDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemandeEmpruntUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DemandeEmpruntUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandeEmpruntPayload>[]
          }
          upsert: {
            args: Prisma.DemandeEmpruntUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandeEmpruntPayload>
          }
          aggregate: {
            args: Prisma.DemandeEmpruntAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemandeEmprunt>
          }
          groupBy: {
            args: Prisma.DemandeEmpruntGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemandeEmpruntGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemandeEmpruntCountArgs<ExtArgs>
            result: $Utils.Optional<DemandeEmpruntCountAggregateOutputType> | number
          }
        }
      }
      Equipement: {
        payload: Prisma.$EquipementPayload<ExtArgs>
        fields: Prisma.EquipementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipementPayload>
          }
          findFirst: {
            args: Prisma.EquipementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipementPayload>
          }
          findMany: {
            args: Prisma.EquipementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipementPayload>[]
          }
          create: {
            args: Prisma.EquipementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipementPayload>
          }
          createMany: {
            args: Prisma.EquipementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipementPayload>[]
          }
          delete: {
            args: Prisma.EquipementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipementPayload>
          }
          update: {
            args: Prisma.EquipementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipementPayload>
          }
          deleteMany: {
            args: Prisma.EquipementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipementPayload>[]
          }
          upsert: {
            args: Prisma.EquipementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipementPayload>
          }
          aggregate: {
            args: Prisma.EquipementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipement>
          }
          groupBy: {
            args: Prisma.EquipementGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipementGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipementCountArgs<ExtArgs>
            result: $Utils.Optional<EquipementCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Consommable: {
        payload: Prisma.$ConsommablePayload<ExtArgs>
        fields: Prisma.ConsommableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsommableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsommablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsommableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsommablePayload>
          }
          findFirst: {
            args: Prisma.ConsommableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsommablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsommableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsommablePayload>
          }
          findMany: {
            args: Prisma.ConsommableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsommablePayload>[]
          }
          create: {
            args: Prisma.ConsommableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsommablePayload>
          }
          createMany: {
            args: Prisma.ConsommableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsommableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsommablePayload>[]
          }
          delete: {
            args: Prisma.ConsommableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsommablePayload>
          }
          update: {
            args: Prisma.ConsommableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsommablePayload>
          }
          deleteMany: {
            args: Prisma.ConsommableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsommableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsommableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsommablePayload>[]
          }
          upsert: {
            args: Prisma.ConsommableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsommablePayload>
          }
          aggregate: {
            args: Prisma.ConsommableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsommable>
          }
          groupBy: {
            args: Prisma.ConsommableGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsommableGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsommableCountArgs<ExtArgs>
            result: $Utils.Optional<ConsommableCountAggregateOutputType> | number
          }
        }
      }
      UtilisationConsommable: {
        payload: Prisma.$UtilisationConsommablePayload<ExtArgs>
        fields: Prisma.UtilisationConsommableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisationConsommableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisationConsommablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisationConsommableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisationConsommablePayload>
          }
          findFirst: {
            args: Prisma.UtilisationConsommableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisationConsommablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisationConsommableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisationConsommablePayload>
          }
          findMany: {
            args: Prisma.UtilisationConsommableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisationConsommablePayload>[]
          }
          create: {
            args: Prisma.UtilisationConsommableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisationConsommablePayload>
          }
          createMany: {
            args: Prisma.UtilisationConsommableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisationConsommableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisationConsommablePayload>[]
          }
          delete: {
            args: Prisma.UtilisationConsommableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisationConsommablePayload>
          }
          update: {
            args: Prisma.UtilisationConsommableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisationConsommablePayload>
          }
          deleteMany: {
            args: Prisma.UtilisationConsommableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisationConsommableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisationConsommableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisationConsommablePayload>[]
          }
          upsert: {
            args: Prisma.UtilisationConsommableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisationConsommablePayload>
          }
          aggregate: {
            args: Prisma.UtilisationConsommableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisationConsommable>
          }
          groupBy: {
            args: Prisma.UtilisationConsommableGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisationConsommableGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisationConsommableCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisationConsommableCountAggregateOutputType> | number
          }
        }
      }
      Rapport: {
        payload: Prisma.$RapportPayload<ExtArgs>
        fields: Prisma.RapportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RapportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RapportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>
          }
          findFirst: {
            args: Prisma.RapportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RapportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>
          }
          findMany: {
            args: Prisma.RapportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>[]
          }
          create: {
            args: Prisma.RapportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>
          }
          createMany: {
            args: Prisma.RapportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RapportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>[]
          }
          delete: {
            args: Prisma.RapportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>
          }
          update: {
            args: Prisma.RapportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>
          }
          deleteMany: {
            args: Prisma.RapportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RapportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RapportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>[]
          }
          upsert: {
            args: Prisma.RapportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>
          }
          aggregate: {
            args: Prisma.RapportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRapport>
          }
          groupBy: {
            args: Prisma.RapportGroupByArgs<ExtArgs>
            result: $Utils.Optional<RapportGroupByOutputType>[]
          }
          count: {
            args: Prisma.RapportCountArgs<ExtArgs>
            result: $Utils.Optional<RapportCountAggregateOutputType> | number
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
    utilisateur?: UtilisateurOmit
    emprunt?: EmpruntOmit
    demandeEmprunt?: DemandeEmpruntOmit
    equipement?: EquipementOmit
    notification?: NotificationOmit
    consommable?: ConsommableOmit
    utilisationConsommable?: UtilisationConsommableOmit
    rapport?: RapportOmit
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
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    emprunts: number
    demandeEmprunt: number
    utilisationsConsommable: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprunts?: boolean | UtilisateurCountOutputTypeCountEmpruntsArgs
    demandeEmprunt?: boolean | UtilisateurCountOutputTypeCountDemandeEmpruntArgs
    utilisationsConsommable?: boolean | UtilisateurCountOutputTypeCountUtilisationsConsommableArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountEmpruntsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpruntWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountDemandeEmpruntArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeEmpruntWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountUtilisationsConsommableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisationConsommableWhereInput
  }


  /**
   * Count Type EmpruntCountOutputType
   */

  export type EmpruntCountOutputType = {
    notification: number
  }

  export type EmpruntCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | EmpruntCountOutputTypeCountNotificationArgs
  }

  // Custom InputTypes
  /**
   * EmpruntCountOutputType without action
   */
  export type EmpruntCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpruntCountOutputType
     */
    select?: EmpruntCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpruntCountOutputType without action
   */
  export type EmpruntCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type DemandeEmpruntCountOutputType
   */

  export type DemandeEmpruntCountOutputType = {
    notification: number
  }

  export type DemandeEmpruntCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | DemandeEmpruntCountOutputTypeCountNotificationArgs
  }

  // Custom InputTypes
  /**
   * DemandeEmpruntCountOutputType without action
   */
  export type DemandeEmpruntCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmpruntCountOutputType
     */
    select?: DemandeEmpruntCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DemandeEmpruntCountOutputType without action
   */
  export type DemandeEmpruntCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type EquipementCountOutputType
   */

  export type EquipementCountOutputType = {
    emprunt: number
    demandeEmprunt: number
  }

  export type EquipementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprunt?: boolean | EquipementCountOutputTypeCountEmpruntArgs
    demandeEmprunt?: boolean | EquipementCountOutputTypeCountDemandeEmpruntArgs
  }

  // Custom InputTypes
  /**
   * EquipementCountOutputType without action
   */
  export type EquipementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipementCountOutputType
     */
    select?: EquipementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipementCountOutputType without action
   */
  export type EquipementCountOutputTypeCountEmpruntArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpruntWhereInput
  }

  /**
   * EquipementCountOutputType without action
   */
  export type EquipementCountOutputTypeCountDemandeEmpruntArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeEmpruntWhereInput
  }


  /**
   * Count Type ConsommableCountOutputType
   */

  export type ConsommableCountOutputType = {
    notification: number
    utilisationsConsommable: number
  }

  export type ConsommableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | ConsommableCountOutputTypeCountNotificationArgs
    utilisationsConsommable?: boolean | ConsommableCountOutputTypeCountUtilisationsConsommableArgs
  }

  // Custom InputTypes
  /**
   * ConsommableCountOutputType without action
   */
  export type ConsommableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsommableCountOutputType
     */
    select?: ConsommableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsommableCountOutputType without action
   */
  export type ConsommableCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * ConsommableCountOutputType without action
   */
  export type ConsommableCountOutputTypeCountUtilisationsConsommableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisationConsommableWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurAvgAggregateOutputType = {
    id: number | null
  }

  export type UtilisateurSumAggregateOutputType = {
    id: number | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    motdepasse: string | null
    role: $Enums.RoleUtilisateur | null
    photo: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    motdepasse: string | null
    role: $Enums.RoleUtilisateur | null
    photo: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    motdepasse: number
    role: number
    photo: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type UtilisateurAvgAggregateInputType = {
    id?: true
  }

  export type UtilisateurSumAggregateInputType = {
    id?: true
  }

  export type UtilisateurMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    motdepasse?: true
    role?: true
    photo?: true
    createdAt?: true
    updateAt?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    motdepasse?: true
    role?: true
    photo?: true
    createdAt?: true
    updateAt?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    motdepasse?: true
    role?: true
    photo?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _avg?: UtilisateurAvgAggregateInputType
    _sum?: UtilisateurSumAggregateInputType
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: number
    nom: string
    prenom: string
    email: string
    motdepasse: string
    role: $Enums.RoleUtilisateur
    photo: string | null
    createdAt: Date
    updateAt: Date
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    motdepasse?: boolean
    role?: boolean
    photo?: boolean
    createdAt?: boolean
    updateAt?: boolean
    emprunts?: boolean | Utilisateur$empruntsArgs<ExtArgs>
    demandeEmprunt?: boolean | Utilisateur$demandeEmpruntArgs<ExtArgs>
    utilisationsConsommable?: boolean | Utilisateur$utilisationsConsommableArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    motdepasse?: boolean
    role?: boolean
    photo?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    motdepasse?: boolean
    role?: boolean
    photo?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    motdepasse?: boolean
    role?: boolean
    photo?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "motdepasse" | "role" | "photo" | "createdAt" | "updateAt", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprunts?: boolean | Utilisateur$empruntsArgs<ExtArgs>
    demandeEmprunt?: boolean | Utilisateur$demandeEmpruntArgs<ExtArgs>
    utilisationsConsommable?: boolean | Utilisateur$utilisationsConsommableArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      emprunts: Prisma.$EmpruntPayload<ExtArgs>[]
      demandeEmprunt: Prisma.$DemandeEmpruntPayload<ExtArgs>[]
      utilisationsConsommable: Prisma.$UtilisationConsommablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      prenom: string
      email: string
      motdepasse: string
      role: $Enums.RoleUtilisateur
      photo: string | null
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {UtilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {UtilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.updateManyAndReturn({
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
    updateManyAndReturn<T extends UtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
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
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emprunts<T extends Utilisateur$empruntsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$empruntsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    demandeEmprunt<T extends Utilisateur$demandeEmpruntArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$demandeEmpruntArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandeEmpruntPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    utilisationsConsommable<T extends Utilisateur$utilisationsConsommableArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$utilisationsConsommableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisationConsommablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'Int'>
    readonly nom: FieldRef<"Utilisateur", 'String'>
    readonly prenom: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly motdepasse: FieldRef<"Utilisateur", 'String'>
    readonly role: FieldRef<"Utilisateur", 'RoleUtilisateur'>
    readonly photo: FieldRef<"Utilisateur", 'String'>
    readonly createdAt: FieldRef<"Utilisateur", 'DateTime'>
    readonly updateAt: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur createManyAndReturn
   */
  export type UtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur updateManyAndReturn
   */
  export type UtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.emprunts
   */
  export type Utilisateur$empruntsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    where?: EmpruntWhereInput
    orderBy?: EmpruntOrderByWithRelationInput | EmpruntOrderByWithRelationInput[]
    cursor?: EmpruntWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmpruntScalarFieldEnum | EmpruntScalarFieldEnum[]
  }

  /**
   * Utilisateur.demandeEmprunt
   */
  export type Utilisateur$demandeEmpruntArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntInclude<ExtArgs> | null
    where?: DemandeEmpruntWhereInput
    orderBy?: DemandeEmpruntOrderByWithRelationInput | DemandeEmpruntOrderByWithRelationInput[]
    cursor?: DemandeEmpruntWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandeEmpruntScalarFieldEnum | DemandeEmpruntScalarFieldEnum[]
  }

  /**
   * Utilisateur.utilisationsConsommable
   */
  export type Utilisateur$utilisationsConsommableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisationConsommable
     */
    select?: UtilisationConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilisationConsommable
     */
    omit?: UtilisationConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisationConsommableInclude<ExtArgs> | null
    where?: UtilisationConsommableWhereInput
    orderBy?: UtilisationConsommableOrderByWithRelationInput | UtilisationConsommableOrderByWithRelationInput[]
    cursor?: UtilisationConsommableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UtilisationConsommableScalarFieldEnum | UtilisationConsommableScalarFieldEnum[]
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Emprunt
   */

  export type AggregateEmprunt = {
    _count: EmpruntCountAggregateOutputType | null
    _avg: EmpruntAvgAggregateOutputType | null
    _sum: EmpruntSumAggregateOutputType | null
    _min: EmpruntMinAggregateOutputType | null
    _max: EmpruntMaxAggregateOutputType | null
  }

  export type EmpruntAvgAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    equipementId: number | null
  }

  export type EmpruntSumAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    equipementId: number | null
  }

  export type EmpruntMinAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    equipementId: number | null
    dateEmprunt: Date | null
    dateRetourPrevu: Date | null
    dateRetourEffective: Date | null
    usage: string | null
    statut: $Enums.Statut | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmpruntMaxAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    equipementId: number | null
    dateEmprunt: Date | null
    dateRetourPrevu: Date | null
    dateRetourEffective: Date | null
    usage: string | null
    statut: $Enums.Statut | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmpruntCountAggregateOutputType = {
    id: number
    utilisateurId: number
    equipementId: number
    dateEmprunt: number
    dateRetourPrevu: number
    dateRetourEffective: number
    usage: number
    statut: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmpruntAvgAggregateInputType = {
    id?: true
    utilisateurId?: true
    equipementId?: true
  }

  export type EmpruntSumAggregateInputType = {
    id?: true
    utilisateurId?: true
    equipementId?: true
  }

  export type EmpruntMinAggregateInputType = {
    id?: true
    utilisateurId?: true
    equipementId?: true
    dateEmprunt?: true
    dateRetourPrevu?: true
    dateRetourEffective?: true
    usage?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmpruntMaxAggregateInputType = {
    id?: true
    utilisateurId?: true
    equipementId?: true
    dateEmprunt?: true
    dateRetourPrevu?: true
    dateRetourEffective?: true
    usage?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmpruntCountAggregateInputType = {
    id?: true
    utilisateurId?: true
    equipementId?: true
    dateEmprunt?: true
    dateRetourPrevu?: true
    dateRetourEffective?: true
    usage?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmpruntAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprunt to aggregate.
     */
    where?: EmpruntWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprunts to fetch.
     */
    orderBy?: EmpruntOrderByWithRelationInput | EmpruntOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpruntWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprunts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emprunts
    **/
    _count?: true | EmpruntCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpruntAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpruntSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpruntMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpruntMaxAggregateInputType
  }

  export type GetEmpruntAggregateType<T extends EmpruntAggregateArgs> = {
        [P in keyof T & keyof AggregateEmprunt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmprunt[P]>
      : GetScalarType<T[P], AggregateEmprunt[P]>
  }




  export type EmpruntGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpruntWhereInput
    orderBy?: EmpruntOrderByWithAggregationInput | EmpruntOrderByWithAggregationInput[]
    by: EmpruntScalarFieldEnum[] | EmpruntScalarFieldEnum
    having?: EmpruntScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpruntCountAggregateInputType | true
    _avg?: EmpruntAvgAggregateInputType
    _sum?: EmpruntSumAggregateInputType
    _min?: EmpruntMinAggregateInputType
    _max?: EmpruntMaxAggregateInputType
  }

  export type EmpruntGroupByOutputType = {
    id: number
    utilisateurId: number
    equipementId: number
    dateEmprunt: Date
    dateRetourPrevu: Date
    dateRetourEffective: Date | null
    usage: string
    statut: $Enums.Statut
    createdAt: Date
    updatedAt: Date
    _count: EmpruntCountAggregateOutputType | null
    _avg: EmpruntAvgAggregateOutputType | null
    _sum: EmpruntSumAggregateOutputType | null
    _min: EmpruntMinAggregateOutputType | null
    _max: EmpruntMaxAggregateOutputType | null
  }

  type GetEmpruntGroupByPayload<T extends EmpruntGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpruntGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpruntGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpruntGroupByOutputType[P]>
            : GetScalarType<T[P], EmpruntGroupByOutputType[P]>
        }
      >
    >


  export type EmpruntSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    equipementId?: boolean
    dateEmprunt?: boolean
    dateRetourPrevu?: boolean
    dateRetourEffective?: boolean
    usage?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    equipement?: boolean | EquipementDefaultArgs<ExtArgs>
    notification?: boolean | Emprunt$notificationArgs<ExtArgs>
    _count?: boolean | EmpruntCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprunt"]>

  export type EmpruntSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    equipementId?: boolean
    dateEmprunt?: boolean
    dateRetourPrevu?: boolean
    dateRetourEffective?: boolean
    usage?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    equipement?: boolean | EquipementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprunt"]>

  export type EmpruntSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    equipementId?: boolean
    dateEmprunt?: boolean
    dateRetourPrevu?: boolean
    dateRetourEffective?: boolean
    usage?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    equipement?: boolean | EquipementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprunt"]>

  export type EmpruntSelectScalar = {
    id?: boolean
    utilisateurId?: boolean
    equipementId?: boolean
    dateEmprunt?: boolean
    dateRetourPrevu?: boolean
    dateRetourEffective?: boolean
    usage?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmpruntOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "utilisateurId" | "equipementId" | "dateEmprunt" | "dateRetourPrevu" | "dateRetourEffective" | "usage" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["emprunt"]>
  export type EmpruntInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    equipement?: boolean | EquipementDefaultArgs<ExtArgs>
    notification?: boolean | Emprunt$notificationArgs<ExtArgs>
    _count?: boolean | EmpruntCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpruntIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    equipement?: boolean | EquipementDefaultArgs<ExtArgs>
  }
  export type EmpruntIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    equipement?: boolean | EquipementDefaultArgs<ExtArgs>
  }

  export type $EmpruntPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emprunt"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      equipement: Prisma.$EquipementPayload<ExtArgs>
      notification: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      utilisateurId: number
      equipementId: number
      dateEmprunt: Date
      dateRetourPrevu: Date
      dateRetourEffective: Date | null
      usage: string
      statut: $Enums.Statut
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emprunt"]>
    composites: {}
  }

  type EmpruntGetPayload<S extends boolean | null | undefined | EmpruntDefaultArgs> = $Result.GetResult<Prisma.$EmpruntPayload, S>

  type EmpruntCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpruntFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpruntCountAggregateInputType | true
    }

  export interface EmpruntDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emprunt'], meta: { name: 'Emprunt' } }
    /**
     * Find zero or one Emprunt that matches the filter.
     * @param {EmpruntFindUniqueArgs} args - Arguments to find a Emprunt
     * @example
     * // Get one Emprunt
     * const emprunt = await prisma.emprunt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpruntFindUniqueArgs>(args: SelectSubset<T, EmpruntFindUniqueArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emprunt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpruntFindUniqueOrThrowArgs} args - Arguments to find a Emprunt
     * @example
     * // Get one Emprunt
     * const emprunt = await prisma.emprunt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpruntFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpruntFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprunt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntFindFirstArgs} args - Arguments to find a Emprunt
     * @example
     * // Get one Emprunt
     * const emprunt = await prisma.emprunt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpruntFindFirstArgs>(args?: SelectSubset<T, EmpruntFindFirstArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprunt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntFindFirstOrThrowArgs} args - Arguments to find a Emprunt
     * @example
     * // Get one Emprunt
     * const emprunt = await prisma.emprunt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpruntFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpruntFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emprunts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emprunts
     * const emprunts = await prisma.emprunt.findMany()
     * 
     * // Get first 10 Emprunts
     * const emprunts = await prisma.emprunt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empruntWithIdOnly = await prisma.emprunt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpruntFindManyArgs>(args?: SelectSubset<T, EmpruntFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emprunt.
     * @param {EmpruntCreateArgs} args - Arguments to create a Emprunt.
     * @example
     * // Create one Emprunt
     * const Emprunt = await prisma.emprunt.create({
     *   data: {
     *     // ... data to create a Emprunt
     *   }
     * })
     * 
     */
    create<T extends EmpruntCreateArgs>(args: SelectSubset<T, EmpruntCreateArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emprunts.
     * @param {EmpruntCreateManyArgs} args - Arguments to create many Emprunts.
     * @example
     * // Create many Emprunts
     * const emprunt = await prisma.emprunt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpruntCreateManyArgs>(args?: SelectSubset<T, EmpruntCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emprunts and returns the data saved in the database.
     * @param {EmpruntCreateManyAndReturnArgs} args - Arguments to create many Emprunts.
     * @example
     * // Create many Emprunts
     * const emprunt = await prisma.emprunt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emprunts and only return the `id`
     * const empruntWithIdOnly = await prisma.emprunt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpruntCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpruntCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emprunt.
     * @param {EmpruntDeleteArgs} args - Arguments to delete one Emprunt.
     * @example
     * // Delete one Emprunt
     * const Emprunt = await prisma.emprunt.delete({
     *   where: {
     *     // ... filter to delete one Emprunt
     *   }
     * })
     * 
     */
    delete<T extends EmpruntDeleteArgs>(args: SelectSubset<T, EmpruntDeleteArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emprunt.
     * @param {EmpruntUpdateArgs} args - Arguments to update one Emprunt.
     * @example
     * // Update one Emprunt
     * const emprunt = await prisma.emprunt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpruntUpdateArgs>(args: SelectSubset<T, EmpruntUpdateArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emprunts.
     * @param {EmpruntDeleteManyArgs} args - Arguments to filter Emprunts to delete.
     * @example
     * // Delete a few Emprunts
     * const { count } = await prisma.emprunt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpruntDeleteManyArgs>(args?: SelectSubset<T, EmpruntDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprunts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emprunts
     * const emprunt = await prisma.emprunt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpruntUpdateManyArgs>(args: SelectSubset<T, EmpruntUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprunts and returns the data updated in the database.
     * @param {EmpruntUpdateManyAndReturnArgs} args - Arguments to update many Emprunts.
     * @example
     * // Update many Emprunts
     * const emprunt = await prisma.emprunt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emprunts and only return the `id`
     * const empruntWithIdOnly = await prisma.emprunt.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmpruntUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpruntUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emprunt.
     * @param {EmpruntUpsertArgs} args - Arguments to update or create a Emprunt.
     * @example
     * // Update or create a Emprunt
     * const emprunt = await prisma.emprunt.upsert({
     *   create: {
     *     // ... data to create a Emprunt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emprunt we want to update
     *   }
     * })
     */
    upsert<T extends EmpruntUpsertArgs>(args: SelectSubset<T, EmpruntUpsertArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emprunts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntCountArgs} args - Arguments to filter Emprunts to count.
     * @example
     * // Count the number of Emprunts
     * const count = await prisma.emprunt.count({
     *   where: {
     *     // ... the filter for the Emprunts we want to count
     *   }
     * })
    **/
    count<T extends EmpruntCountArgs>(
      args?: Subset<T, EmpruntCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpruntCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emprunt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpruntAggregateArgs>(args: Subset<T, EmpruntAggregateArgs>): Prisma.PrismaPromise<GetEmpruntAggregateType<T>>

    /**
     * Group by Emprunt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntGroupByArgs} args - Group by arguments.
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
      T extends EmpruntGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpruntGroupByArgs['orderBy'] }
        : { orderBy?: EmpruntGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpruntGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpruntGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emprunt model
   */
  readonly fields: EmpruntFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emprunt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpruntClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipement<T extends EquipementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipementDefaultArgs<ExtArgs>>): Prisma__EquipementClient<$Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notification<T extends Emprunt$notificationArgs<ExtArgs> = {}>(args?: Subset<T, Emprunt$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Emprunt model
   */
  interface EmpruntFieldRefs {
    readonly id: FieldRef<"Emprunt", 'Int'>
    readonly utilisateurId: FieldRef<"Emprunt", 'Int'>
    readonly equipementId: FieldRef<"Emprunt", 'Int'>
    readonly dateEmprunt: FieldRef<"Emprunt", 'DateTime'>
    readonly dateRetourPrevu: FieldRef<"Emprunt", 'DateTime'>
    readonly dateRetourEffective: FieldRef<"Emprunt", 'DateTime'>
    readonly usage: FieldRef<"Emprunt", 'String'>
    readonly statut: FieldRef<"Emprunt", 'Statut'>
    readonly createdAt: FieldRef<"Emprunt", 'DateTime'>
    readonly updatedAt: FieldRef<"Emprunt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Emprunt findUnique
   */
  export type EmpruntFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * Filter, which Emprunt to fetch.
     */
    where: EmpruntWhereUniqueInput
  }

  /**
   * Emprunt findUniqueOrThrow
   */
  export type EmpruntFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * Filter, which Emprunt to fetch.
     */
    where: EmpruntWhereUniqueInput
  }

  /**
   * Emprunt findFirst
   */
  export type EmpruntFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * Filter, which Emprunt to fetch.
     */
    where?: EmpruntWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprunts to fetch.
     */
    orderBy?: EmpruntOrderByWithRelationInput | EmpruntOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprunts.
     */
    cursor?: EmpruntWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprunts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprunts.
     */
    distinct?: EmpruntScalarFieldEnum | EmpruntScalarFieldEnum[]
  }

  /**
   * Emprunt findFirstOrThrow
   */
  export type EmpruntFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * Filter, which Emprunt to fetch.
     */
    where?: EmpruntWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprunts to fetch.
     */
    orderBy?: EmpruntOrderByWithRelationInput | EmpruntOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprunts.
     */
    cursor?: EmpruntWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprunts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprunts.
     */
    distinct?: EmpruntScalarFieldEnum | EmpruntScalarFieldEnum[]
  }

  /**
   * Emprunt findMany
   */
  export type EmpruntFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * Filter, which Emprunts to fetch.
     */
    where?: EmpruntWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprunts to fetch.
     */
    orderBy?: EmpruntOrderByWithRelationInput | EmpruntOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emprunts.
     */
    cursor?: EmpruntWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprunts.
     */
    skip?: number
    distinct?: EmpruntScalarFieldEnum | EmpruntScalarFieldEnum[]
  }

  /**
   * Emprunt create
   */
  export type EmpruntCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * The data needed to create a Emprunt.
     */
    data: XOR<EmpruntCreateInput, EmpruntUncheckedCreateInput>
  }

  /**
   * Emprunt createMany
   */
  export type EmpruntCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emprunts.
     */
    data: EmpruntCreateManyInput | EmpruntCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emprunt createManyAndReturn
   */
  export type EmpruntCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * The data used to create many Emprunts.
     */
    data: EmpruntCreateManyInput | EmpruntCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprunt update
   */
  export type EmpruntUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * The data needed to update a Emprunt.
     */
    data: XOR<EmpruntUpdateInput, EmpruntUncheckedUpdateInput>
    /**
     * Choose, which Emprunt to update.
     */
    where: EmpruntWhereUniqueInput
  }

  /**
   * Emprunt updateMany
   */
  export type EmpruntUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emprunts.
     */
    data: XOR<EmpruntUpdateManyMutationInput, EmpruntUncheckedUpdateManyInput>
    /**
     * Filter which Emprunts to update
     */
    where?: EmpruntWhereInput
    /**
     * Limit how many Emprunts to update.
     */
    limit?: number
  }

  /**
   * Emprunt updateManyAndReturn
   */
  export type EmpruntUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * The data used to update Emprunts.
     */
    data: XOR<EmpruntUpdateManyMutationInput, EmpruntUncheckedUpdateManyInput>
    /**
     * Filter which Emprunts to update
     */
    where?: EmpruntWhereInput
    /**
     * Limit how many Emprunts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprunt upsert
   */
  export type EmpruntUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * The filter to search for the Emprunt to update in case it exists.
     */
    where: EmpruntWhereUniqueInput
    /**
     * In case the Emprunt found by the `where` argument doesn't exist, create a new Emprunt with this data.
     */
    create: XOR<EmpruntCreateInput, EmpruntUncheckedCreateInput>
    /**
     * In case the Emprunt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpruntUpdateInput, EmpruntUncheckedUpdateInput>
  }

  /**
   * Emprunt delete
   */
  export type EmpruntDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * Filter which Emprunt to delete.
     */
    where: EmpruntWhereUniqueInput
  }

  /**
   * Emprunt deleteMany
   */
  export type EmpruntDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprunts to delete
     */
    where?: EmpruntWhereInput
    /**
     * Limit how many Emprunts to delete.
     */
    limit?: number
  }

  /**
   * Emprunt.notification
   */
  export type Emprunt$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Emprunt without action
   */
  export type EmpruntDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
  }


  /**
   * Model DemandeEmprunt
   */

  export type AggregateDemandeEmprunt = {
    _count: DemandeEmpruntCountAggregateOutputType | null
    _avg: DemandeEmpruntAvgAggregateOutputType | null
    _sum: DemandeEmpruntSumAggregateOutputType | null
    _min: DemandeEmpruntMinAggregateOutputType | null
    _max: DemandeEmpruntMaxAggregateOutputType | null
  }

  export type DemandeEmpruntAvgAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    equipementId: number | null
  }

  export type DemandeEmpruntSumAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    equipementId: number | null
  }

  export type DemandeEmpruntMinAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    equipementId: number | null
    dateDemande: Date | null
    dateRetourPrevu: Date | null
    usage: string | null
    statut: $Enums.StatutDemande | null
    type: $Enums.TypeDemande | null
    motif: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DemandeEmpruntMaxAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    equipementId: number | null
    dateDemande: Date | null
    dateRetourPrevu: Date | null
    usage: string | null
    statut: $Enums.StatutDemande | null
    type: $Enums.TypeDemande | null
    motif: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DemandeEmpruntCountAggregateOutputType = {
    id: number
    utilisateurId: number
    equipementId: number
    dateDemande: number
    dateRetourPrevu: number
    usage: number
    statut: number
    type: number
    motif: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DemandeEmpruntAvgAggregateInputType = {
    id?: true
    utilisateurId?: true
    equipementId?: true
  }

  export type DemandeEmpruntSumAggregateInputType = {
    id?: true
    utilisateurId?: true
    equipementId?: true
  }

  export type DemandeEmpruntMinAggregateInputType = {
    id?: true
    utilisateurId?: true
    equipementId?: true
    dateDemande?: true
    dateRetourPrevu?: true
    usage?: true
    statut?: true
    type?: true
    motif?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DemandeEmpruntMaxAggregateInputType = {
    id?: true
    utilisateurId?: true
    equipementId?: true
    dateDemande?: true
    dateRetourPrevu?: true
    usage?: true
    statut?: true
    type?: true
    motif?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DemandeEmpruntCountAggregateInputType = {
    id?: true
    utilisateurId?: true
    equipementId?: true
    dateDemande?: true
    dateRetourPrevu?: true
    usage?: true
    statut?: true
    type?: true
    motif?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DemandeEmpruntAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemandeEmprunt to aggregate.
     */
    where?: DemandeEmpruntWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemandeEmprunts to fetch.
     */
    orderBy?: DemandeEmpruntOrderByWithRelationInput | DemandeEmpruntOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemandeEmpruntWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemandeEmprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemandeEmprunts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DemandeEmprunts
    **/
    _count?: true | DemandeEmpruntCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DemandeEmpruntAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DemandeEmpruntSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemandeEmpruntMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemandeEmpruntMaxAggregateInputType
  }

  export type GetDemandeEmpruntAggregateType<T extends DemandeEmpruntAggregateArgs> = {
        [P in keyof T & keyof AggregateDemandeEmprunt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemandeEmprunt[P]>
      : GetScalarType<T[P], AggregateDemandeEmprunt[P]>
  }




  export type DemandeEmpruntGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeEmpruntWhereInput
    orderBy?: DemandeEmpruntOrderByWithAggregationInput | DemandeEmpruntOrderByWithAggregationInput[]
    by: DemandeEmpruntScalarFieldEnum[] | DemandeEmpruntScalarFieldEnum
    having?: DemandeEmpruntScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemandeEmpruntCountAggregateInputType | true
    _avg?: DemandeEmpruntAvgAggregateInputType
    _sum?: DemandeEmpruntSumAggregateInputType
    _min?: DemandeEmpruntMinAggregateInputType
    _max?: DemandeEmpruntMaxAggregateInputType
  }

  export type DemandeEmpruntGroupByOutputType = {
    id: number
    utilisateurId: number
    equipementId: number
    dateDemande: Date
    dateRetourPrevu: Date
    usage: string
    statut: $Enums.StatutDemande
    type: $Enums.TypeDemande
    motif: string | null
    createdAt: Date
    updatedAt: Date
    _count: DemandeEmpruntCountAggregateOutputType | null
    _avg: DemandeEmpruntAvgAggregateOutputType | null
    _sum: DemandeEmpruntSumAggregateOutputType | null
    _min: DemandeEmpruntMinAggregateOutputType | null
    _max: DemandeEmpruntMaxAggregateOutputType | null
  }

  type GetDemandeEmpruntGroupByPayload<T extends DemandeEmpruntGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemandeEmpruntGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemandeEmpruntGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemandeEmpruntGroupByOutputType[P]>
            : GetScalarType<T[P], DemandeEmpruntGroupByOutputType[P]>
        }
      >
    >


  export type DemandeEmpruntSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    equipementId?: boolean
    dateDemande?: boolean
    dateRetourPrevu?: boolean
    usage?: boolean
    statut?: boolean
    type?: boolean
    motif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    equipement?: boolean | EquipementDefaultArgs<ExtArgs>
    notification?: boolean | DemandeEmprunt$notificationArgs<ExtArgs>
    _count?: boolean | DemandeEmpruntCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demandeEmprunt"]>

  export type DemandeEmpruntSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    equipementId?: boolean
    dateDemande?: boolean
    dateRetourPrevu?: boolean
    usage?: boolean
    statut?: boolean
    type?: boolean
    motif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    equipement?: boolean | EquipementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demandeEmprunt"]>

  export type DemandeEmpruntSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    equipementId?: boolean
    dateDemande?: boolean
    dateRetourPrevu?: boolean
    usage?: boolean
    statut?: boolean
    type?: boolean
    motif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    equipement?: boolean | EquipementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demandeEmprunt"]>

  export type DemandeEmpruntSelectScalar = {
    id?: boolean
    utilisateurId?: boolean
    equipementId?: boolean
    dateDemande?: boolean
    dateRetourPrevu?: boolean
    usage?: boolean
    statut?: boolean
    type?: boolean
    motif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DemandeEmpruntOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "utilisateurId" | "equipementId" | "dateDemande" | "dateRetourPrevu" | "usage" | "statut" | "type" | "motif" | "createdAt" | "updatedAt", ExtArgs["result"]["demandeEmprunt"]>
  export type DemandeEmpruntInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    equipement?: boolean | EquipementDefaultArgs<ExtArgs>
    notification?: boolean | DemandeEmprunt$notificationArgs<ExtArgs>
    _count?: boolean | DemandeEmpruntCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DemandeEmpruntIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    equipement?: boolean | EquipementDefaultArgs<ExtArgs>
  }
  export type DemandeEmpruntIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    equipement?: boolean | EquipementDefaultArgs<ExtArgs>
  }

  export type $DemandeEmpruntPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DemandeEmprunt"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      equipement: Prisma.$EquipementPayload<ExtArgs>
      notification: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      utilisateurId: number
      equipementId: number
      dateDemande: Date
      dateRetourPrevu: Date
      usage: string
      statut: $Enums.StatutDemande
      type: $Enums.TypeDemande
      motif: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["demandeEmprunt"]>
    composites: {}
  }

  type DemandeEmpruntGetPayload<S extends boolean | null | undefined | DemandeEmpruntDefaultArgs> = $Result.GetResult<Prisma.$DemandeEmpruntPayload, S>

  type DemandeEmpruntCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemandeEmpruntFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemandeEmpruntCountAggregateInputType | true
    }

  export interface DemandeEmpruntDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DemandeEmprunt'], meta: { name: 'DemandeEmprunt' } }
    /**
     * Find zero or one DemandeEmprunt that matches the filter.
     * @param {DemandeEmpruntFindUniqueArgs} args - Arguments to find a DemandeEmprunt
     * @example
     * // Get one DemandeEmprunt
     * const demandeEmprunt = await prisma.demandeEmprunt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemandeEmpruntFindUniqueArgs>(args: SelectSubset<T, DemandeEmpruntFindUniqueArgs<ExtArgs>>): Prisma__DemandeEmpruntClient<$Result.GetResult<Prisma.$DemandeEmpruntPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DemandeEmprunt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemandeEmpruntFindUniqueOrThrowArgs} args - Arguments to find a DemandeEmprunt
     * @example
     * // Get one DemandeEmprunt
     * const demandeEmprunt = await prisma.demandeEmprunt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemandeEmpruntFindUniqueOrThrowArgs>(args: SelectSubset<T, DemandeEmpruntFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemandeEmpruntClient<$Result.GetResult<Prisma.$DemandeEmpruntPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DemandeEmprunt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeEmpruntFindFirstArgs} args - Arguments to find a DemandeEmprunt
     * @example
     * // Get one DemandeEmprunt
     * const demandeEmprunt = await prisma.demandeEmprunt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemandeEmpruntFindFirstArgs>(args?: SelectSubset<T, DemandeEmpruntFindFirstArgs<ExtArgs>>): Prisma__DemandeEmpruntClient<$Result.GetResult<Prisma.$DemandeEmpruntPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DemandeEmprunt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeEmpruntFindFirstOrThrowArgs} args - Arguments to find a DemandeEmprunt
     * @example
     * // Get one DemandeEmprunt
     * const demandeEmprunt = await prisma.demandeEmprunt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemandeEmpruntFindFirstOrThrowArgs>(args?: SelectSubset<T, DemandeEmpruntFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemandeEmpruntClient<$Result.GetResult<Prisma.$DemandeEmpruntPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DemandeEmprunts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeEmpruntFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DemandeEmprunts
     * const demandeEmprunts = await prisma.demandeEmprunt.findMany()
     * 
     * // Get first 10 DemandeEmprunts
     * const demandeEmprunts = await prisma.demandeEmprunt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demandeEmpruntWithIdOnly = await prisma.demandeEmprunt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DemandeEmpruntFindManyArgs>(args?: SelectSubset<T, DemandeEmpruntFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandeEmpruntPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DemandeEmprunt.
     * @param {DemandeEmpruntCreateArgs} args - Arguments to create a DemandeEmprunt.
     * @example
     * // Create one DemandeEmprunt
     * const DemandeEmprunt = await prisma.demandeEmprunt.create({
     *   data: {
     *     // ... data to create a DemandeEmprunt
     *   }
     * })
     * 
     */
    create<T extends DemandeEmpruntCreateArgs>(args: SelectSubset<T, DemandeEmpruntCreateArgs<ExtArgs>>): Prisma__DemandeEmpruntClient<$Result.GetResult<Prisma.$DemandeEmpruntPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DemandeEmprunts.
     * @param {DemandeEmpruntCreateManyArgs} args - Arguments to create many DemandeEmprunts.
     * @example
     * // Create many DemandeEmprunts
     * const demandeEmprunt = await prisma.demandeEmprunt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemandeEmpruntCreateManyArgs>(args?: SelectSubset<T, DemandeEmpruntCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DemandeEmprunts and returns the data saved in the database.
     * @param {DemandeEmpruntCreateManyAndReturnArgs} args - Arguments to create many DemandeEmprunts.
     * @example
     * // Create many DemandeEmprunts
     * const demandeEmprunt = await prisma.demandeEmprunt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DemandeEmprunts and only return the `id`
     * const demandeEmpruntWithIdOnly = await prisma.demandeEmprunt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DemandeEmpruntCreateManyAndReturnArgs>(args?: SelectSubset<T, DemandeEmpruntCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandeEmpruntPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DemandeEmprunt.
     * @param {DemandeEmpruntDeleteArgs} args - Arguments to delete one DemandeEmprunt.
     * @example
     * // Delete one DemandeEmprunt
     * const DemandeEmprunt = await prisma.demandeEmprunt.delete({
     *   where: {
     *     // ... filter to delete one DemandeEmprunt
     *   }
     * })
     * 
     */
    delete<T extends DemandeEmpruntDeleteArgs>(args: SelectSubset<T, DemandeEmpruntDeleteArgs<ExtArgs>>): Prisma__DemandeEmpruntClient<$Result.GetResult<Prisma.$DemandeEmpruntPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DemandeEmprunt.
     * @param {DemandeEmpruntUpdateArgs} args - Arguments to update one DemandeEmprunt.
     * @example
     * // Update one DemandeEmprunt
     * const demandeEmprunt = await prisma.demandeEmprunt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemandeEmpruntUpdateArgs>(args: SelectSubset<T, DemandeEmpruntUpdateArgs<ExtArgs>>): Prisma__DemandeEmpruntClient<$Result.GetResult<Prisma.$DemandeEmpruntPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DemandeEmprunts.
     * @param {DemandeEmpruntDeleteManyArgs} args - Arguments to filter DemandeEmprunts to delete.
     * @example
     * // Delete a few DemandeEmprunts
     * const { count } = await prisma.demandeEmprunt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemandeEmpruntDeleteManyArgs>(args?: SelectSubset<T, DemandeEmpruntDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemandeEmprunts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeEmpruntUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DemandeEmprunts
     * const demandeEmprunt = await prisma.demandeEmprunt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemandeEmpruntUpdateManyArgs>(args: SelectSubset<T, DemandeEmpruntUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemandeEmprunts and returns the data updated in the database.
     * @param {DemandeEmpruntUpdateManyAndReturnArgs} args - Arguments to update many DemandeEmprunts.
     * @example
     * // Update many DemandeEmprunts
     * const demandeEmprunt = await prisma.demandeEmprunt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DemandeEmprunts and only return the `id`
     * const demandeEmpruntWithIdOnly = await prisma.demandeEmprunt.updateManyAndReturn({
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
    updateManyAndReturn<T extends DemandeEmpruntUpdateManyAndReturnArgs>(args: SelectSubset<T, DemandeEmpruntUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandeEmpruntPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DemandeEmprunt.
     * @param {DemandeEmpruntUpsertArgs} args - Arguments to update or create a DemandeEmprunt.
     * @example
     * // Update or create a DemandeEmprunt
     * const demandeEmprunt = await prisma.demandeEmprunt.upsert({
     *   create: {
     *     // ... data to create a DemandeEmprunt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DemandeEmprunt we want to update
     *   }
     * })
     */
    upsert<T extends DemandeEmpruntUpsertArgs>(args: SelectSubset<T, DemandeEmpruntUpsertArgs<ExtArgs>>): Prisma__DemandeEmpruntClient<$Result.GetResult<Prisma.$DemandeEmpruntPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DemandeEmprunts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeEmpruntCountArgs} args - Arguments to filter DemandeEmprunts to count.
     * @example
     * // Count the number of DemandeEmprunts
     * const count = await prisma.demandeEmprunt.count({
     *   where: {
     *     // ... the filter for the DemandeEmprunts we want to count
     *   }
     * })
    **/
    count<T extends DemandeEmpruntCountArgs>(
      args?: Subset<T, DemandeEmpruntCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemandeEmpruntCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DemandeEmprunt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeEmpruntAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DemandeEmpruntAggregateArgs>(args: Subset<T, DemandeEmpruntAggregateArgs>): Prisma.PrismaPromise<GetDemandeEmpruntAggregateType<T>>

    /**
     * Group by DemandeEmprunt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeEmpruntGroupByArgs} args - Group by arguments.
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
      T extends DemandeEmpruntGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemandeEmpruntGroupByArgs['orderBy'] }
        : { orderBy?: DemandeEmpruntGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DemandeEmpruntGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemandeEmpruntGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DemandeEmprunt model
   */
  readonly fields: DemandeEmpruntFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DemandeEmprunt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemandeEmpruntClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipement<T extends EquipementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipementDefaultArgs<ExtArgs>>): Prisma__EquipementClient<$Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notification<T extends DemandeEmprunt$notificationArgs<ExtArgs> = {}>(args?: Subset<T, DemandeEmprunt$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DemandeEmprunt model
   */
  interface DemandeEmpruntFieldRefs {
    readonly id: FieldRef<"DemandeEmprunt", 'Int'>
    readonly utilisateurId: FieldRef<"DemandeEmprunt", 'Int'>
    readonly equipementId: FieldRef<"DemandeEmprunt", 'Int'>
    readonly dateDemande: FieldRef<"DemandeEmprunt", 'DateTime'>
    readonly dateRetourPrevu: FieldRef<"DemandeEmprunt", 'DateTime'>
    readonly usage: FieldRef<"DemandeEmprunt", 'String'>
    readonly statut: FieldRef<"DemandeEmprunt", 'StatutDemande'>
    readonly type: FieldRef<"DemandeEmprunt", 'TypeDemande'>
    readonly motif: FieldRef<"DemandeEmprunt", 'String'>
    readonly createdAt: FieldRef<"DemandeEmprunt", 'DateTime'>
    readonly updatedAt: FieldRef<"DemandeEmprunt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DemandeEmprunt findUnique
   */
  export type DemandeEmpruntFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntInclude<ExtArgs> | null
    /**
     * Filter, which DemandeEmprunt to fetch.
     */
    where: DemandeEmpruntWhereUniqueInput
  }

  /**
   * DemandeEmprunt findUniqueOrThrow
   */
  export type DemandeEmpruntFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntInclude<ExtArgs> | null
    /**
     * Filter, which DemandeEmprunt to fetch.
     */
    where: DemandeEmpruntWhereUniqueInput
  }

  /**
   * DemandeEmprunt findFirst
   */
  export type DemandeEmpruntFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntInclude<ExtArgs> | null
    /**
     * Filter, which DemandeEmprunt to fetch.
     */
    where?: DemandeEmpruntWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemandeEmprunts to fetch.
     */
    orderBy?: DemandeEmpruntOrderByWithRelationInput | DemandeEmpruntOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemandeEmprunts.
     */
    cursor?: DemandeEmpruntWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemandeEmprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemandeEmprunts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemandeEmprunts.
     */
    distinct?: DemandeEmpruntScalarFieldEnum | DemandeEmpruntScalarFieldEnum[]
  }

  /**
   * DemandeEmprunt findFirstOrThrow
   */
  export type DemandeEmpruntFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntInclude<ExtArgs> | null
    /**
     * Filter, which DemandeEmprunt to fetch.
     */
    where?: DemandeEmpruntWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemandeEmprunts to fetch.
     */
    orderBy?: DemandeEmpruntOrderByWithRelationInput | DemandeEmpruntOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemandeEmprunts.
     */
    cursor?: DemandeEmpruntWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemandeEmprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemandeEmprunts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemandeEmprunts.
     */
    distinct?: DemandeEmpruntScalarFieldEnum | DemandeEmpruntScalarFieldEnum[]
  }

  /**
   * DemandeEmprunt findMany
   */
  export type DemandeEmpruntFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntInclude<ExtArgs> | null
    /**
     * Filter, which DemandeEmprunts to fetch.
     */
    where?: DemandeEmpruntWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemandeEmprunts to fetch.
     */
    orderBy?: DemandeEmpruntOrderByWithRelationInput | DemandeEmpruntOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DemandeEmprunts.
     */
    cursor?: DemandeEmpruntWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemandeEmprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemandeEmprunts.
     */
    skip?: number
    distinct?: DemandeEmpruntScalarFieldEnum | DemandeEmpruntScalarFieldEnum[]
  }

  /**
   * DemandeEmprunt create
   */
  export type DemandeEmpruntCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntInclude<ExtArgs> | null
    /**
     * The data needed to create a DemandeEmprunt.
     */
    data: XOR<DemandeEmpruntCreateInput, DemandeEmpruntUncheckedCreateInput>
  }

  /**
   * DemandeEmprunt createMany
   */
  export type DemandeEmpruntCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DemandeEmprunts.
     */
    data: DemandeEmpruntCreateManyInput | DemandeEmpruntCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DemandeEmprunt createManyAndReturn
   */
  export type DemandeEmpruntCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * The data used to create many DemandeEmprunts.
     */
    data: DemandeEmpruntCreateManyInput | DemandeEmpruntCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DemandeEmprunt update
   */
  export type DemandeEmpruntUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntInclude<ExtArgs> | null
    /**
     * The data needed to update a DemandeEmprunt.
     */
    data: XOR<DemandeEmpruntUpdateInput, DemandeEmpruntUncheckedUpdateInput>
    /**
     * Choose, which DemandeEmprunt to update.
     */
    where: DemandeEmpruntWhereUniqueInput
  }

  /**
   * DemandeEmprunt updateMany
   */
  export type DemandeEmpruntUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DemandeEmprunts.
     */
    data: XOR<DemandeEmpruntUpdateManyMutationInput, DemandeEmpruntUncheckedUpdateManyInput>
    /**
     * Filter which DemandeEmprunts to update
     */
    where?: DemandeEmpruntWhereInput
    /**
     * Limit how many DemandeEmprunts to update.
     */
    limit?: number
  }

  /**
   * DemandeEmprunt updateManyAndReturn
   */
  export type DemandeEmpruntUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * The data used to update DemandeEmprunts.
     */
    data: XOR<DemandeEmpruntUpdateManyMutationInput, DemandeEmpruntUncheckedUpdateManyInput>
    /**
     * Filter which DemandeEmprunts to update
     */
    where?: DemandeEmpruntWhereInput
    /**
     * Limit how many DemandeEmprunts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DemandeEmprunt upsert
   */
  export type DemandeEmpruntUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntInclude<ExtArgs> | null
    /**
     * The filter to search for the DemandeEmprunt to update in case it exists.
     */
    where: DemandeEmpruntWhereUniqueInput
    /**
     * In case the DemandeEmprunt found by the `where` argument doesn't exist, create a new DemandeEmprunt with this data.
     */
    create: XOR<DemandeEmpruntCreateInput, DemandeEmpruntUncheckedCreateInput>
    /**
     * In case the DemandeEmprunt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemandeEmpruntUpdateInput, DemandeEmpruntUncheckedUpdateInput>
  }

  /**
   * DemandeEmprunt delete
   */
  export type DemandeEmpruntDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntInclude<ExtArgs> | null
    /**
     * Filter which DemandeEmprunt to delete.
     */
    where: DemandeEmpruntWhereUniqueInput
  }

  /**
   * DemandeEmprunt deleteMany
   */
  export type DemandeEmpruntDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemandeEmprunts to delete
     */
    where?: DemandeEmpruntWhereInput
    /**
     * Limit how many DemandeEmprunts to delete.
     */
    limit?: number
  }

  /**
   * DemandeEmprunt.notification
   */
  export type DemandeEmprunt$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * DemandeEmprunt without action
   */
  export type DemandeEmpruntDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntInclude<ExtArgs> | null
  }


  /**
   * Model Equipement
   */

  export type AggregateEquipement = {
    _count: EquipementCountAggregateOutputType | null
    _avg: EquipementAvgAggregateOutputType | null
    _sum: EquipementSumAggregateOutputType | null
    _min: EquipementMinAggregateOutputType | null
    _max: EquipementMaxAggregateOutputType | null
  }

  export type EquipementAvgAggregateOutputType = {
    id: number | null
    prix: number | null
  }

  export type EquipementSumAggregateOutputType = {
    id: number | null
    prix: number | null
  }

  export type EquipementMinAggregateOutputType = {
    id: number | null
    nom: string | null
    numeroDeSerie: string | null
    marque: string | null
    disponibilite: $Enums.Disponibilite | null
    etatMateriel: $Enums.EtatMateriel | null
    obtention: $Enums.Obtention | null
    prix: number | null
    fournisseur: string | null
    donateur: string | null
    photo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipementMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    numeroDeSerie: string | null
    marque: string | null
    disponibilite: $Enums.Disponibilite | null
    etatMateriel: $Enums.EtatMateriel | null
    obtention: $Enums.Obtention | null
    prix: number | null
    fournisseur: string | null
    donateur: string | null
    photo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipementCountAggregateOutputType = {
    id: number
    nom: number
    numeroDeSerie: number
    marque: number
    disponibilite: number
    etatMateriel: number
    obtention: number
    prix: number
    fournisseur: number
    donateur: number
    photo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipementAvgAggregateInputType = {
    id?: true
    prix?: true
  }

  export type EquipementSumAggregateInputType = {
    id?: true
    prix?: true
  }

  export type EquipementMinAggregateInputType = {
    id?: true
    nom?: true
    numeroDeSerie?: true
    marque?: true
    disponibilite?: true
    etatMateriel?: true
    obtention?: true
    prix?: true
    fournisseur?: true
    donateur?: true
    photo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipementMaxAggregateInputType = {
    id?: true
    nom?: true
    numeroDeSerie?: true
    marque?: true
    disponibilite?: true
    etatMateriel?: true
    obtention?: true
    prix?: true
    fournisseur?: true
    donateur?: true
    photo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipementCountAggregateInputType = {
    id?: true
    nom?: true
    numeroDeSerie?: true
    marque?: true
    disponibilite?: true
    etatMateriel?: true
    obtention?: true
    prix?: true
    fournisseur?: true
    donateur?: true
    photo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipement to aggregate.
     */
    where?: EquipementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipements to fetch.
     */
    orderBy?: EquipementOrderByWithRelationInput | EquipementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipements
    **/
    _count?: true | EquipementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipementMaxAggregateInputType
  }

  export type GetEquipementAggregateType<T extends EquipementAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipement[P]>
      : GetScalarType<T[P], AggregateEquipement[P]>
  }




  export type EquipementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipementWhereInput
    orderBy?: EquipementOrderByWithAggregationInput | EquipementOrderByWithAggregationInput[]
    by: EquipementScalarFieldEnum[] | EquipementScalarFieldEnum
    having?: EquipementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipementCountAggregateInputType | true
    _avg?: EquipementAvgAggregateInputType
    _sum?: EquipementSumAggregateInputType
    _min?: EquipementMinAggregateInputType
    _max?: EquipementMaxAggregateInputType
  }

  export type EquipementGroupByOutputType = {
    id: number
    nom: string
    numeroDeSerie: string
    marque: string
    disponibilite: $Enums.Disponibilite
    etatMateriel: $Enums.EtatMateriel
    obtention: $Enums.Obtention
    prix: number
    fournisseur: string | null
    donateur: string | null
    photo: string | null
    createdAt: Date
    updatedAt: Date
    _count: EquipementCountAggregateOutputType | null
    _avg: EquipementAvgAggregateOutputType | null
    _sum: EquipementSumAggregateOutputType | null
    _min: EquipementMinAggregateOutputType | null
    _max: EquipementMaxAggregateOutputType | null
  }

  type GetEquipementGroupByPayload<T extends EquipementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipementGroupByOutputType[P]>
            : GetScalarType<T[P], EquipementGroupByOutputType[P]>
        }
      >
    >


  export type EquipementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    numeroDeSerie?: boolean
    marque?: boolean
    disponibilite?: boolean
    etatMateriel?: boolean
    obtention?: boolean
    prix?: boolean
    fournisseur?: boolean
    donateur?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emprunt?: boolean | Equipement$empruntArgs<ExtArgs>
    demandeEmprunt?: boolean | Equipement$demandeEmpruntArgs<ExtArgs>
    _count?: boolean | EquipementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipement"]>

  export type EquipementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    numeroDeSerie?: boolean
    marque?: boolean
    disponibilite?: boolean
    etatMateriel?: boolean
    obtention?: boolean
    prix?: boolean
    fournisseur?: boolean
    donateur?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipement"]>

  export type EquipementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    numeroDeSerie?: boolean
    marque?: boolean
    disponibilite?: boolean
    etatMateriel?: boolean
    obtention?: boolean
    prix?: boolean
    fournisseur?: boolean
    donateur?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipement"]>

  export type EquipementSelectScalar = {
    id?: boolean
    nom?: boolean
    numeroDeSerie?: boolean
    marque?: boolean
    disponibilite?: boolean
    etatMateriel?: boolean
    obtention?: boolean
    prix?: boolean
    fournisseur?: boolean
    donateur?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "numeroDeSerie" | "marque" | "disponibilite" | "etatMateriel" | "obtention" | "prix" | "fournisseur" | "donateur" | "photo" | "createdAt" | "updatedAt", ExtArgs["result"]["equipement"]>
  export type EquipementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprunt?: boolean | Equipement$empruntArgs<ExtArgs>
    demandeEmprunt?: boolean | Equipement$demandeEmpruntArgs<ExtArgs>
    _count?: boolean | EquipementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipement"
    objects: {
      emprunt: Prisma.$EmpruntPayload<ExtArgs>[]
      demandeEmprunt: Prisma.$DemandeEmpruntPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      numeroDeSerie: string
      marque: string
      disponibilite: $Enums.Disponibilite
      etatMateriel: $Enums.EtatMateriel
      obtention: $Enums.Obtention
      prix: number
      fournisseur: string | null
      donateur: string | null
      photo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipement"]>
    composites: {}
  }

  type EquipementGetPayload<S extends boolean | null | undefined | EquipementDefaultArgs> = $Result.GetResult<Prisma.$EquipementPayload, S>

  type EquipementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipementCountAggregateInputType | true
    }

  export interface EquipementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipement'], meta: { name: 'Equipement' } }
    /**
     * Find zero or one Equipement that matches the filter.
     * @param {EquipementFindUniqueArgs} args - Arguments to find a Equipement
     * @example
     * // Get one Equipement
     * const equipement = await prisma.equipement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipementFindUniqueArgs>(args: SelectSubset<T, EquipementFindUniqueArgs<ExtArgs>>): Prisma__EquipementClient<$Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipementFindUniqueOrThrowArgs} args - Arguments to find a Equipement
     * @example
     * // Get one Equipement
     * const equipement = await prisma.equipement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipementFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipementClient<$Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipementFindFirstArgs} args - Arguments to find a Equipement
     * @example
     * // Get one Equipement
     * const equipement = await prisma.equipement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipementFindFirstArgs>(args?: SelectSubset<T, EquipementFindFirstArgs<ExtArgs>>): Prisma__EquipementClient<$Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipementFindFirstOrThrowArgs} args - Arguments to find a Equipement
     * @example
     * // Get one Equipement
     * const equipement = await prisma.equipement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipementFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipementFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipementClient<$Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipements
     * const equipements = await prisma.equipement.findMany()
     * 
     * // Get first 10 Equipements
     * const equipements = await prisma.equipement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipementWithIdOnly = await prisma.equipement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipementFindManyArgs>(args?: SelectSubset<T, EquipementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipement.
     * @param {EquipementCreateArgs} args - Arguments to create a Equipement.
     * @example
     * // Create one Equipement
     * const Equipement = await prisma.equipement.create({
     *   data: {
     *     // ... data to create a Equipement
     *   }
     * })
     * 
     */
    create<T extends EquipementCreateArgs>(args: SelectSubset<T, EquipementCreateArgs<ExtArgs>>): Prisma__EquipementClient<$Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipements.
     * @param {EquipementCreateManyArgs} args - Arguments to create many Equipements.
     * @example
     * // Create many Equipements
     * const equipement = await prisma.equipement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipementCreateManyArgs>(args?: SelectSubset<T, EquipementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipements and returns the data saved in the database.
     * @param {EquipementCreateManyAndReturnArgs} args - Arguments to create many Equipements.
     * @example
     * // Create many Equipements
     * const equipement = await prisma.equipement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipements and only return the `id`
     * const equipementWithIdOnly = await prisma.equipement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipementCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipement.
     * @param {EquipementDeleteArgs} args - Arguments to delete one Equipement.
     * @example
     * // Delete one Equipement
     * const Equipement = await prisma.equipement.delete({
     *   where: {
     *     // ... filter to delete one Equipement
     *   }
     * })
     * 
     */
    delete<T extends EquipementDeleteArgs>(args: SelectSubset<T, EquipementDeleteArgs<ExtArgs>>): Prisma__EquipementClient<$Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipement.
     * @param {EquipementUpdateArgs} args - Arguments to update one Equipement.
     * @example
     * // Update one Equipement
     * const equipement = await prisma.equipement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipementUpdateArgs>(args: SelectSubset<T, EquipementUpdateArgs<ExtArgs>>): Prisma__EquipementClient<$Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipements.
     * @param {EquipementDeleteManyArgs} args - Arguments to filter Equipements to delete.
     * @example
     * // Delete a few Equipements
     * const { count } = await prisma.equipement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipementDeleteManyArgs>(args?: SelectSubset<T, EquipementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipements
     * const equipement = await prisma.equipement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipementUpdateManyArgs>(args: SelectSubset<T, EquipementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipements and returns the data updated in the database.
     * @param {EquipementUpdateManyAndReturnArgs} args - Arguments to update many Equipements.
     * @example
     * // Update many Equipements
     * const equipement = await prisma.equipement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipements and only return the `id`
     * const equipementWithIdOnly = await prisma.equipement.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipementUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipement.
     * @param {EquipementUpsertArgs} args - Arguments to update or create a Equipement.
     * @example
     * // Update or create a Equipement
     * const equipement = await prisma.equipement.upsert({
     *   create: {
     *     // ... data to create a Equipement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipement we want to update
     *   }
     * })
     */
    upsert<T extends EquipementUpsertArgs>(args: SelectSubset<T, EquipementUpsertArgs<ExtArgs>>): Prisma__EquipementClient<$Result.GetResult<Prisma.$EquipementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipementCountArgs} args - Arguments to filter Equipements to count.
     * @example
     * // Count the number of Equipements
     * const count = await prisma.equipement.count({
     *   where: {
     *     // ... the filter for the Equipements we want to count
     *   }
     * })
    **/
    count<T extends EquipementCountArgs>(
      args?: Subset<T, EquipementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipementAggregateArgs>(args: Subset<T, EquipementAggregateArgs>): Prisma.PrismaPromise<GetEquipementAggregateType<T>>

    /**
     * Group by Equipement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipementGroupByArgs} args - Group by arguments.
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
      T extends EquipementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipementGroupByArgs['orderBy'] }
        : { orderBy?: EquipementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipement model
   */
  readonly fields: EquipementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emprunt<T extends Equipement$empruntArgs<ExtArgs> = {}>(args?: Subset<T, Equipement$empruntArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    demandeEmprunt<T extends Equipement$demandeEmpruntArgs<ExtArgs> = {}>(args?: Subset<T, Equipement$demandeEmpruntArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandeEmpruntPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Equipement model
   */
  interface EquipementFieldRefs {
    readonly id: FieldRef<"Equipement", 'Int'>
    readonly nom: FieldRef<"Equipement", 'String'>
    readonly numeroDeSerie: FieldRef<"Equipement", 'String'>
    readonly marque: FieldRef<"Equipement", 'String'>
    readonly disponibilite: FieldRef<"Equipement", 'Disponibilite'>
    readonly etatMateriel: FieldRef<"Equipement", 'EtatMateriel'>
    readonly obtention: FieldRef<"Equipement", 'Obtention'>
    readonly prix: FieldRef<"Equipement", 'Float'>
    readonly fournisseur: FieldRef<"Equipement", 'String'>
    readonly donateur: FieldRef<"Equipement", 'String'>
    readonly photo: FieldRef<"Equipement", 'String'>
    readonly createdAt: FieldRef<"Equipement", 'DateTime'>
    readonly updatedAt: FieldRef<"Equipement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Equipement findUnique
   */
  export type EquipementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: EquipementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipement
     */
    omit?: EquipementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipementInclude<ExtArgs> | null
    /**
     * Filter, which Equipement to fetch.
     */
    where: EquipementWhereUniqueInput
  }

  /**
   * Equipement findUniqueOrThrow
   */
  export type EquipementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: EquipementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipement
     */
    omit?: EquipementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipementInclude<ExtArgs> | null
    /**
     * Filter, which Equipement to fetch.
     */
    where: EquipementWhereUniqueInput
  }

  /**
   * Equipement findFirst
   */
  export type EquipementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: EquipementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipement
     */
    omit?: EquipementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipementInclude<ExtArgs> | null
    /**
     * Filter, which Equipement to fetch.
     */
    where?: EquipementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipements to fetch.
     */
    orderBy?: EquipementOrderByWithRelationInput | EquipementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipements.
     */
    cursor?: EquipementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipements.
     */
    distinct?: EquipementScalarFieldEnum | EquipementScalarFieldEnum[]
  }

  /**
   * Equipement findFirstOrThrow
   */
  export type EquipementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: EquipementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipement
     */
    omit?: EquipementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipementInclude<ExtArgs> | null
    /**
     * Filter, which Equipement to fetch.
     */
    where?: EquipementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipements to fetch.
     */
    orderBy?: EquipementOrderByWithRelationInput | EquipementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipements.
     */
    cursor?: EquipementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipements.
     */
    distinct?: EquipementScalarFieldEnum | EquipementScalarFieldEnum[]
  }

  /**
   * Equipement findMany
   */
  export type EquipementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: EquipementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipement
     */
    omit?: EquipementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipementInclude<ExtArgs> | null
    /**
     * Filter, which Equipements to fetch.
     */
    where?: EquipementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipements to fetch.
     */
    orderBy?: EquipementOrderByWithRelationInput | EquipementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipements.
     */
    cursor?: EquipementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipements.
     */
    skip?: number
    distinct?: EquipementScalarFieldEnum | EquipementScalarFieldEnum[]
  }

  /**
   * Equipement create
   */
  export type EquipementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: EquipementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipement
     */
    omit?: EquipementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipementInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipement.
     */
    data: XOR<EquipementCreateInput, EquipementUncheckedCreateInput>
  }

  /**
   * Equipement createMany
   */
  export type EquipementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipements.
     */
    data: EquipementCreateManyInput | EquipementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipement createManyAndReturn
   */
  export type EquipementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: EquipementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipement
     */
    omit?: EquipementOmit<ExtArgs> | null
    /**
     * The data used to create many Equipements.
     */
    data: EquipementCreateManyInput | EquipementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipement update
   */
  export type EquipementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: EquipementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipement
     */
    omit?: EquipementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipementInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipement.
     */
    data: XOR<EquipementUpdateInput, EquipementUncheckedUpdateInput>
    /**
     * Choose, which Equipement to update.
     */
    where: EquipementWhereUniqueInput
  }

  /**
   * Equipement updateMany
   */
  export type EquipementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipements.
     */
    data: XOR<EquipementUpdateManyMutationInput, EquipementUncheckedUpdateManyInput>
    /**
     * Filter which Equipements to update
     */
    where?: EquipementWhereInput
    /**
     * Limit how many Equipements to update.
     */
    limit?: number
  }

  /**
   * Equipement updateManyAndReturn
   */
  export type EquipementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: EquipementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipement
     */
    omit?: EquipementOmit<ExtArgs> | null
    /**
     * The data used to update Equipements.
     */
    data: XOR<EquipementUpdateManyMutationInput, EquipementUncheckedUpdateManyInput>
    /**
     * Filter which Equipements to update
     */
    where?: EquipementWhereInput
    /**
     * Limit how many Equipements to update.
     */
    limit?: number
  }

  /**
   * Equipement upsert
   */
  export type EquipementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: EquipementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipement
     */
    omit?: EquipementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipementInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipement to update in case it exists.
     */
    where: EquipementWhereUniqueInput
    /**
     * In case the Equipement found by the `where` argument doesn't exist, create a new Equipement with this data.
     */
    create: XOR<EquipementCreateInput, EquipementUncheckedCreateInput>
    /**
     * In case the Equipement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipementUpdateInput, EquipementUncheckedUpdateInput>
  }

  /**
   * Equipement delete
   */
  export type EquipementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: EquipementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipement
     */
    omit?: EquipementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipementInclude<ExtArgs> | null
    /**
     * Filter which Equipement to delete.
     */
    where: EquipementWhereUniqueInput
  }

  /**
   * Equipement deleteMany
   */
  export type EquipementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipements to delete
     */
    where?: EquipementWhereInput
    /**
     * Limit how many Equipements to delete.
     */
    limit?: number
  }

  /**
   * Equipement.emprunt
   */
  export type Equipement$empruntArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    where?: EmpruntWhereInput
    orderBy?: EmpruntOrderByWithRelationInput | EmpruntOrderByWithRelationInput[]
    cursor?: EmpruntWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmpruntScalarFieldEnum | EmpruntScalarFieldEnum[]
  }

  /**
   * Equipement.demandeEmprunt
   */
  export type Equipement$demandeEmpruntArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntInclude<ExtArgs> | null
    where?: DemandeEmpruntWhereInput
    orderBy?: DemandeEmpruntOrderByWithRelationInput | DemandeEmpruntOrderByWithRelationInput[]
    cursor?: DemandeEmpruntWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandeEmpruntScalarFieldEnum | DemandeEmpruntScalarFieldEnum[]
  }

  /**
   * Equipement without action
   */
  export type EquipementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipement
     */
    select?: EquipementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipement
     */
    omit?: EquipementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipementInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    empruntId: number | null
    demandeEmpruntId: number | null
    consommableId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    empruntId: number | null
    demandeEmpruntId: number | null
    consommableId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    empruntId: number | null
    demandeEmpruntId: number | null
    consommableId: number | null
    message: string | null
    DateEnvoi: Date | null
    type: $Enums.TypeNotification | null
    vu: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    empruntId: number | null
    demandeEmpruntId: number | null
    consommableId: number | null
    message: string | null
    DateEnvoi: Date | null
    type: $Enums.TypeNotification | null
    vu: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    empruntId: number
    demandeEmpruntId: number
    consommableId: number
    message: number
    DateEnvoi: number
    type: number
    vu: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    empruntId?: true
    demandeEmpruntId?: true
    consommableId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    empruntId?: true
    demandeEmpruntId?: true
    consommableId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    empruntId?: true
    demandeEmpruntId?: true
    consommableId?: true
    message?: true
    DateEnvoi?: true
    type?: true
    vu?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    empruntId?: true
    demandeEmpruntId?: true
    consommableId?: true
    message?: true
    DateEnvoi?: true
    type?: true
    vu?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    empruntId?: true
    demandeEmpruntId?: true
    consommableId?: true
    message?: true
    DateEnvoi?: true
    type?: true
    vu?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    empruntId: number | null
    demandeEmpruntId: number | null
    consommableId: number | null
    message: string
    DateEnvoi: Date
    type: $Enums.TypeNotification
    vu: boolean
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empruntId?: boolean
    demandeEmpruntId?: boolean
    consommableId?: boolean
    message?: boolean
    DateEnvoi?: boolean
    type?: boolean
    vu?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emprunt?: boolean | Notification$empruntArgs<ExtArgs>
    demandeEmprunt?: boolean | Notification$demandeEmpruntArgs<ExtArgs>
    consommable?: boolean | Notification$consommableArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empruntId?: boolean
    demandeEmpruntId?: boolean
    consommableId?: boolean
    message?: boolean
    DateEnvoi?: boolean
    type?: boolean
    vu?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emprunt?: boolean | Notification$empruntArgs<ExtArgs>
    demandeEmprunt?: boolean | Notification$demandeEmpruntArgs<ExtArgs>
    consommable?: boolean | Notification$consommableArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empruntId?: boolean
    demandeEmpruntId?: boolean
    consommableId?: boolean
    message?: boolean
    DateEnvoi?: boolean
    type?: boolean
    vu?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emprunt?: boolean | Notification$empruntArgs<ExtArgs>
    demandeEmprunt?: boolean | Notification$demandeEmpruntArgs<ExtArgs>
    consommable?: boolean | Notification$consommableArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    empruntId?: boolean
    demandeEmpruntId?: boolean
    consommableId?: boolean
    message?: boolean
    DateEnvoi?: boolean
    type?: boolean
    vu?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empruntId" | "demandeEmpruntId" | "consommableId" | "message" | "DateEnvoi" | "type" | "vu" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprunt?: boolean | Notification$empruntArgs<ExtArgs>
    demandeEmprunt?: boolean | Notification$demandeEmpruntArgs<ExtArgs>
    consommable?: boolean | Notification$consommableArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprunt?: boolean | Notification$empruntArgs<ExtArgs>
    demandeEmprunt?: boolean | Notification$demandeEmpruntArgs<ExtArgs>
    consommable?: boolean | Notification$consommableArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprunt?: boolean | Notification$empruntArgs<ExtArgs>
    demandeEmprunt?: boolean | Notification$demandeEmpruntArgs<ExtArgs>
    consommable?: boolean | Notification$consommableArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      emprunt: Prisma.$EmpruntPayload<ExtArgs> | null
      demandeEmprunt: Prisma.$DemandeEmpruntPayload<ExtArgs> | null
      consommable: Prisma.$ConsommablePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      empruntId: number | null
      demandeEmpruntId: number | null
      consommableId: number | null
      message: string
      DateEnvoi: Date
      type: $Enums.TypeNotification
      vu: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emprunt<T extends Notification$empruntArgs<ExtArgs> = {}>(args?: Subset<T, Notification$empruntArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    demandeEmprunt<T extends Notification$demandeEmpruntArgs<ExtArgs> = {}>(args?: Subset<T, Notification$demandeEmpruntArgs<ExtArgs>>): Prisma__DemandeEmpruntClient<$Result.GetResult<Prisma.$DemandeEmpruntPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    consommable<T extends Notification$consommableArgs<ExtArgs> = {}>(args?: Subset<T, Notification$consommableArgs<ExtArgs>>): Prisma__ConsommableClient<$Result.GetResult<Prisma.$ConsommablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly empruntId: FieldRef<"Notification", 'Int'>
    readonly demandeEmpruntId: FieldRef<"Notification", 'Int'>
    readonly consommableId: FieldRef<"Notification", 'Int'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly DateEnvoi: FieldRef<"Notification", 'DateTime'>
    readonly type: FieldRef<"Notification", 'TypeNotification'>
    readonly vu: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.emprunt
   */
  export type Notification$empruntArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    where?: EmpruntWhereInput
  }

  /**
   * Notification.demandeEmprunt
   */
  export type Notification$demandeEmpruntArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeEmprunt
     */
    select?: DemandeEmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandeEmprunt
     */
    omit?: DemandeEmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeEmpruntInclude<ExtArgs> | null
    where?: DemandeEmpruntWhereInput
  }

  /**
   * Notification.consommable
   */
  export type Notification$consommableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consommable
     */
    select?: ConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consommable
     */
    omit?: ConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsommableInclude<ExtArgs> | null
    where?: ConsommableWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Consommable
   */

  export type AggregateConsommable = {
    _count: ConsommableCountAggregateOutputType | null
    _avg: ConsommableAvgAggregateOutputType | null
    _sum: ConsommableSumAggregateOutputType | null
    _min: ConsommableMinAggregateOutputType | null
    _max: ConsommableMaxAggregateOutputType | null
  }

  export type ConsommableAvgAggregateOutputType = {
    id: number | null
    quantiteDisponible: number | null
    seuilCritique: number | null
  }

  export type ConsommableSumAggregateOutputType = {
    id: number | null
    quantiteDisponible: number | null
    seuilCritique: number | null
  }

  export type ConsommableMinAggregateOutputType = {
    id: number | null
    nom: string | null
    marque: string | null
    quantiteDisponible: number | null
    seuilCritique: number | null
    obtention: $Enums.Obtention | null
    fournisseur: string | null
    donnateur: string | null
    photo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsommableMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    marque: string | null
    quantiteDisponible: number | null
    seuilCritique: number | null
    obtention: $Enums.Obtention | null
    fournisseur: string | null
    donnateur: string | null
    photo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsommableCountAggregateOutputType = {
    id: number
    nom: number
    marque: number
    quantiteDisponible: number
    seuilCritique: number
    obtention: number
    fournisseur: number
    donnateur: number
    photo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConsommableAvgAggregateInputType = {
    id?: true
    quantiteDisponible?: true
    seuilCritique?: true
  }

  export type ConsommableSumAggregateInputType = {
    id?: true
    quantiteDisponible?: true
    seuilCritique?: true
  }

  export type ConsommableMinAggregateInputType = {
    id?: true
    nom?: true
    marque?: true
    quantiteDisponible?: true
    seuilCritique?: true
    obtention?: true
    fournisseur?: true
    donnateur?: true
    photo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsommableMaxAggregateInputType = {
    id?: true
    nom?: true
    marque?: true
    quantiteDisponible?: true
    seuilCritique?: true
    obtention?: true
    fournisseur?: true
    donnateur?: true
    photo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsommableCountAggregateInputType = {
    id?: true
    nom?: true
    marque?: true
    quantiteDisponible?: true
    seuilCritique?: true
    obtention?: true
    fournisseur?: true
    donnateur?: true
    photo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConsommableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consommable to aggregate.
     */
    where?: ConsommableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consommables to fetch.
     */
    orderBy?: ConsommableOrderByWithRelationInput | ConsommableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsommableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consommables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consommables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consommables
    **/
    _count?: true | ConsommableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsommableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsommableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsommableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsommableMaxAggregateInputType
  }

  export type GetConsommableAggregateType<T extends ConsommableAggregateArgs> = {
        [P in keyof T & keyof AggregateConsommable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsommable[P]>
      : GetScalarType<T[P], AggregateConsommable[P]>
  }




  export type ConsommableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsommableWhereInput
    orderBy?: ConsommableOrderByWithAggregationInput | ConsommableOrderByWithAggregationInput[]
    by: ConsommableScalarFieldEnum[] | ConsommableScalarFieldEnum
    having?: ConsommableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsommableCountAggregateInputType | true
    _avg?: ConsommableAvgAggregateInputType
    _sum?: ConsommableSumAggregateInputType
    _min?: ConsommableMinAggregateInputType
    _max?: ConsommableMaxAggregateInputType
  }

  export type ConsommableGroupByOutputType = {
    id: number
    nom: string
    marque: string
    quantiteDisponible: number
    seuilCritique: number
    obtention: $Enums.Obtention
    fournisseur: string | null
    donnateur: string | null
    photo: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConsommableCountAggregateOutputType | null
    _avg: ConsommableAvgAggregateOutputType | null
    _sum: ConsommableSumAggregateOutputType | null
    _min: ConsommableMinAggregateOutputType | null
    _max: ConsommableMaxAggregateOutputType | null
  }

  type GetConsommableGroupByPayload<T extends ConsommableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsommableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsommableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsommableGroupByOutputType[P]>
            : GetScalarType<T[P], ConsommableGroupByOutputType[P]>
        }
      >
    >


  export type ConsommableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    marque?: boolean
    quantiteDisponible?: boolean
    seuilCritique?: boolean
    obtention?: boolean
    fournisseur?: boolean
    donnateur?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notification?: boolean | Consommable$notificationArgs<ExtArgs>
    utilisationsConsommable?: boolean | Consommable$utilisationsConsommableArgs<ExtArgs>
    _count?: boolean | ConsommableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consommable"]>

  export type ConsommableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    marque?: boolean
    quantiteDisponible?: boolean
    seuilCritique?: boolean
    obtention?: boolean
    fournisseur?: boolean
    donnateur?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["consommable"]>

  export type ConsommableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    marque?: boolean
    quantiteDisponible?: boolean
    seuilCritique?: boolean
    obtention?: boolean
    fournisseur?: boolean
    donnateur?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["consommable"]>

  export type ConsommableSelectScalar = {
    id?: boolean
    nom?: boolean
    marque?: boolean
    quantiteDisponible?: boolean
    seuilCritique?: boolean
    obtention?: boolean
    fournisseur?: boolean
    donnateur?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConsommableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "marque" | "quantiteDisponible" | "seuilCritique" | "obtention" | "fournisseur" | "donnateur" | "photo" | "createdAt" | "updatedAt", ExtArgs["result"]["consommable"]>
  export type ConsommableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | Consommable$notificationArgs<ExtArgs>
    utilisationsConsommable?: boolean | Consommable$utilisationsConsommableArgs<ExtArgs>
    _count?: boolean | ConsommableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConsommableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConsommableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConsommablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consommable"
    objects: {
      notification: Prisma.$NotificationPayload<ExtArgs>[]
      utilisationsConsommable: Prisma.$UtilisationConsommablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      marque: string
      quantiteDisponible: number
      seuilCritique: number
      obtention: $Enums.Obtention
      fournisseur: string | null
      donnateur: string | null
      photo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["consommable"]>
    composites: {}
  }

  type ConsommableGetPayload<S extends boolean | null | undefined | ConsommableDefaultArgs> = $Result.GetResult<Prisma.$ConsommablePayload, S>

  type ConsommableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsommableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsommableCountAggregateInputType | true
    }

  export interface ConsommableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consommable'], meta: { name: 'Consommable' } }
    /**
     * Find zero or one Consommable that matches the filter.
     * @param {ConsommableFindUniqueArgs} args - Arguments to find a Consommable
     * @example
     * // Get one Consommable
     * const consommable = await prisma.consommable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsommableFindUniqueArgs>(args: SelectSubset<T, ConsommableFindUniqueArgs<ExtArgs>>): Prisma__ConsommableClient<$Result.GetResult<Prisma.$ConsommablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consommable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsommableFindUniqueOrThrowArgs} args - Arguments to find a Consommable
     * @example
     * // Get one Consommable
     * const consommable = await prisma.consommable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsommableFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsommableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsommableClient<$Result.GetResult<Prisma.$ConsommablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consommable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsommableFindFirstArgs} args - Arguments to find a Consommable
     * @example
     * // Get one Consommable
     * const consommable = await prisma.consommable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsommableFindFirstArgs>(args?: SelectSubset<T, ConsommableFindFirstArgs<ExtArgs>>): Prisma__ConsommableClient<$Result.GetResult<Prisma.$ConsommablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consommable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsommableFindFirstOrThrowArgs} args - Arguments to find a Consommable
     * @example
     * // Get one Consommable
     * const consommable = await prisma.consommable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsommableFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsommableFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsommableClient<$Result.GetResult<Prisma.$ConsommablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consommables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsommableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consommables
     * const consommables = await prisma.consommable.findMany()
     * 
     * // Get first 10 Consommables
     * const consommables = await prisma.consommable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consommableWithIdOnly = await prisma.consommable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsommableFindManyArgs>(args?: SelectSubset<T, ConsommableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsommablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consommable.
     * @param {ConsommableCreateArgs} args - Arguments to create a Consommable.
     * @example
     * // Create one Consommable
     * const Consommable = await prisma.consommable.create({
     *   data: {
     *     // ... data to create a Consommable
     *   }
     * })
     * 
     */
    create<T extends ConsommableCreateArgs>(args: SelectSubset<T, ConsommableCreateArgs<ExtArgs>>): Prisma__ConsommableClient<$Result.GetResult<Prisma.$ConsommablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consommables.
     * @param {ConsommableCreateManyArgs} args - Arguments to create many Consommables.
     * @example
     * // Create many Consommables
     * const consommable = await prisma.consommable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsommableCreateManyArgs>(args?: SelectSubset<T, ConsommableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consommables and returns the data saved in the database.
     * @param {ConsommableCreateManyAndReturnArgs} args - Arguments to create many Consommables.
     * @example
     * // Create many Consommables
     * const consommable = await prisma.consommable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consommables and only return the `id`
     * const consommableWithIdOnly = await prisma.consommable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsommableCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsommableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsommablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consommable.
     * @param {ConsommableDeleteArgs} args - Arguments to delete one Consommable.
     * @example
     * // Delete one Consommable
     * const Consommable = await prisma.consommable.delete({
     *   where: {
     *     // ... filter to delete one Consommable
     *   }
     * })
     * 
     */
    delete<T extends ConsommableDeleteArgs>(args: SelectSubset<T, ConsommableDeleteArgs<ExtArgs>>): Prisma__ConsommableClient<$Result.GetResult<Prisma.$ConsommablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consommable.
     * @param {ConsommableUpdateArgs} args - Arguments to update one Consommable.
     * @example
     * // Update one Consommable
     * const consommable = await prisma.consommable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsommableUpdateArgs>(args: SelectSubset<T, ConsommableUpdateArgs<ExtArgs>>): Prisma__ConsommableClient<$Result.GetResult<Prisma.$ConsommablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consommables.
     * @param {ConsommableDeleteManyArgs} args - Arguments to filter Consommables to delete.
     * @example
     * // Delete a few Consommables
     * const { count } = await prisma.consommable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsommableDeleteManyArgs>(args?: SelectSubset<T, ConsommableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consommables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsommableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consommables
     * const consommable = await prisma.consommable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsommableUpdateManyArgs>(args: SelectSubset<T, ConsommableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consommables and returns the data updated in the database.
     * @param {ConsommableUpdateManyAndReturnArgs} args - Arguments to update many Consommables.
     * @example
     * // Update many Consommables
     * const consommable = await prisma.consommable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consommables and only return the `id`
     * const consommableWithIdOnly = await prisma.consommable.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConsommableUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsommableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsommablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consommable.
     * @param {ConsommableUpsertArgs} args - Arguments to update or create a Consommable.
     * @example
     * // Update or create a Consommable
     * const consommable = await prisma.consommable.upsert({
     *   create: {
     *     // ... data to create a Consommable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consommable we want to update
     *   }
     * })
     */
    upsert<T extends ConsommableUpsertArgs>(args: SelectSubset<T, ConsommableUpsertArgs<ExtArgs>>): Prisma__ConsommableClient<$Result.GetResult<Prisma.$ConsommablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consommables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsommableCountArgs} args - Arguments to filter Consommables to count.
     * @example
     * // Count the number of Consommables
     * const count = await prisma.consommable.count({
     *   where: {
     *     // ... the filter for the Consommables we want to count
     *   }
     * })
    **/
    count<T extends ConsommableCountArgs>(
      args?: Subset<T, ConsommableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsommableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consommable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsommableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsommableAggregateArgs>(args: Subset<T, ConsommableAggregateArgs>): Prisma.PrismaPromise<GetConsommableAggregateType<T>>

    /**
     * Group by Consommable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsommableGroupByArgs} args - Group by arguments.
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
      T extends ConsommableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsommableGroupByArgs['orderBy'] }
        : { orderBy?: ConsommableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsommableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsommableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consommable model
   */
  readonly fields: ConsommableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consommable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsommableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends Consommable$notificationArgs<ExtArgs> = {}>(args?: Subset<T, Consommable$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    utilisationsConsommable<T extends Consommable$utilisationsConsommableArgs<ExtArgs> = {}>(args?: Subset<T, Consommable$utilisationsConsommableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisationConsommablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Consommable model
   */
  interface ConsommableFieldRefs {
    readonly id: FieldRef<"Consommable", 'Int'>
    readonly nom: FieldRef<"Consommable", 'String'>
    readonly marque: FieldRef<"Consommable", 'String'>
    readonly quantiteDisponible: FieldRef<"Consommable", 'Int'>
    readonly seuilCritique: FieldRef<"Consommable", 'Int'>
    readonly obtention: FieldRef<"Consommable", 'Obtention'>
    readonly fournisseur: FieldRef<"Consommable", 'String'>
    readonly donnateur: FieldRef<"Consommable", 'String'>
    readonly photo: FieldRef<"Consommable", 'String'>
    readonly createdAt: FieldRef<"Consommable", 'DateTime'>
    readonly updatedAt: FieldRef<"Consommable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Consommable findUnique
   */
  export type ConsommableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consommable
     */
    select?: ConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consommable
     */
    omit?: ConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsommableInclude<ExtArgs> | null
    /**
     * Filter, which Consommable to fetch.
     */
    where: ConsommableWhereUniqueInput
  }

  /**
   * Consommable findUniqueOrThrow
   */
  export type ConsommableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consommable
     */
    select?: ConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consommable
     */
    omit?: ConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsommableInclude<ExtArgs> | null
    /**
     * Filter, which Consommable to fetch.
     */
    where: ConsommableWhereUniqueInput
  }

  /**
   * Consommable findFirst
   */
  export type ConsommableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consommable
     */
    select?: ConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consommable
     */
    omit?: ConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsommableInclude<ExtArgs> | null
    /**
     * Filter, which Consommable to fetch.
     */
    where?: ConsommableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consommables to fetch.
     */
    orderBy?: ConsommableOrderByWithRelationInput | ConsommableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consommables.
     */
    cursor?: ConsommableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consommables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consommables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consommables.
     */
    distinct?: ConsommableScalarFieldEnum | ConsommableScalarFieldEnum[]
  }

  /**
   * Consommable findFirstOrThrow
   */
  export type ConsommableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consommable
     */
    select?: ConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consommable
     */
    omit?: ConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsommableInclude<ExtArgs> | null
    /**
     * Filter, which Consommable to fetch.
     */
    where?: ConsommableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consommables to fetch.
     */
    orderBy?: ConsommableOrderByWithRelationInput | ConsommableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consommables.
     */
    cursor?: ConsommableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consommables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consommables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consommables.
     */
    distinct?: ConsommableScalarFieldEnum | ConsommableScalarFieldEnum[]
  }

  /**
   * Consommable findMany
   */
  export type ConsommableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consommable
     */
    select?: ConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consommable
     */
    omit?: ConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsommableInclude<ExtArgs> | null
    /**
     * Filter, which Consommables to fetch.
     */
    where?: ConsommableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consommables to fetch.
     */
    orderBy?: ConsommableOrderByWithRelationInput | ConsommableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consommables.
     */
    cursor?: ConsommableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consommables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consommables.
     */
    skip?: number
    distinct?: ConsommableScalarFieldEnum | ConsommableScalarFieldEnum[]
  }

  /**
   * Consommable create
   */
  export type ConsommableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consommable
     */
    select?: ConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consommable
     */
    omit?: ConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsommableInclude<ExtArgs> | null
    /**
     * The data needed to create a Consommable.
     */
    data: XOR<ConsommableCreateInput, ConsommableUncheckedCreateInput>
  }

  /**
   * Consommable createMany
   */
  export type ConsommableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consommables.
     */
    data: ConsommableCreateManyInput | ConsommableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consommable createManyAndReturn
   */
  export type ConsommableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consommable
     */
    select?: ConsommableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consommable
     */
    omit?: ConsommableOmit<ExtArgs> | null
    /**
     * The data used to create many Consommables.
     */
    data: ConsommableCreateManyInput | ConsommableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consommable update
   */
  export type ConsommableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consommable
     */
    select?: ConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consommable
     */
    omit?: ConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsommableInclude<ExtArgs> | null
    /**
     * The data needed to update a Consommable.
     */
    data: XOR<ConsommableUpdateInput, ConsommableUncheckedUpdateInput>
    /**
     * Choose, which Consommable to update.
     */
    where: ConsommableWhereUniqueInput
  }

  /**
   * Consommable updateMany
   */
  export type ConsommableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consommables.
     */
    data: XOR<ConsommableUpdateManyMutationInput, ConsommableUncheckedUpdateManyInput>
    /**
     * Filter which Consommables to update
     */
    where?: ConsommableWhereInput
    /**
     * Limit how many Consommables to update.
     */
    limit?: number
  }

  /**
   * Consommable updateManyAndReturn
   */
  export type ConsommableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consommable
     */
    select?: ConsommableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consommable
     */
    omit?: ConsommableOmit<ExtArgs> | null
    /**
     * The data used to update Consommables.
     */
    data: XOR<ConsommableUpdateManyMutationInput, ConsommableUncheckedUpdateManyInput>
    /**
     * Filter which Consommables to update
     */
    where?: ConsommableWhereInput
    /**
     * Limit how many Consommables to update.
     */
    limit?: number
  }

  /**
   * Consommable upsert
   */
  export type ConsommableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consommable
     */
    select?: ConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consommable
     */
    omit?: ConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsommableInclude<ExtArgs> | null
    /**
     * The filter to search for the Consommable to update in case it exists.
     */
    where: ConsommableWhereUniqueInput
    /**
     * In case the Consommable found by the `where` argument doesn't exist, create a new Consommable with this data.
     */
    create: XOR<ConsommableCreateInput, ConsommableUncheckedCreateInput>
    /**
     * In case the Consommable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsommableUpdateInput, ConsommableUncheckedUpdateInput>
  }

  /**
   * Consommable delete
   */
  export type ConsommableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consommable
     */
    select?: ConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consommable
     */
    omit?: ConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsommableInclude<ExtArgs> | null
    /**
     * Filter which Consommable to delete.
     */
    where: ConsommableWhereUniqueInput
  }

  /**
   * Consommable deleteMany
   */
  export type ConsommableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consommables to delete
     */
    where?: ConsommableWhereInput
    /**
     * Limit how many Consommables to delete.
     */
    limit?: number
  }

  /**
   * Consommable.notification
   */
  export type Consommable$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Consommable.utilisationsConsommable
   */
  export type Consommable$utilisationsConsommableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisationConsommable
     */
    select?: UtilisationConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilisationConsommable
     */
    omit?: UtilisationConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisationConsommableInclude<ExtArgs> | null
    where?: UtilisationConsommableWhereInput
    orderBy?: UtilisationConsommableOrderByWithRelationInput | UtilisationConsommableOrderByWithRelationInput[]
    cursor?: UtilisationConsommableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UtilisationConsommableScalarFieldEnum | UtilisationConsommableScalarFieldEnum[]
  }

  /**
   * Consommable without action
   */
  export type ConsommableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consommable
     */
    select?: ConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consommable
     */
    omit?: ConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsommableInclude<ExtArgs> | null
  }


  /**
   * Model UtilisationConsommable
   */

  export type AggregateUtilisationConsommable = {
    _count: UtilisationConsommableCountAggregateOutputType | null
    _avg: UtilisationConsommableAvgAggregateOutputType | null
    _sum: UtilisationConsommableSumAggregateOutputType | null
    _min: UtilisationConsommableMinAggregateOutputType | null
    _max: UtilisationConsommableMaxAggregateOutputType | null
  }

  export type UtilisationConsommableAvgAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    consommableId: number | null
    quantiteUtilise: number | null
  }

  export type UtilisationConsommableSumAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    consommableId: number | null
    quantiteUtilise: number | null
  }

  export type UtilisationConsommableMinAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    consommableId: number | null
    quantiteUtilise: number | null
    dateUtilisation: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UtilisationConsommableMaxAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    consommableId: number | null
    quantiteUtilise: number | null
    dateUtilisation: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UtilisationConsommableCountAggregateOutputType = {
    id: number
    utilisateurId: number
    consommableId: number
    quantiteUtilise: number
    dateUtilisation: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UtilisationConsommableAvgAggregateInputType = {
    id?: true
    utilisateurId?: true
    consommableId?: true
    quantiteUtilise?: true
  }

  export type UtilisationConsommableSumAggregateInputType = {
    id?: true
    utilisateurId?: true
    consommableId?: true
    quantiteUtilise?: true
  }

  export type UtilisationConsommableMinAggregateInputType = {
    id?: true
    utilisateurId?: true
    consommableId?: true
    quantiteUtilise?: true
    dateUtilisation?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UtilisationConsommableMaxAggregateInputType = {
    id?: true
    utilisateurId?: true
    consommableId?: true
    quantiteUtilise?: true
    dateUtilisation?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UtilisationConsommableCountAggregateInputType = {
    id?: true
    utilisateurId?: true
    consommableId?: true
    quantiteUtilise?: true
    dateUtilisation?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UtilisationConsommableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UtilisationConsommable to aggregate.
     */
    where?: UtilisationConsommableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UtilisationConsommables to fetch.
     */
    orderBy?: UtilisationConsommableOrderByWithRelationInput | UtilisationConsommableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisationConsommableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UtilisationConsommables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UtilisationConsommables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UtilisationConsommables
    **/
    _count?: true | UtilisationConsommableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisationConsommableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisationConsommableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisationConsommableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisationConsommableMaxAggregateInputType
  }

  export type GetUtilisationConsommableAggregateType<T extends UtilisationConsommableAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisationConsommable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisationConsommable[P]>
      : GetScalarType<T[P], AggregateUtilisationConsommable[P]>
  }




  export type UtilisationConsommableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisationConsommableWhereInput
    orderBy?: UtilisationConsommableOrderByWithAggregationInput | UtilisationConsommableOrderByWithAggregationInput[]
    by: UtilisationConsommableScalarFieldEnum[] | UtilisationConsommableScalarFieldEnum
    having?: UtilisationConsommableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisationConsommableCountAggregateInputType | true
    _avg?: UtilisationConsommableAvgAggregateInputType
    _sum?: UtilisationConsommableSumAggregateInputType
    _min?: UtilisationConsommableMinAggregateInputType
    _max?: UtilisationConsommableMaxAggregateInputType
  }

  export type UtilisationConsommableGroupByOutputType = {
    id: number
    utilisateurId: number
    consommableId: number
    quantiteUtilise: number
    dateUtilisation: Date
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: UtilisationConsommableCountAggregateOutputType | null
    _avg: UtilisationConsommableAvgAggregateOutputType | null
    _sum: UtilisationConsommableSumAggregateOutputType | null
    _min: UtilisationConsommableMinAggregateOutputType | null
    _max: UtilisationConsommableMaxAggregateOutputType | null
  }

  type GetUtilisationConsommableGroupByPayload<T extends UtilisationConsommableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisationConsommableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisationConsommableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisationConsommableGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisationConsommableGroupByOutputType[P]>
        }
      >
    >


  export type UtilisationConsommableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    consommableId?: boolean
    quantiteUtilise?: boolean
    dateUtilisation?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    consommable?: boolean | ConsommableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisationConsommable"]>

  export type UtilisationConsommableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    consommableId?: boolean
    quantiteUtilise?: boolean
    dateUtilisation?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    consommable?: boolean | ConsommableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisationConsommable"]>

  export type UtilisationConsommableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    consommableId?: boolean
    quantiteUtilise?: boolean
    dateUtilisation?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    consommable?: boolean | ConsommableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisationConsommable"]>

  export type UtilisationConsommableSelectScalar = {
    id?: boolean
    utilisateurId?: boolean
    consommableId?: boolean
    quantiteUtilise?: boolean
    dateUtilisation?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UtilisationConsommableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "utilisateurId" | "consommableId" | "quantiteUtilise" | "dateUtilisation" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["utilisationConsommable"]>
  export type UtilisationConsommableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    consommable?: boolean | ConsommableDefaultArgs<ExtArgs>
  }
  export type UtilisationConsommableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    consommable?: boolean | ConsommableDefaultArgs<ExtArgs>
  }
  export type UtilisationConsommableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    consommable?: boolean | ConsommableDefaultArgs<ExtArgs>
  }

  export type $UtilisationConsommablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UtilisationConsommable"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      consommable: Prisma.$ConsommablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      utilisateurId: number
      consommableId: number
      quantiteUtilise: number
      dateUtilisation: Date
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["utilisationConsommable"]>
    composites: {}
  }

  type UtilisationConsommableGetPayload<S extends boolean | null | undefined | UtilisationConsommableDefaultArgs> = $Result.GetResult<Prisma.$UtilisationConsommablePayload, S>

  type UtilisationConsommableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisationConsommableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisationConsommableCountAggregateInputType | true
    }

  export interface UtilisationConsommableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UtilisationConsommable'], meta: { name: 'UtilisationConsommable' } }
    /**
     * Find zero or one UtilisationConsommable that matches the filter.
     * @param {UtilisationConsommableFindUniqueArgs} args - Arguments to find a UtilisationConsommable
     * @example
     * // Get one UtilisationConsommable
     * const utilisationConsommable = await prisma.utilisationConsommable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisationConsommableFindUniqueArgs>(args: SelectSubset<T, UtilisationConsommableFindUniqueArgs<ExtArgs>>): Prisma__UtilisationConsommableClient<$Result.GetResult<Prisma.$UtilisationConsommablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UtilisationConsommable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisationConsommableFindUniqueOrThrowArgs} args - Arguments to find a UtilisationConsommable
     * @example
     * // Get one UtilisationConsommable
     * const utilisationConsommable = await prisma.utilisationConsommable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisationConsommableFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisationConsommableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisationConsommableClient<$Result.GetResult<Prisma.$UtilisationConsommablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UtilisationConsommable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisationConsommableFindFirstArgs} args - Arguments to find a UtilisationConsommable
     * @example
     * // Get one UtilisationConsommable
     * const utilisationConsommable = await prisma.utilisationConsommable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisationConsommableFindFirstArgs>(args?: SelectSubset<T, UtilisationConsommableFindFirstArgs<ExtArgs>>): Prisma__UtilisationConsommableClient<$Result.GetResult<Prisma.$UtilisationConsommablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UtilisationConsommable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisationConsommableFindFirstOrThrowArgs} args - Arguments to find a UtilisationConsommable
     * @example
     * // Get one UtilisationConsommable
     * const utilisationConsommable = await prisma.utilisationConsommable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisationConsommableFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisationConsommableFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisationConsommableClient<$Result.GetResult<Prisma.$UtilisationConsommablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UtilisationConsommables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisationConsommableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UtilisationConsommables
     * const utilisationConsommables = await prisma.utilisationConsommable.findMany()
     * 
     * // Get first 10 UtilisationConsommables
     * const utilisationConsommables = await prisma.utilisationConsommable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisationConsommableWithIdOnly = await prisma.utilisationConsommable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisationConsommableFindManyArgs>(args?: SelectSubset<T, UtilisationConsommableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisationConsommablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UtilisationConsommable.
     * @param {UtilisationConsommableCreateArgs} args - Arguments to create a UtilisationConsommable.
     * @example
     * // Create one UtilisationConsommable
     * const UtilisationConsommable = await prisma.utilisationConsommable.create({
     *   data: {
     *     // ... data to create a UtilisationConsommable
     *   }
     * })
     * 
     */
    create<T extends UtilisationConsommableCreateArgs>(args: SelectSubset<T, UtilisationConsommableCreateArgs<ExtArgs>>): Prisma__UtilisationConsommableClient<$Result.GetResult<Prisma.$UtilisationConsommablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UtilisationConsommables.
     * @param {UtilisationConsommableCreateManyArgs} args - Arguments to create many UtilisationConsommables.
     * @example
     * // Create many UtilisationConsommables
     * const utilisationConsommable = await prisma.utilisationConsommable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisationConsommableCreateManyArgs>(args?: SelectSubset<T, UtilisationConsommableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UtilisationConsommables and returns the data saved in the database.
     * @param {UtilisationConsommableCreateManyAndReturnArgs} args - Arguments to create many UtilisationConsommables.
     * @example
     * // Create many UtilisationConsommables
     * const utilisationConsommable = await prisma.utilisationConsommable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UtilisationConsommables and only return the `id`
     * const utilisationConsommableWithIdOnly = await prisma.utilisationConsommable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisationConsommableCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisationConsommableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisationConsommablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UtilisationConsommable.
     * @param {UtilisationConsommableDeleteArgs} args - Arguments to delete one UtilisationConsommable.
     * @example
     * // Delete one UtilisationConsommable
     * const UtilisationConsommable = await prisma.utilisationConsommable.delete({
     *   where: {
     *     // ... filter to delete one UtilisationConsommable
     *   }
     * })
     * 
     */
    delete<T extends UtilisationConsommableDeleteArgs>(args: SelectSubset<T, UtilisationConsommableDeleteArgs<ExtArgs>>): Prisma__UtilisationConsommableClient<$Result.GetResult<Prisma.$UtilisationConsommablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UtilisationConsommable.
     * @param {UtilisationConsommableUpdateArgs} args - Arguments to update one UtilisationConsommable.
     * @example
     * // Update one UtilisationConsommable
     * const utilisationConsommable = await prisma.utilisationConsommable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisationConsommableUpdateArgs>(args: SelectSubset<T, UtilisationConsommableUpdateArgs<ExtArgs>>): Prisma__UtilisationConsommableClient<$Result.GetResult<Prisma.$UtilisationConsommablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UtilisationConsommables.
     * @param {UtilisationConsommableDeleteManyArgs} args - Arguments to filter UtilisationConsommables to delete.
     * @example
     * // Delete a few UtilisationConsommables
     * const { count } = await prisma.utilisationConsommable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisationConsommableDeleteManyArgs>(args?: SelectSubset<T, UtilisationConsommableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UtilisationConsommables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisationConsommableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UtilisationConsommables
     * const utilisationConsommable = await prisma.utilisationConsommable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisationConsommableUpdateManyArgs>(args: SelectSubset<T, UtilisationConsommableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UtilisationConsommables and returns the data updated in the database.
     * @param {UtilisationConsommableUpdateManyAndReturnArgs} args - Arguments to update many UtilisationConsommables.
     * @example
     * // Update many UtilisationConsommables
     * const utilisationConsommable = await prisma.utilisationConsommable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UtilisationConsommables and only return the `id`
     * const utilisationConsommableWithIdOnly = await prisma.utilisationConsommable.updateManyAndReturn({
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
    updateManyAndReturn<T extends UtilisationConsommableUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisationConsommableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisationConsommablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UtilisationConsommable.
     * @param {UtilisationConsommableUpsertArgs} args - Arguments to update or create a UtilisationConsommable.
     * @example
     * // Update or create a UtilisationConsommable
     * const utilisationConsommable = await prisma.utilisationConsommable.upsert({
     *   create: {
     *     // ... data to create a UtilisationConsommable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UtilisationConsommable we want to update
     *   }
     * })
     */
    upsert<T extends UtilisationConsommableUpsertArgs>(args: SelectSubset<T, UtilisationConsommableUpsertArgs<ExtArgs>>): Prisma__UtilisationConsommableClient<$Result.GetResult<Prisma.$UtilisationConsommablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UtilisationConsommables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisationConsommableCountArgs} args - Arguments to filter UtilisationConsommables to count.
     * @example
     * // Count the number of UtilisationConsommables
     * const count = await prisma.utilisationConsommable.count({
     *   where: {
     *     // ... the filter for the UtilisationConsommables we want to count
     *   }
     * })
    **/
    count<T extends UtilisationConsommableCountArgs>(
      args?: Subset<T, UtilisationConsommableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisationConsommableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UtilisationConsommable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisationConsommableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisationConsommableAggregateArgs>(args: Subset<T, UtilisationConsommableAggregateArgs>): Prisma.PrismaPromise<GetUtilisationConsommableAggregateType<T>>

    /**
     * Group by UtilisationConsommable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisationConsommableGroupByArgs} args - Group by arguments.
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
      T extends UtilisationConsommableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisationConsommableGroupByArgs['orderBy'] }
        : { orderBy?: UtilisationConsommableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilisationConsommableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisationConsommableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UtilisationConsommable model
   */
  readonly fields: UtilisationConsommableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UtilisationConsommable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisationConsommableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consommable<T extends ConsommableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsommableDefaultArgs<ExtArgs>>): Prisma__ConsommableClient<$Result.GetResult<Prisma.$ConsommablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UtilisationConsommable model
   */
  interface UtilisationConsommableFieldRefs {
    readonly id: FieldRef<"UtilisationConsommable", 'Int'>
    readonly utilisateurId: FieldRef<"UtilisationConsommable", 'Int'>
    readonly consommableId: FieldRef<"UtilisationConsommable", 'Int'>
    readonly quantiteUtilise: FieldRef<"UtilisationConsommable", 'Int'>
    readonly dateUtilisation: FieldRef<"UtilisationConsommable", 'DateTime'>
    readonly description: FieldRef<"UtilisationConsommable", 'String'>
    readonly createdAt: FieldRef<"UtilisationConsommable", 'DateTime'>
    readonly updatedAt: FieldRef<"UtilisationConsommable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UtilisationConsommable findUnique
   */
  export type UtilisationConsommableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisationConsommable
     */
    select?: UtilisationConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilisationConsommable
     */
    omit?: UtilisationConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisationConsommableInclude<ExtArgs> | null
    /**
     * Filter, which UtilisationConsommable to fetch.
     */
    where: UtilisationConsommableWhereUniqueInput
  }

  /**
   * UtilisationConsommable findUniqueOrThrow
   */
  export type UtilisationConsommableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisationConsommable
     */
    select?: UtilisationConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilisationConsommable
     */
    omit?: UtilisationConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisationConsommableInclude<ExtArgs> | null
    /**
     * Filter, which UtilisationConsommable to fetch.
     */
    where: UtilisationConsommableWhereUniqueInput
  }

  /**
   * UtilisationConsommable findFirst
   */
  export type UtilisationConsommableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisationConsommable
     */
    select?: UtilisationConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilisationConsommable
     */
    omit?: UtilisationConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisationConsommableInclude<ExtArgs> | null
    /**
     * Filter, which UtilisationConsommable to fetch.
     */
    where?: UtilisationConsommableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UtilisationConsommables to fetch.
     */
    orderBy?: UtilisationConsommableOrderByWithRelationInput | UtilisationConsommableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UtilisationConsommables.
     */
    cursor?: UtilisationConsommableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UtilisationConsommables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UtilisationConsommables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UtilisationConsommables.
     */
    distinct?: UtilisationConsommableScalarFieldEnum | UtilisationConsommableScalarFieldEnum[]
  }

  /**
   * UtilisationConsommable findFirstOrThrow
   */
  export type UtilisationConsommableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisationConsommable
     */
    select?: UtilisationConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilisationConsommable
     */
    omit?: UtilisationConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisationConsommableInclude<ExtArgs> | null
    /**
     * Filter, which UtilisationConsommable to fetch.
     */
    where?: UtilisationConsommableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UtilisationConsommables to fetch.
     */
    orderBy?: UtilisationConsommableOrderByWithRelationInput | UtilisationConsommableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UtilisationConsommables.
     */
    cursor?: UtilisationConsommableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UtilisationConsommables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UtilisationConsommables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UtilisationConsommables.
     */
    distinct?: UtilisationConsommableScalarFieldEnum | UtilisationConsommableScalarFieldEnum[]
  }

  /**
   * UtilisationConsommable findMany
   */
  export type UtilisationConsommableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisationConsommable
     */
    select?: UtilisationConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilisationConsommable
     */
    omit?: UtilisationConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisationConsommableInclude<ExtArgs> | null
    /**
     * Filter, which UtilisationConsommables to fetch.
     */
    where?: UtilisationConsommableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UtilisationConsommables to fetch.
     */
    orderBy?: UtilisationConsommableOrderByWithRelationInput | UtilisationConsommableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UtilisationConsommables.
     */
    cursor?: UtilisationConsommableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UtilisationConsommables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UtilisationConsommables.
     */
    skip?: number
    distinct?: UtilisationConsommableScalarFieldEnum | UtilisationConsommableScalarFieldEnum[]
  }

  /**
   * UtilisationConsommable create
   */
  export type UtilisationConsommableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisationConsommable
     */
    select?: UtilisationConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilisationConsommable
     */
    omit?: UtilisationConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisationConsommableInclude<ExtArgs> | null
    /**
     * The data needed to create a UtilisationConsommable.
     */
    data: XOR<UtilisationConsommableCreateInput, UtilisationConsommableUncheckedCreateInput>
  }

  /**
   * UtilisationConsommable createMany
   */
  export type UtilisationConsommableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UtilisationConsommables.
     */
    data: UtilisationConsommableCreateManyInput | UtilisationConsommableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UtilisationConsommable createManyAndReturn
   */
  export type UtilisationConsommableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisationConsommable
     */
    select?: UtilisationConsommableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UtilisationConsommable
     */
    omit?: UtilisationConsommableOmit<ExtArgs> | null
    /**
     * The data used to create many UtilisationConsommables.
     */
    data: UtilisationConsommableCreateManyInput | UtilisationConsommableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisationConsommableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UtilisationConsommable update
   */
  export type UtilisationConsommableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisationConsommable
     */
    select?: UtilisationConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilisationConsommable
     */
    omit?: UtilisationConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisationConsommableInclude<ExtArgs> | null
    /**
     * The data needed to update a UtilisationConsommable.
     */
    data: XOR<UtilisationConsommableUpdateInput, UtilisationConsommableUncheckedUpdateInput>
    /**
     * Choose, which UtilisationConsommable to update.
     */
    where: UtilisationConsommableWhereUniqueInput
  }

  /**
   * UtilisationConsommable updateMany
   */
  export type UtilisationConsommableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UtilisationConsommables.
     */
    data: XOR<UtilisationConsommableUpdateManyMutationInput, UtilisationConsommableUncheckedUpdateManyInput>
    /**
     * Filter which UtilisationConsommables to update
     */
    where?: UtilisationConsommableWhereInput
    /**
     * Limit how many UtilisationConsommables to update.
     */
    limit?: number
  }

  /**
   * UtilisationConsommable updateManyAndReturn
   */
  export type UtilisationConsommableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisationConsommable
     */
    select?: UtilisationConsommableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UtilisationConsommable
     */
    omit?: UtilisationConsommableOmit<ExtArgs> | null
    /**
     * The data used to update UtilisationConsommables.
     */
    data: XOR<UtilisationConsommableUpdateManyMutationInput, UtilisationConsommableUncheckedUpdateManyInput>
    /**
     * Filter which UtilisationConsommables to update
     */
    where?: UtilisationConsommableWhereInput
    /**
     * Limit how many UtilisationConsommables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisationConsommableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UtilisationConsommable upsert
   */
  export type UtilisationConsommableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisationConsommable
     */
    select?: UtilisationConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilisationConsommable
     */
    omit?: UtilisationConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisationConsommableInclude<ExtArgs> | null
    /**
     * The filter to search for the UtilisationConsommable to update in case it exists.
     */
    where: UtilisationConsommableWhereUniqueInput
    /**
     * In case the UtilisationConsommable found by the `where` argument doesn't exist, create a new UtilisationConsommable with this data.
     */
    create: XOR<UtilisationConsommableCreateInput, UtilisationConsommableUncheckedCreateInput>
    /**
     * In case the UtilisationConsommable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisationConsommableUpdateInput, UtilisationConsommableUncheckedUpdateInput>
  }

  /**
   * UtilisationConsommable delete
   */
  export type UtilisationConsommableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisationConsommable
     */
    select?: UtilisationConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilisationConsommable
     */
    omit?: UtilisationConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisationConsommableInclude<ExtArgs> | null
    /**
     * Filter which UtilisationConsommable to delete.
     */
    where: UtilisationConsommableWhereUniqueInput
  }

  /**
   * UtilisationConsommable deleteMany
   */
  export type UtilisationConsommableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UtilisationConsommables to delete
     */
    where?: UtilisationConsommableWhereInput
    /**
     * Limit how many UtilisationConsommables to delete.
     */
    limit?: number
  }

  /**
   * UtilisationConsommable without action
   */
  export type UtilisationConsommableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisationConsommable
     */
    select?: UtilisationConsommableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilisationConsommable
     */
    omit?: UtilisationConsommableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisationConsommableInclude<ExtArgs> | null
  }


  /**
   * Model Rapport
   */

  export type AggregateRapport = {
    _count: RapportCountAggregateOutputType | null
    _avg: RapportAvgAggregateOutputType | null
    _sum: RapportSumAggregateOutputType | null
    _min: RapportMinAggregateOutputType | null
    _max: RapportMaxAggregateOutputType | null
  }

  export type RapportAvgAggregateOutputType = {
    id: number | null
  }

  export type RapportSumAggregateOutputType = {
    id: number | null
  }

  export type RapportMinAggregateOutputType = {
    id: number | null
    contenu: string | null
    periode: $Enums.Periode | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RapportMaxAggregateOutputType = {
    id: number | null
    contenu: string | null
    periode: $Enums.Periode | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RapportCountAggregateOutputType = {
    id: number
    contenu: number
    periode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RapportAvgAggregateInputType = {
    id?: true
  }

  export type RapportSumAggregateInputType = {
    id?: true
  }

  export type RapportMinAggregateInputType = {
    id?: true
    contenu?: true
    periode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RapportMaxAggregateInputType = {
    id?: true
    contenu?: true
    periode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RapportCountAggregateInputType = {
    id?: true
    contenu?: true
    periode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RapportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rapport to aggregate.
     */
    where?: RapportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rapports to fetch.
     */
    orderBy?: RapportOrderByWithRelationInput | RapportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RapportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rapports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rapports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rapports
    **/
    _count?: true | RapportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RapportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RapportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RapportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RapportMaxAggregateInputType
  }

  export type GetRapportAggregateType<T extends RapportAggregateArgs> = {
        [P in keyof T & keyof AggregateRapport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRapport[P]>
      : GetScalarType<T[P], AggregateRapport[P]>
  }




  export type RapportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RapportWhereInput
    orderBy?: RapportOrderByWithAggregationInput | RapportOrderByWithAggregationInput[]
    by: RapportScalarFieldEnum[] | RapportScalarFieldEnum
    having?: RapportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RapportCountAggregateInputType | true
    _avg?: RapportAvgAggregateInputType
    _sum?: RapportSumAggregateInputType
    _min?: RapportMinAggregateInputType
    _max?: RapportMaxAggregateInputType
  }

  export type RapportGroupByOutputType = {
    id: number
    contenu: string
    periode: $Enums.Periode
    createdAt: Date
    updatedAt: Date
    _count: RapportCountAggregateOutputType | null
    _avg: RapportAvgAggregateOutputType | null
    _sum: RapportSumAggregateOutputType | null
    _min: RapportMinAggregateOutputType | null
    _max: RapportMaxAggregateOutputType | null
  }

  type GetRapportGroupByPayload<T extends RapportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RapportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RapportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RapportGroupByOutputType[P]>
            : GetScalarType<T[P], RapportGroupByOutputType[P]>
        }
      >
    >


  export type RapportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    periode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rapport"]>

  export type RapportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    periode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rapport"]>

  export type RapportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    periode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rapport"]>

  export type RapportSelectScalar = {
    id?: boolean
    contenu?: boolean
    periode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RapportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenu" | "periode" | "createdAt" | "updatedAt", ExtArgs["result"]["rapport"]>

  export type $RapportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rapport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contenu: string
      periode: $Enums.Periode
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rapport"]>
    composites: {}
  }

  type RapportGetPayload<S extends boolean | null | undefined | RapportDefaultArgs> = $Result.GetResult<Prisma.$RapportPayload, S>

  type RapportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RapportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RapportCountAggregateInputType | true
    }

  export interface RapportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rapport'], meta: { name: 'Rapport' } }
    /**
     * Find zero or one Rapport that matches the filter.
     * @param {RapportFindUniqueArgs} args - Arguments to find a Rapport
     * @example
     * // Get one Rapport
     * const rapport = await prisma.rapport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RapportFindUniqueArgs>(args: SelectSubset<T, RapportFindUniqueArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rapport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RapportFindUniqueOrThrowArgs} args - Arguments to find a Rapport
     * @example
     * // Get one Rapport
     * const rapport = await prisma.rapport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RapportFindUniqueOrThrowArgs>(args: SelectSubset<T, RapportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rapport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportFindFirstArgs} args - Arguments to find a Rapport
     * @example
     * // Get one Rapport
     * const rapport = await prisma.rapport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RapportFindFirstArgs>(args?: SelectSubset<T, RapportFindFirstArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rapport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportFindFirstOrThrowArgs} args - Arguments to find a Rapport
     * @example
     * // Get one Rapport
     * const rapport = await prisma.rapport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RapportFindFirstOrThrowArgs>(args?: SelectSubset<T, RapportFindFirstOrThrowArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rapports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rapports
     * const rapports = await prisma.rapport.findMany()
     * 
     * // Get first 10 Rapports
     * const rapports = await prisma.rapport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rapportWithIdOnly = await prisma.rapport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RapportFindManyArgs>(args?: SelectSubset<T, RapportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rapport.
     * @param {RapportCreateArgs} args - Arguments to create a Rapport.
     * @example
     * // Create one Rapport
     * const Rapport = await prisma.rapport.create({
     *   data: {
     *     // ... data to create a Rapport
     *   }
     * })
     * 
     */
    create<T extends RapportCreateArgs>(args: SelectSubset<T, RapportCreateArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rapports.
     * @param {RapportCreateManyArgs} args - Arguments to create many Rapports.
     * @example
     * // Create many Rapports
     * const rapport = await prisma.rapport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RapportCreateManyArgs>(args?: SelectSubset<T, RapportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rapports and returns the data saved in the database.
     * @param {RapportCreateManyAndReturnArgs} args - Arguments to create many Rapports.
     * @example
     * // Create many Rapports
     * const rapport = await prisma.rapport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rapports and only return the `id`
     * const rapportWithIdOnly = await prisma.rapport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RapportCreateManyAndReturnArgs>(args?: SelectSubset<T, RapportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rapport.
     * @param {RapportDeleteArgs} args - Arguments to delete one Rapport.
     * @example
     * // Delete one Rapport
     * const Rapport = await prisma.rapport.delete({
     *   where: {
     *     // ... filter to delete one Rapport
     *   }
     * })
     * 
     */
    delete<T extends RapportDeleteArgs>(args: SelectSubset<T, RapportDeleteArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rapport.
     * @param {RapportUpdateArgs} args - Arguments to update one Rapport.
     * @example
     * // Update one Rapport
     * const rapport = await prisma.rapport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RapportUpdateArgs>(args: SelectSubset<T, RapportUpdateArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rapports.
     * @param {RapportDeleteManyArgs} args - Arguments to filter Rapports to delete.
     * @example
     * // Delete a few Rapports
     * const { count } = await prisma.rapport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RapportDeleteManyArgs>(args?: SelectSubset<T, RapportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rapports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rapports
     * const rapport = await prisma.rapport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RapportUpdateManyArgs>(args: SelectSubset<T, RapportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rapports and returns the data updated in the database.
     * @param {RapportUpdateManyAndReturnArgs} args - Arguments to update many Rapports.
     * @example
     * // Update many Rapports
     * const rapport = await prisma.rapport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rapports and only return the `id`
     * const rapportWithIdOnly = await prisma.rapport.updateManyAndReturn({
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
    updateManyAndReturn<T extends RapportUpdateManyAndReturnArgs>(args: SelectSubset<T, RapportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rapport.
     * @param {RapportUpsertArgs} args - Arguments to update or create a Rapport.
     * @example
     * // Update or create a Rapport
     * const rapport = await prisma.rapport.upsert({
     *   create: {
     *     // ... data to create a Rapport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rapport we want to update
     *   }
     * })
     */
    upsert<T extends RapportUpsertArgs>(args: SelectSubset<T, RapportUpsertArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rapports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportCountArgs} args - Arguments to filter Rapports to count.
     * @example
     * // Count the number of Rapports
     * const count = await prisma.rapport.count({
     *   where: {
     *     // ... the filter for the Rapports we want to count
     *   }
     * })
    **/
    count<T extends RapportCountArgs>(
      args?: Subset<T, RapportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RapportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rapport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RapportAggregateArgs>(args: Subset<T, RapportAggregateArgs>): Prisma.PrismaPromise<GetRapportAggregateType<T>>

    /**
     * Group by Rapport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportGroupByArgs} args - Group by arguments.
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
      T extends RapportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RapportGroupByArgs['orderBy'] }
        : { orderBy?: RapportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RapportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRapportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rapport model
   */
  readonly fields: RapportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rapport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RapportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Rapport model
   */
  interface RapportFieldRefs {
    readonly id: FieldRef<"Rapport", 'Int'>
    readonly contenu: FieldRef<"Rapport", 'String'>
    readonly periode: FieldRef<"Rapport", 'Periode'>
    readonly createdAt: FieldRef<"Rapport", 'DateTime'>
    readonly updatedAt: FieldRef<"Rapport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rapport findUnique
   */
  export type RapportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Filter, which Rapport to fetch.
     */
    where: RapportWhereUniqueInput
  }

  /**
   * Rapport findUniqueOrThrow
   */
  export type RapportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Filter, which Rapport to fetch.
     */
    where: RapportWhereUniqueInput
  }

  /**
   * Rapport findFirst
   */
  export type RapportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Filter, which Rapport to fetch.
     */
    where?: RapportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rapports to fetch.
     */
    orderBy?: RapportOrderByWithRelationInput | RapportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rapports.
     */
    cursor?: RapportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rapports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rapports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rapports.
     */
    distinct?: RapportScalarFieldEnum | RapportScalarFieldEnum[]
  }

  /**
   * Rapport findFirstOrThrow
   */
  export type RapportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Filter, which Rapport to fetch.
     */
    where?: RapportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rapports to fetch.
     */
    orderBy?: RapportOrderByWithRelationInput | RapportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rapports.
     */
    cursor?: RapportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rapports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rapports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rapports.
     */
    distinct?: RapportScalarFieldEnum | RapportScalarFieldEnum[]
  }

  /**
   * Rapport findMany
   */
  export type RapportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Filter, which Rapports to fetch.
     */
    where?: RapportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rapports to fetch.
     */
    orderBy?: RapportOrderByWithRelationInput | RapportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rapports.
     */
    cursor?: RapportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rapports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rapports.
     */
    skip?: number
    distinct?: RapportScalarFieldEnum | RapportScalarFieldEnum[]
  }

  /**
   * Rapport create
   */
  export type RapportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * The data needed to create a Rapport.
     */
    data: XOR<RapportCreateInput, RapportUncheckedCreateInput>
  }

  /**
   * Rapport createMany
   */
  export type RapportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rapports.
     */
    data: RapportCreateManyInput | RapportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rapport createManyAndReturn
   */
  export type RapportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * The data used to create many Rapports.
     */
    data: RapportCreateManyInput | RapportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rapport update
   */
  export type RapportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * The data needed to update a Rapport.
     */
    data: XOR<RapportUpdateInput, RapportUncheckedUpdateInput>
    /**
     * Choose, which Rapport to update.
     */
    where: RapportWhereUniqueInput
  }

  /**
   * Rapport updateMany
   */
  export type RapportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rapports.
     */
    data: XOR<RapportUpdateManyMutationInput, RapportUncheckedUpdateManyInput>
    /**
     * Filter which Rapports to update
     */
    where?: RapportWhereInput
    /**
     * Limit how many Rapports to update.
     */
    limit?: number
  }

  /**
   * Rapport updateManyAndReturn
   */
  export type RapportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * The data used to update Rapports.
     */
    data: XOR<RapportUpdateManyMutationInput, RapportUncheckedUpdateManyInput>
    /**
     * Filter which Rapports to update
     */
    where?: RapportWhereInput
    /**
     * Limit how many Rapports to update.
     */
    limit?: number
  }

  /**
   * Rapport upsert
   */
  export type RapportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * The filter to search for the Rapport to update in case it exists.
     */
    where: RapportWhereUniqueInput
    /**
     * In case the Rapport found by the `where` argument doesn't exist, create a new Rapport with this data.
     */
    create: XOR<RapportCreateInput, RapportUncheckedCreateInput>
    /**
     * In case the Rapport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RapportUpdateInput, RapportUncheckedUpdateInput>
  }

  /**
   * Rapport delete
   */
  export type RapportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Filter which Rapport to delete.
     */
    where: RapportWhereUniqueInput
  }

  /**
   * Rapport deleteMany
   */
  export type RapportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rapports to delete
     */
    where?: RapportWhereInput
    /**
     * Limit how many Rapports to delete.
     */
    limit?: number
  }

  /**
   * Rapport without action
   */
  export type RapportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
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


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    motdepasse: 'motdepasse',
    role: 'role',
    photo: 'photo',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const EmpruntScalarFieldEnum: {
    id: 'id',
    utilisateurId: 'utilisateurId',
    equipementId: 'equipementId',
    dateEmprunt: 'dateEmprunt',
    dateRetourPrevu: 'dateRetourPrevu',
    dateRetourEffective: 'dateRetourEffective',
    usage: 'usage',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmpruntScalarFieldEnum = (typeof EmpruntScalarFieldEnum)[keyof typeof EmpruntScalarFieldEnum]


  export const DemandeEmpruntScalarFieldEnum: {
    id: 'id',
    utilisateurId: 'utilisateurId',
    equipementId: 'equipementId',
    dateDemande: 'dateDemande',
    dateRetourPrevu: 'dateRetourPrevu',
    usage: 'usage',
    statut: 'statut',
    type: 'type',
    motif: 'motif',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DemandeEmpruntScalarFieldEnum = (typeof DemandeEmpruntScalarFieldEnum)[keyof typeof DemandeEmpruntScalarFieldEnum]


  export const EquipementScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    numeroDeSerie: 'numeroDeSerie',
    marque: 'marque',
    disponibilite: 'disponibilite',
    etatMateriel: 'etatMateriel',
    obtention: 'obtention',
    prix: 'prix',
    fournisseur: 'fournisseur',
    donateur: 'donateur',
    photo: 'photo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipementScalarFieldEnum = (typeof EquipementScalarFieldEnum)[keyof typeof EquipementScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    empruntId: 'empruntId',
    demandeEmpruntId: 'demandeEmpruntId',
    consommableId: 'consommableId',
    message: 'message',
    DateEnvoi: 'DateEnvoi',
    type: 'type',
    vu: 'vu',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ConsommableScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    marque: 'marque',
    quantiteDisponible: 'quantiteDisponible',
    seuilCritique: 'seuilCritique',
    obtention: 'obtention',
    fournisseur: 'fournisseur',
    donnateur: 'donnateur',
    photo: 'photo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConsommableScalarFieldEnum = (typeof ConsommableScalarFieldEnum)[keyof typeof ConsommableScalarFieldEnum]


  export const UtilisationConsommableScalarFieldEnum: {
    id: 'id',
    utilisateurId: 'utilisateurId',
    consommableId: 'consommableId',
    quantiteUtilise: 'quantiteUtilise',
    dateUtilisation: 'dateUtilisation',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UtilisationConsommableScalarFieldEnum = (typeof UtilisationConsommableScalarFieldEnum)[keyof typeof UtilisationConsommableScalarFieldEnum]


  export const RapportScalarFieldEnum: {
    id: 'id',
    contenu: 'contenu',
    periode: 'periode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RapportScalarFieldEnum = (typeof RapportScalarFieldEnum)[keyof typeof RapportScalarFieldEnum]


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
   * Reference to a field of type 'RoleUtilisateur'
   */
  export type EnumRoleUtilisateurFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleUtilisateur'>
    


  /**
   * Reference to a field of type 'RoleUtilisateur[]'
   */
  export type ListEnumRoleUtilisateurFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleUtilisateur[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Statut'
   */
  export type EnumStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Statut'>
    


  /**
   * Reference to a field of type 'Statut[]'
   */
  export type ListEnumStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Statut[]'>
    


  /**
   * Reference to a field of type 'StatutDemande'
   */
  export type EnumStatutDemandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDemande'>
    


  /**
   * Reference to a field of type 'StatutDemande[]'
   */
  export type ListEnumStatutDemandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDemande[]'>
    


  /**
   * Reference to a field of type 'TypeDemande'
   */
  export type EnumTypeDemandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeDemande'>
    


  /**
   * Reference to a field of type 'TypeDemande[]'
   */
  export type ListEnumTypeDemandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeDemande[]'>
    


  /**
   * Reference to a field of type 'Disponibilite'
   */
  export type EnumDisponibiliteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Disponibilite'>
    


  /**
   * Reference to a field of type 'Disponibilite[]'
   */
  export type ListEnumDisponibiliteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Disponibilite[]'>
    


  /**
   * Reference to a field of type 'EtatMateriel'
   */
  export type EnumEtatMaterielFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EtatMateriel'>
    


  /**
   * Reference to a field of type 'EtatMateriel[]'
   */
  export type ListEnumEtatMaterielFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EtatMateriel[]'>
    


  /**
   * Reference to a field of type 'Obtention'
   */
  export type EnumObtentionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Obtention'>
    


  /**
   * Reference to a field of type 'Obtention[]'
   */
  export type ListEnumObtentionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Obtention[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TypeNotification'
   */
  export type EnumTypeNotificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeNotification'>
    


  /**
   * Reference to a field of type 'TypeNotification[]'
   */
  export type ListEnumTypeNotificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeNotification[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Periode'
   */
  export type EnumPeriodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Periode'>
    


  /**
   * Reference to a field of type 'Periode[]'
   */
  export type ListEnumPeriodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Periode[]'>
    
  /**
   * Deep Input Types
   */


  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: IntFilter<"Utilisateur"> | number
    nom?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    motdepasse?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleUtilisateurFilter<"Utilisateur"> | $Enums.RoleUtilisateur
    photo?: StringNullableFilter<"Utilisateur"> | string | null
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    updateAt?: DateTimeFilter<"Utilisateur"> | Date | string
    emprunts?: EmpruntListRelationFilter
    demandeEmprunt?: DemandeEmpruntListRelationFilter
    utilisationsConsommable?: UtilisationConsommableListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motdepasse?: SortOrder
    role?: SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    emprunts?: EmpruntOrderByRelationAggregateInput
    demandeEmprunt?: DemandeEmpruntOrderByRelationAggregateInput
    utilisationsConsommable?: UtilisationConsommableOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    nom?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    motdepasse?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleUtilisateurFilter<"Utilisateur"> | $Enums.RoleUtilisateur
    photo?: StringNullableFilter<"Utilisateur"> | string | null
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    updateAt?: DateTimeFilter<"Utilisateur"> | Date | string
    emprunts?: EmpruntListRelationFilter
    demandeEmprunt?: DemandeEmpruntListRelationFilter
    utilisationsConsommable?: UtilisationConsommableListRelationFilter
  }, "id" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motdepasse?: SortOrder
    role?: SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _avg?: UtilisateurAvgOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
    _sum?: UtilisateurSumOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Utilisateur"> | number
    nom?: StringWithAggregatesFilter<"Utilisateur"> | string
    prenom?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    motdepasse?: StringWithAggregatesFilter<"Utilisateur"> | string
    role?: EnumRoleUtilisateurWithAggregatesFilter<"Utilisateur"> | $Enums.RoleUtilisateur
    photo?: StringNullableWithAggregatesFilter<"Utilisateur"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
  }

  export type EmpruntWhereInput = {
    AND?: EmpruntWhereInput | EmpruntWhereInput[]
    OR?: EmpruntWhereInput[]
    NOT?: EmpruntWhereInput | EmpruntWhereInput[]
    id?: IntFilter<"Emprunt"> | number
    utilisateurId?: IntFilter<"Emprunt"> | number
    equipementId?: IntFilter<"Emprunt"> | number
    dateEmprunt?: DateTimeFilter<"Emprunt"> | Date | string
    dateRetourPrevu?: DateTimeFilter<"Emprunt"> | Date | string
    dateRetourEffective?: DateTimeNullableFilter<"Emprunt"> | Date | string | null
    usage?: StringFilter<"Emprunt"> | string
    statut?: EnumStatutFilter<"Emprunt"> | $Enums.Statut
    createdAt?: DateTimeFilter<"Emprunt"> | Date | string
    updatedAt?: DateTimeFilter<"Emprunt"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    equipement?: XOR<EquipementScalarRelationFilter, EquipementWhereInput>
    notification?: NotificationListRelationFilter
  }

  export type EmpruntOrderByWithRelationInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    equipementId?: SortOrder
    dateEmprunt?: SortOrder
    dateRetourPrevu?: SortOrder
    dateRetourEffective?: SortOrderInput | SortOrder
    usage?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    equipement?: EquipementOrderByWithRelationInput
    notification?: NotificationOrderByRelationAggregateInput
  }

  export type EmpruntWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmpruntWhereInput | EmpruntWhereInput[]
    OR?: EmpruntWhereInput[]
    NOT?: EmpruntWhereInput | EmpruntWhereInput[]
    utilisateurId?: IntFilter<"Emprunt"> | number
    equipementId?: IntFilter<"Emprunt"> | number
    dateEmprunt?: DateTimeFilter<"Emprunt"> | Date | string
    dateRetourPrevu?: DateTimeFilter<"Emprunt"> | Date | string
    dateRetourEffective?: DateTimeNullableFilter<"Emprunt"> | Date | string | null
    usage?: StringFilter<"Emprunt"> | string
    statut?: EnumStatutFilter<"Emprunt"> | $Enums.Statut
    createdAt?: DateTimeFilter<"Emprunt"> | Date | string
    updatedAt?: DateTimeFilter<"Emprunt"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    equipement?: XOR<EquipementScalarRelationFilter, EquipementWhereInput>
    notification?: NotificationListRelationFilter
  }, "id">

  export type EmpruntOrderByWithAggregationInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    equipementId?: SortOrder
    dateEmprunt?: SortOrder
    dateRetourPrevu?: SortOrder
    dateRetourEffective?: SortOrderInput | SortOrder
    usage?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmpruntCountOrderByAggregateInput
    _avg?: EmpruntAvgOrderByAggregateInput
    _max?: EmpruntMaxOrderByAggregateInput
    _min?: EmpruntMinOrderByAggregateInput
    _sum?: EmpruntSumOrderByAggregateInput
  }

  export type EmpruntScalarWhereWithAggregatesInput = {
    AND?: EmpruntScalarWhereWithAggregatesInput | EmpruntScalarWhereWithAggregatesInput[]
    OR?: EmpruntScalarWhereWithAggregatesInput[]
    NOT?: EmpruntScalarWhereWithAggregatesInput | EmpruntScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Emprunt"> | number
    utilisateurId?: IntWithAggregatesFilter<"Emprunt"> | number
    equipementId?: IntWithAggregatesFilter<"Emprunt"> | number
    dateEmprunt?: DateTimeWithAggregatesFilter<"Emprunt"> | Date | string
    dateRetourPrevu?: DateTimeWithAggregatesFilter<"Emprunt"> | Date | string
    dateRetourEffective?: DateTimeNullableWithAggregatesFilter<"Emprunt"> | Date | string | null
    usage?: StringWithAggregatesFilter<"Emprunt"> | string
    statut?: EnumStatutWithAggregatesFilter<"Emprunt"> | $Enums.Statut
    createdAt?: DateTimeWithAggregatesFilter<"Emprunt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Emprunt"> | Date | string
  }

  export type DemandeEmpruntWhereInput = {
    AND?: DemandeEmpruntWhereInput | DemandeEmpruntWhereInput[]
    OR?: DemandeEmpruntWhereInput[]
    NOT?: DemandeEmpruntWhereInput | DemandeEmpruntWhereInput[]
    id?: IntFilter<"DemandeEmprunt"> | number
    utilisateurId?: IntFilter<"DemandeEmprunt"> | number
    equipementId?: IntFilter<"DemandeEmprunt"> | number
    dateDemande?: DateTimeFilter<"DemandeEmprunt"> | Date | string
    dateRetourPrevu?: DateTimeFilter<"DemandeEmprunt"> | Date | string
    usage?: StringFilter<"DemandeEmprunt"> | string
    statut?: EnumStatutDemandeFilter<"DemandeEmprunt"> | $Enums.StatutDemande
    type?: EnumTypeDemandeFilter<"DemandeEmprunt"> | $Enums.TypeDemande
    motif?: StringNullableFilter<"DemandeEmprunt"> | string | null
    createdAt?: DateTimeFilter<"DemandeEmprunt"> | Date | string
    updatedAt?: DateTimeFilter<"DemandeEmprunt"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    equipement?: XOR<EquipementScalarRelationFilter, EquipementWhereInput>
    notification?: NotificationListRelationFilter
  }

  export type DemandeEmpruntOrderByWithRelationInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    equipementId?: SortOrder
    dateDemande?: SortOrder
    dateRetourPrevu?: SortOrder
    usage?: SortOrder
    statut?: SortOrder
    type?: SortOrder
    motif?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    equipement?: EquipementOrderByWithRelationInput
    notification?: NotificationOrderByRelationAggregateInput
  }

  export type DemandeEmpruntWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DemandeEmpruntWhereInput | DemandeEmpruntWhereInput[]
    OR?: DemandeEmpruntWhereInput[]
    NOT?: DemandeEmpruntWhereInput | DemandeEmpruntWhereInput[]
    utilisateurId?: IntFilter<"DemandeEmprunt"> | number
    equipementId?: IntFilter<"DemandeEmprunt"> | number
    dateDemande?: DateTimeFilter<"DemandeEmprunt"> | Date | string
    dateRetourPrevu?: DateTimeFilter<"DemandeEmprunt"> | Date | string
    usage?: StringFilter<"DemandeEmprunt"> | string
    statut?: EnumStatutDemandeFilter<"DemandeEmprunt"> | $Enums.StatutDemande
    type?: EnumTypeDemandeFilter<"DemandeEmprunt"> | $Enums.TypeDemande
    motif?: StringNullableFilter<"DemandeEmprunt"> | string | null
    createdAt?: DateTimeFilter<"DemandeEmprunt"> | Date | string
    updatedAt?: DateTimeFilter<"DemandeEmprunt"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    equipement?: XOR<EquipementScalarRelationFilter, EquipementWhereInput>
    notification?: NotificationListRelationFilter
  }, "id">

  export type DemandeEmpruntOrderByWithAggregationInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    equipementId?: SortOrder
    dateDemande?: SortOrder
    dateRetourPrevu?: SortOrder
    usage?: SortOrder
    statut?: SortOrder
    type?: SortOrder
    motif?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DemandeEmpruntCountOrderByAggregateInput
    _avg?: DemandeEmpruntAvgOrderByAggregateInput
    _max?: DemandeEmpruntMaxOrderByAggregateInput
    _min?: DemandeEmpruntMinOrderByAggregateInput
    _sum?: DemandeEmpruntSumOrderByAggregateInput
  }

  export type DemandeEmpruntScalarWhereWithAggregatesInput = {
    AND?: DemandeEmpruntScalarWhereWithAggregatesInput | DemandeEmpruntScalarWhereWithAggregatesInput[]
    OR?: DemandeEmpruntScalarWhereWithAggregatesInput[]
    NOT?: DemandeEmpruntScalarWhereWithAggregatesInput | DemandeEmpruntScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DemandeEmprunt"> | number
    utilisateurId?: IntWithAggregatesFilter<"DemandeEmprunt"> | number
    equipementId?: IntWithAggregatesFilter<"DemandeEmprunt"> | number
    dateDemande?: DateTimeWithAggregatesFilter<"DemandeEmprunt"> | Date | string
    dateRetourPrevu?: DateTimeWithAggregatesFilter<"DemandeEmprunt"> | Date | string
    usage?: StringWithAggregatesFilter<"DemandeEmprunt"> | string
    statut?: EnumStatutDemandeWithAggregatesFilter<"DemandeEmprunt"> | $Enums.StatutDemande
    type?: EnumTypeDemandeWithAggregatesFilter<"DemandeEmprunt"> | $Enums.TypeDemande
    motif?: StringNullableWithAggregatesFilter<"DemandeEmprunt"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DemandeEmprunt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DemandeEmprunt"> | Date | string
  }

  export type EquipementWhereInput = {
    AND?: EquipementWhereInput | EquipementWhereInput[]
    OR?: EquipementWhereInput[]
    NOT?: EquipementWhereInput | EquipementWhereInput[]
    id?: IntFilter<"Equipement"> | number
    nom?: StringFilter<"Equipement"> | string
    numeroDeSerie?: StringFilter<"Equipement"> | string
    marque?: StringFilter<"Equipement"> | string
    disponibilite?: EnumDisponibiliteFilter<"Equipement"> | $Enums.Disponibilite
    etatMateriel?: EnumEtatMaterielFilter<"Equipement"> | $Enums.EtatMateriel
    obtention?: EnumObtentionFilter<"Equipement"> | $Enums.Obtention
    prix?: FloatFilter<"Equipement"> | number
    fournisseur?: StringNullableFilter<"Equipement"> | string | null
    donateur?: StringNullableFilter<"Equipement"> | string | null
    photo?: StringNullableFilter<"Equipement"> | string | null
    createdAt?: DateTimeFilter<"Equipement"> | Date | string
    updatedAt?: DateTimeFilter<"Equipement"> | Date | string
    emprunt?: EmpruntListRelationFilter
    demandeEmprunt?: DemandeEmpruntListRelationFilter
  }

  export type EquipementOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    numeroDeSerie?: SortOrder
    marque?: SortOrder
    disponibilite?: SortOrder
    etatMateriel?: SortOrder
    obtention?: SortOrder
    prix?: SortOrder
    fournisseur?: SortOrderInput | SortOrder
    donateur?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emprunt?: EmpruntOrderByRelationAggregateInput
    demandeEmprunt?: DemandeEmpruntOrderByRelationAggregateInput
  }

  export type EquipementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipementWhereInput | EquipementWhereInput[]
    OR?: EquipementWhereInput[]
    NOT?: EquipementWhereInput | EquipementWhereInput[]
    nom?: StringFilter<"Equipement"> | string
    numeroDeSerie?: StringFilter<"Equipement"> | string
    marque?: StringFilter<"Equipement"> | string
    disponibilite?: EnumDisponibiliteFilter<"Equipement"> | $Enums.Disponibilite
    etatMateriel?: EnumEtatMaterielFilter<"Equipement"> | $Enums.EtatMateriel
    obtention?: EnumObtentionFilter<"Equipement"> | $Enums.Obtention
    prix?: FloatFilter<"Equipement"> | number
    fournisseur?: StringNullableFilter<"Equipement"> | string | null
    donateur?: StringNullableFilter<"Equipement"> | string | null
    photo?: StringNullableFilter<"Equipement"> | string | null
    createdAt?: DateTimeFilter<"Equipement"> | Date | string
    updatedAt?: DateTimeFilter<"Equipement"> | Date | string
    emprunt?: EmpruntListRelationFilter
    demandeEmprunt?: DemandeEmpruntListRelationFilter
  }, "id">

  export type EquipementOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    numeroDeSerie?: SortOrder
    marque?: SortOrder
    disponibilite?: SortOrder
    etatMateriel?: SortOrder
    obtention?: SortOrder
    prix?: SortOrder
    fournisseur?: SortOrderInput | SortOrder
    donateur?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipementCountOrderByAggregateInput
    _avg?: EquipementAvgOrderByAggregateInput
    _max?: EquipementMaxOrderByAggregateInput
    _min?: EquipementMinOrderByAggregateInput
    _sum?: EquipementSumOrderByAggregateInput
  }

  export type EquipementScalarWhereWithAggregatesInput = {
    AND?: EquipementScalarWhereWithAggregatesInput | EquipementScalarWhereWithAggregatesInput[]
    OR?: EquipementScalarWhereWithAggregatesInput[]
    NOT?: EquipementScalarWhereWithAggregatesInput | EquipementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipement"> | number
    nom?: StringWithAggregatesFilter<"Equipement"> | string
    numeroDeSerie?: StringWithAggregatesFilter<"Equipement"> | string
    marque?: StringWithAggregatesFilter<"Equipement"> | string
    disponibilite?: EnumDisponibiliteWithAggregatesFilter<"Equipement"> | $Enums.Disponibilite
    etatMateriel?: EnumEtatMaterielWithAggregatesFilter<"Equipement"> | $Enums.EtatMateriel
    obtention?: EnumObtentionWithAggregatesFilter<"Equipement"> | $Enums.Obtention
    prix?: FloatWithAggregatesFilter<"Equipement"> | number
    fournisseur?: StringNullableWithAggregatesFilter<"Equipement"> | string | null
    donateur?: StringNullableWithAggregatesFilter<"Equipement"> | string | null
    photo?: StringNullableWithAggregatesFilter<"Equipement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Equipement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Equipement"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    empruntId?: IntNullableFilter<"Notification"> | number | null
    demandeEmpruntId?: IntNullableFilter<"Notification"> | number | null
    consommableId?: IntNullableFilter<"Notification"> | number | null
    message?: StringFilter<"Notification"> | string
    DateEnvoi?: DateTimeFilter<"Notification"> | Date | string
    type?: EnumTypeNotificationFilter<"Notification"> | $Enums.TypeNotification
    vu?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    emprunt?: XOR<EmpruntNullableScalarRelationFilter, EmpruntWhereInput> | null
    demandeEmprunt?: XOR<DemandeEmpruntNullableScalarRelationFilter, DemandeEmpruntWhereInput> | null
    consommable?: XOR<ConsommableNullableScalarRelationFilter, ConsommableWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    empruntId?: SortOrderInput | SortOrder
    demandeEmpruntId?: SortOrderInput | SortOrder
    consommableId?: SortOrderInput | SortOrder
    message?: SortOrder
    DateEnvoi?: SortOrder
    type?: SortOrder
    vu?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emprunt?: EmpruntOrderByWithRelationInput
    demandeEmprunt?: DemandeEmpruntOrderByWithRelationInput
    consommable?: ConsommableOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    empruntId?: IntNullableFilter<"Notification"> | number | null
    demandeEmpruntId?: IntNullableFilter<"Notification"> | number | null
    consommableId?: IntNullableFilter<"Notification"> | number | null
    message?: StringFilter<"Notification"> | string
    DateEnvoi?: DateTimeFilter<"Notification"> | Date | string
    type?: EnumTypeNotificationFilter<"Notification"> | $Enums.TypeNotification
    vu?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    emprunt?: XOR<EmpruntNullableScalarRelationFilter, EmpruntWhereInput> | null
    demandeEmprunt?: XOR<DemandeEmpruntNullableScalarRelationFilter, DemandeEmpruntWhereInput> | null
    consommable?: XOR<ConsommableNullableScalarRelationFilter, ConsommableWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    empruntId?: SortOrderInput | SortOrder
    demandeEmpruntId?: SortOrderInput | SortOrder
    consommableId?: SortOrderInput | SortOrder
    message?: SortOrder
    DateEnvoi?: SortOrder
    type?: SortOrder
    vu?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    empruntId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    demandeEmpruntId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    consommableId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    message?: StringWithAggregatesFilter<"Notification"> | string
    DateEnvoi?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    type?: EnumTypeNotificationWithAggregatesFilter<"Notification"> | $Enums.TypeNotification
    vu?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type ConsommableWhereInput = {
    AND?: ConsommableWhereInput | ConsommableWhereInput[]
    OR?: ConsommableWhereInput[]
    NOT?: ConsommableWhereInput | ConsommableWhereInput[]
    id?: IntFilter<"Consommable"> | number
    nom?: StringFilter<"Consommable"> | string
    marque?: StringFilter<"Consommable"> | string
    quantiteDisponible?: IntFilter<"Consommable"> | number
    seuilCritique?: IntFilter<"Consommable"> | number
    obtention?: EnumObtentionFilter<"Consommable"> | $Enums.Obtention
    fournisseur?: StringNullableFilter<"Consommable"> | string | null
    donnateur?: StringNullableFilter<"Consommable"> | string | null
    photo?: StringNullableFilter<"Consommable"> | string | null
    createdAt?: DateTimeFilter<"Consommable"> | Date | string
    updatedAt?: DateTimeFilter<"Consommable"> | Date | string
    notification?: NotificationListRelationFilter
    utilisationsConsommable?: UtilisationConsommableListRelationFilter
  }

  export type ConsommableOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    marque?: SortOrder
    quantiteDisponible?: SortOrder
    seuilCritique?: SortOrder
    obtention?: SortOrder
    fournisseur?: SortOrderInput | SortOrder
    donnateur?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notification?: NotificationOrderByRelationAggregateInput
    utilisationsConsommable?: UtilisationConsommableOrderByRelationAggregateInput
  }

  export type ConsommableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConsommableWhereInput | ConsommableWhereInput[]
    OR?: ConsommableWhereInput[]
    NOT?: ConsommableWhereInput | ConsommableWhereInput[]
    nom?: StringFilter<"Consommable"> | string
    marque?: StringFilter<"Consommable"> | string
    quantiteDisponible?: IntFilter<"Consommable"> | number
    seuilCritique?: IntFilter<"Consommable"> | number
    obtention?: EnumObtentionFilter<"Consommable"> | $Enums.Obtention
    fournisseur?: StringNullableFilter<"Consommable"> | string | null
    donnateur?: StringNullableFilter<"Consommable"> | string | null
    photo?: StringNullableFilter<"Consommable"> | string | null
    createdAt?: DateTimeFilter<"Consommable"> | Date | string
    updatedAt?: DateTimeFilter<"Consommable"> | Date | string
    notification?: NotificationListRelationFilter
    utilisationsConsommable?: UtilisationConsommableListRelationFilter
  }, "id">

  export type ConsommableOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    marque?: SortOrder
    quantiteDisponible?: SortOrder
    seuilCritique?: SortOrder
    obtention?: SortOrder
    fournisseur?: SortOrderInput | SortOrder
    donnateur?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConsommableCountOrderByAggregateInput
    _avg?: ConsommableAvgOrderByAggregateInput
    _max?: ConsommableMaxOrderByAggregateInput
    _min?: ConsommableMinOrderByAggregateInput
    _sum?: ConsommableSumOrderByAggregateInput
  }

  export type ConsommableScalarWhereWithAggregatesInput = {
    AND?: ConsommableScalarWhereWithAggregatesInput | ConsommableScalarWhereWithAggregatesInput[]
    OR?: ConsommableScalarWhereWithAggregatesInput[]
    NOT?: ConsommableScalarWhereWithAggregatesInput | ConsommableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Consommable"> | number
    nom?: StringWithAggregatesFilter<"Consommable"> | string
    marque?: StringWithAggregatesFilter<"Consommable"> | string
    quantiteDisponible?: IntWithAggregatesFilter<"Consommable"> | number
    seuilCritique?: IntWithAggregatesFilter<"Consommable"> | number
    obtention?: EnumObtentionWithAggregatesFilter<"Consommable"> | $Enums.Obtention
    fournisseur?: StringNullableWithAggregatesFilter<"Consommable"> | string | null
    donnateur?: StringNullableWithAggregatesFilter<"Consommable"> | string | null
    photo?: StringNullableWithAggregatesFilter<"Consommable"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Consommable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Consommable"> | Date | string
  }

  export type UtilisationConsommableWhereInput = {
    AND?: UtilisationConsommableWhereInput | UtilisationConsommableWhereInput[]
    OR?: UtilisationConsommableWhereInput[]
    NOT?: UtilisationConsommableWhereInput | UtilisationConsommableWhereInput[]
    id?: IntFilter<"UtilisationConsommable"> | number
    utilisateurId?: IntFilter<"UtilisationConsommable"> | number
    consommableId?: IntFilter<"UtilisationConsommable"> | number
    quantiteUtilise?: IntFilter<"UtilisationConsommable"> | number
    dateUtilisation?: DateTimeFilter<"UtilisationConsommable"> | Date | string
    description?: StringNullableFilter<"UtilisationConsommable"> | string | null
    createdAt?: DateTimeFilter<"UtilisationConsommable"> | Date | string
    updatedAt?: DateTimeFilter<"UtilisationConsommable"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    consommable?: XOR<ConsommableScalarRelationFilter, ConsommableWhereInput>
  }

  export type UtilisationConsommableOrderByWithRelationInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    consommableId?: SortOrder
    quantiteUtilise?: SortOrder
    dateUtilisation?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    consommable?: ConsommableOrderByWithRelationInput
  }

  export type UtilisationConsommableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UtilisationConsommableWhereInput | UtilisationConsommableWhereInput[]
    OR?: UtilisationConsommableWhereInput[]
    NOT?: UtilisationConsommableWhereInput | UtilisationConsommableWhereInput[]
    utilisateurId?: IntFilter<"UtilisationConsommable"> | number
    consommableId?: IntFilter<"UtilisationConsommable"> | number
    quantiteUtilise?: IntFilter<"UtilisationConsommable"> | number
    dateUtilisation?: DateTimeFilter<"UtilisationConsommable"> | Date | string
    description?: StringNullableFilter<"UtilisationConsommable"> | string | null
    createdAt?: DateTimeFilter<"UtilisationConsommable"> | Date | string
    updatedAt?: DateTimeFilter<"UtilisationConsommable"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    consommable?: XOR<ConsommableScalarRelationFilter, ConsommableWhereInput>
  }, "id">

  export type UtilisationConsommableOrderByWithAggregationInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    consommableId?: SortOrder
    quantiteUtilise?: SortOrder
    dateUtilisation?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UtilisationConsommableCountOrderByAggregateInput
    _avg?: UtilisationConsommableAvgOrderByAggregateInput
    _max?: UtilisationConsommableMaxOrderByAggregateInput
    _min?: UtilisationConsommableMinOrderByAggregateInput
    _sum?: UtilisationConsommableSumOrderByAggregateInput
  }

  export type UtilisationConsommableScalarWhereWithAggregatesInput = {
    AND?: UtilisationConsommableScalarWhereWithAggregatesInput | UtilisationConsommableScalarWhereWithAggregatesInput[]
    OR?: UtilisationConsommableScalarWhereWithAggregatesInput[]
    NOT?: UtilisationConsommableScalarWhereWithAggregatesInput | UtilisationConsommableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UtilisationConsommable"> | number
    utilisateurId?: IntWithAggregatesFilter<"UtilisationConsommable"> | number
    consommableId?: IntWithAggregatesFilter<"UtilisationConsommable"> | number
    quantiteUtilise?: IntWithAggregatesFilter<"UtilisationConsommable"> | number
    dateUtilisation?: DateTimeWithAggregatesFilter<"UtilisationConsommable"> | Date | string
    description?: StringNullableWithAggregatesFilter<"UtilisationConsommable"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UtilisationConsommable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UtilisationConsommable"> | Date | string
  }

  export type RapportWhereInput = {
    AND?: RapportWhereInput | RapportWhereInput[]
    OR?: RapportWhereInput[]
    NOT?: RapportWhereInput | RapportWhereInput[]
    id?: IntFilter<"Rapport"> | number
    contenu?: StringFilter<"Rapport"> | string
    periode?: EnumPeriodeFilter<"Rapport"> | $Enums.Periode
    createdAt?: DateTimeFilter<"Rapport"> | Date | string
    updatedAt?: DateTimeFilter<"Rapport"> | Date | string
  }

  export type RapportOrderByWithRelationInput = {
    id?: SortOrder
    contenu?: SortOrder
    periode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RapportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RapportWhereInput | RapportWhereInput[]
    OR?: RapportWhereInput[]
    NOT?: RapportWhereInput | RapportWhereInput[]
    contenu?: StringFilter<"Rapport"> | string
    periode?: EnumPeriodeFilter<"Rapport"> | $Enums.Periode
    createdAt?: DateTimeFilter<"Rapport"> | Date | string
    updatedAt?: DateTimeFilter<"Rapport"> | Date | string
  }, "id">

  export type RapportOrderByWithAggregationInput = {
    id?: SortOrder
    contenu?: SortOrder
    periode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RapportCountOrderByAggregateInput
    _avg?: RapportAvgOrderByAggregateInput
    _max?: RapportMaxOrderByAggregateInput
    _min?: RapportMinOrderByAggregateInput
    _sum?: RapportSumOrderByAggregateInput
  }

  export type RapportScalarWhereWithAggregatesInput = {
    AND?: RapportScalarWhereWithAggregatesInput | RapportScalarWhereWithAggregatesInput[]
    OR?: RapportScalarWhereWithAggregatesInput[]
    NOT?: RapportScalarWhereWithAggregatesInput | RapportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rapport"> | number
    contenu?: StringWithAggregatesFilter<"Rapport"> | string
    periode?: EnumPeriodeWithAggregatesFilter<"Rapport"> | $Enums.Periode
    createdAt?: DateTimeWithAggregatesFilter<"Rapport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rapport"> | Date | string
  }

  export type UtilisateurCreateInput = {
    nom: string
    prenom: string
    email: string
    motdepasse: string
    role?: $Enums.RoleUtilisateur
    photo?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    emprunts?: EmpruntCreateNestedManyWithoutUtilisateurInput
    demandeEmprunt?: DemandeEmpruntCreateNestedManyWithoutUtilisateurInput
    utilisationsConsommable?: UtilisationConsommableCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    motdepasse: string
    role?: $Enums.RoleUtilisateur
    photo?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    emprunts?: EmpruntUncheckedCreateNestedManyWithoutUtilisateurInput
    demandeEmprunt?: DemandeEmpruntUncheckedCreateNestedManyWithoutUtilisateurInput
    utilisationsConsommable?: UtilisationConsommableUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motdepasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunts?: EmpruntUpdateManyWithoutUtilisateurNestedInput
    demandeEmprunt?: DemandeEmpruntUpdateManyWithoutUtilisateurNestedInput
    utilisationsConsommable?: UtilisationConsommableUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motdepasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunts?: EmpruntUncheckedUpdateManyWithoutUtilisateurNestedInput
    demandeEmprunt?: DemandeEmpruntUncheckedUpdateManyWithoutUtilisateurNestedInput
    utilisationsConsommable?: UtilisationConsommableUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    motdepasse: string
    role?: $Enums.RoleUtilisateur
    photo?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UtilisateurUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motdepasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motdepasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpruntCreateInput = {
    dateEmprunt?: Date | string
    dateRetourPrevu: Date | string
    dateRetourEffective?: Date | string | null
    usage: string
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutEmpruntsInput
    equipement: EquipementCreateNestedOneWithoutEmpruntInput
    notification?: NotificationCreateNestedManyWithoutEmpruntInput
  }

  export type EmpruntUncheckedCreateInput = {
    id?: number
    utilisateurId: number
    equipementId: number
    dateEmprunt?: Date | string
    dateRetourPrevu: Date | string
    dateRetourEffective?: Date | string | null
    usage: string
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: NotificationUncheckedCreateNestedManyWithoutEmpruntInput
  }

  export type EmpruntUpdateInput = {
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutEmpruntsNestedInput
    equipement?: EquipementUpdateOneRequiredWithoutEmpruntNestedInput
    notification?: NotificationUpdateManyWithoutEmpruntNestedInput
  }

  export type EmpruntUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    equipementId?: IntFieldUpdateOperationsInput | number
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUncheckedUpdateManyWithoutEmpruntNestedInput
  }

  export type EmpruntCreateManyInput = {
    id?: number
    utilisateurId: number
    equipementId: number
    dateEmprunt?: Date | string
    dateRetourPrevu: Date | string
    dateRetourEffective?: Date | string | null
    usage: string
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmpruntUpdateManyMutationInput = {
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpruntUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    equipementId?: IntFieldUpdateOperationsInput | number
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeEmpruntCreateInput = {
    dateDemande?: Date | string
    dateRetourPrevu: Date | string
    usage: string
    statut?: $Enums.StatutDemande
    type?: $Enums.TypeDemande
    motif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutDemandeEmpruntInput
    equipement: EquipementCreateNestedOneWithoutDemandeEmpruntInput
    notification?: NotificationCreateNestedManyWithoutDemandeEmpruntInput
  }

  export type DemandeEmpruntUncheckedCreateInput = {
    id?: number
    utilisateurId: number
    equipementId: number
    dateDemande?: Date | string
    dateRetourPrevu: Date | string
    usage: string
    statut?: $Enums.StatutDemande
    type?: $Enums.TypeDemande
    motif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: NotificationUncheckedCreateNestedManyWithoutDemandeEmpruntInput
  }

  export type DemandeEmpruntUpdateInput = {
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    type?: EnumTypeDemandeFieldUpdateOperationsInput | $Enums.TypeDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutDemandeEmpruntNestedInput
    equipement?: EquipementUpdateOneRequiredWithoutDemandeEmpruntNestedInput
    notification?: NotificationUpdateManyWithoutDemandeEmpruntNestedInput
  }

  export type DemandeEmpruntUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    equipementId?: IntFieldUpdateOperationsInput | number
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    type?: EnumTypeDemandeFieldUpdateOperationsInput | $Enums.TypeDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUncheckedUpdateManyWithoutDemandeEmpruntNestedInput
  }

  export type DemandeEmpruntCreateManyInput = {
    id?: number
    utilisateurId: number
    equipementId: number
    dateDemande?: Date | string
    dateRetourPrevu: Date | string
    usage: string
    statut?: $Enums.StatutDemande
    type?: $Enums.TypeDemande
    motif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemandeEmpruntUpdateManyMutationInput = {
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    type?: EnumTypeDemandeFieldUpdateOperationsInput | $Enums.TypeDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeEmpruntUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    equipementId?: IntFieldUpdateOperationsInput | number
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    type?: EnumTypeDemandeFieldUpdateOperationsInput | $Enums.TypeDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipementCreateInput = {
    nom: string
    numeroDeSerie: string
    marque: string
    disponibilite?: $Enums.Disponibilite
    etatMateriel?: $Enums.EtatMateriel
    obtention?: $Enums.Obtention
    prix: number
    fournisseur?: string | null
    donateur?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emprunt?: EmpruntCreateNestedManyWithoutEquipementInput
    demandeEmprunt?: DemandeEmpruntCreateNestedManyWithoutEquipementInput
  }

  export type EquipementUncheckedCreateInput = {
    id?: number
    nom: string
    numeroDeSerie: string
    marque: string
    disponibilite?: $Enums.Disponibilite
    etatMateriel?: $Enums.EtatMateriel
    obtention?: $Enums.Obtention
    prix: number
    fournisseur?: string | null
    donateur?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emprunt?: EmpruntUncheckedCreateNestedManyWithoutEquipementInput
    demandeEmprunt?: DemandeEmpruntUncheckedCreateNestedManyWithoutEquipementInput
  }

  export type EquipementUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    numeroDeSerie?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    disponibilite?: EnumDisponibiliteFieldUpdateOperationsInput | $Enums.Disponibilite
    etatMateriel?: EnumEtatMaterielFieldUpdateOperationsInput | $Enums.EtatMateriel
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    prix?: FloatFieldUpdateOperationsInput | number
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunt?: EmpruntUpdateManyWithoutEquipementNestedInput
    demandeEmprunt?: DemandeEmpruntUpdateManyWithoutEquipementNestedInput
  }

  export type EquipementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    numeroDeSerie?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    disponibilite?: EnumDisponibiliteFieldUpdateOperationsInput | $Enums.Disponibilite
    etatMateriel?: EnumEtatMaterielFieldUpdateOperationsInput | $Enums.EtatMateriel
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    prix?: FloatFieldUpdateOperationsInput | number
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunt?: EmpruntUncheckedUpdateManyWithoutEquipementNestedInput
    demandeEmprunt?: DemandeEmpruntUncheckedUpdateManyWithoutEquipementNestedInput
  }

  export type EquipementCreateManyInput = {
    id?: number
    nom: string
    numeroDeSerie: string
    marque: string
    disponibilite?: $Enums.Disponibilite
    etatMateriel?: $Enums.EtatMateriel
    obtention?: $Enums.Obtention
    prix: number
    fournisseur?: string | null
    donateur?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipementUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    numeroDeSerie?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    disponibilite?: EnumDisponibiliteFieldUpdateOperationsInput | $Enums.Disponibilite
    etatMateriel?: EnumEtatMaterielFieldUpdateOperationsInput | $Enums.EtatMateriel
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    prix?: FloatFieldUpdateOperationsInput | number
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    numeroDeSerie?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    disponibilite?: EnumDisponibiliteFieldUpdateOperationsInput | $Enums.Disponibilite
    etatMateriel?: EnumEtatMaterielFieldUpdateOperationsInput | $Enums.EtatMateriel
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    prix?: FloatFieldUpdateOperationsInput | number
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    message: string
    DateEnvoi?: Date | string
    type?: $Enums.TypeNotification
    vu?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emprunt?: EmpruntCreateNestedOneWithoutNotificationInput
    demandeEmprunt?: DemandeEmpruntCreateNestedOneWithoutNotificationInput
    consommable?: ConsommableCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    empruntId?: number | null
    demandeEmpruntId?: number | null
    consommableId?: number | null
    message: string
    DateEnvoi?: Date | string
    type?: $Enums.TypeNotification
    vu?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    DateEnvoi?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    vu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunt?: EmpruntUpdateOneWithoutNotificationNestedInput
    demandeEmprunt?: DemandeEmpruntUpdateOneWithoutNotificationNestedInput
    consommable?: ConsommableUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    empruntId?: NullableIntFieldUpdateOperationsInput | number | null
    demandeEmpruntId?: NullableIntFieldUpdateOperationsInput | number | null
    consommableId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    DateEnvoi?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    vu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    empruntId?: number | null
    demandeEmpruntId?: number | null
    consommableId?: number | null
    message: string
    DateEnvoi?: Date | string
    type?: $Enums.TypeNotification
    vu?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    DateEnvoi?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    vu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    empruntId?: NullableIntFieldUpdateOperationsInput | number | null
    demandeEmpruntId?: NullableIntFieldUpdateOperationsInput | number | null
    consommableId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    DateEnvoi?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    vu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsommableCreateInput = {
    nom: string
    marque: string
    quantiteDisponible: number
    seuilCritique: number
    obtention?: $Enums.Obtention
    fournisseur?: string | null
    donnateur?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: NotificationCreateNestedManyWithoutConsommableInput
    utilisationsConsommable?: UtilisationConsommableCreateNestedManyWithoutConsommableInput
  }

  export type ConsommableUncheckedCreateInput = {
    id?: number
    nom: string
    marque: string
    quantiteDisponible: number
    seuilCritique: number
    obtention?: $Enums.Obtention
    fournisseur?: string | null
    donnateur?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: NotificationUncheckedCreateNestedManyWithoutConsommableInput
    utilisationsConsommable?: UtilisationConsommableUncheckedCreateNestedManyWithoutConsommableInput
  }

  export type ConsommableUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    quantiteDisponible?: IntFieldUpdateOperationsInput | number
    seuilCritique?: IntFieldUpdateOperationsInput | number
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donnateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUpdateManyWithoutConsommableNestedInput
    utilisationsConsommable?: UtilisationConsommableUpdateManyWithoutConsommableNestedInput
  }

  export type ConsommableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    quantiteDisponible?: IntFieldUpdateOperationsInput | number
    seuilCritique?: IntFieldUpdateOperationsInput | number
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donnateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUncheckedUpdateManyWithoutConsommableNestedInput
    utilisationsConsommable?: UtilisationConsommableUncheckedUpdateManyWithoutConsommableNestedInput
  }

  export type ConsommableCreateManyInput = {
    id?: number
    nom: string
    marque: string
    quantiteDisponible: number
    seuilCritique: number
    obtention?: $Enums.Obtention
    fournisseur?: string | null
    donnateur?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsommableUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    quantiteDisponible?: IntFieldUpdateOperationsInput | number
    seuilCritique?: IntFieldUpdateOperationsInput | number
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donnateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsommableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    quantiteDisponible?: IntFieldUpdateOperationsInput | number
    seuilCritique?: IntFieldUpdateOperationsInput | number
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donnateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisationConsommableCreateInput = {
    quantiteUtilise: number
    dateUtilisation?: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutUtilisationsConsommableInput
    consommable: ConsommableCreateNestedOneWithoutUtilisationsConsommableInput
  }

  export type UtilisationConsommableUncheckedCreateInput = {
    id?: number
    utilisateurId: number
    consommableId: number
    quantiteUtilise: number
    dateUtilisation?: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UtilisationConsommableUpdateInput = {
    quantiteUtilise?: IntFieldUpdateOperationsInput | number
    dateUtilisation?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutUtilisationsConsommableNestedInput
    consommable?: ConsommableUpdateOneRequiredWithoutUtilisationsConsommableNestedInput
  }

  export type UtilisationConsommableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    consommableId?: IntFieldUpdateOperationsInput | number
    quantiteUtilise?: IntFieldUpdateOperationsInput | number
    dateUtilisation?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisationConsommableCreateManyInput = {
    id?: number
    utilisateurId: number
    consommableId: number
    quantiteUtilise: number
    dateUtilisation?: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UtilisationConsommableUpdateManyMutationInput = {
    quantiteUtilise?: IntFieldUpdateOperationsInput | number
    dateUtilisation?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisationConsommableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    consommableId?: IntFieldUpdateOperationsInput | number
    quantiteUtilise?: IntFieldUpdateOperationsInput | number
    dateUtilisation?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RapportCreateInput = {
    contenu: string
    periode?: $Enums.Periode
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RapportUncheckedCreateInput = {
    id?: number
    contenu: string
    periode?: $Enums.Periode
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RapportUpdateInput = {
    contenu?: StringFieldUpdateOperationsInput | string
    periode?: EnumPeriodeFieldUpdateOperationsInput | $Enums.Periode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RapportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    periode?: EnumPeriodeFieldUpdateOperationsInput | $Enums.Periode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RapportCreateManyInput = {
    id?: number
    contenu: string
    periode?: $Enums.Periode
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RapportUpdateManyMutationInput = {
    contenu?: StringFieldUpdateOperationsInput | string
    periode?: EnumPeriodeFieldUpdateOperationsInput | $Enums.Periode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RapportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    periode?: EnumPeriodeFieldUpdateOperationsInput | $Enums.Periode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleUtilisateurFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUtilisateur | EnumRoleUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUtilisateur[] | ListEnumRoleUtilisateurFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleUtilisateur[] | ListEnumRoleUtilisateurFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleUtilisateurFilter<$PrismaModel> | $Enums.RoleUtilisateur
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type EmpruntListRelationFilter = {
    every?: EmpruntWhereInput
    some?: EmpruntWhereInput
    none?: EmpruntWhereInput
  }

  export type DemandeEmpruntListRelationFilter = {
    every?: DemandeEmpruntWhereInput
    some?: DemandeEmpruntWhereInput
    none?: DemandeEmpruntWhereInput
  }

  export type UtilisationConsommableListRelationFilter = {
    every?: UtilisationConsommableWhereInput
    some?: UtilisationConsommableWhereInput
    none?: UtilisationConsommableWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmpruntOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DemandeEmpruntOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisationConsommableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motdepasse?: SortOrder
    role?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UtilisateurAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motdepasse?: SortOrder
    role?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    motdepasse?: SortOrder
    role?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UtilisateurSumOrderByAggregateInput = {
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

  export type EnumRoleUtilisateurWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUtilisateur | EnumRoleUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUtilisateur[] | ListEnumRoleUtilisateurFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleUtilisateur[] | ListEnumRoleUtilisateurFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleUtilisateurWithAggregatesFilter<$PrismaModel> | $Enums.RoleUtilisateur
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleUtilisateurFilter<$PrismaModel>
    _max?: NestedEnumRoleUtilisateurFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type EnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
  }

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type EquipementScalarRelationFilter = {
    is?: EquipementWhereInput
    isNot?: EquipementWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpruntCountOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    equipementId?: SortOrder
    dateEmprunt?: SortOrder
    dateRetourPrevu?: SortOrder
    dateRetourEffective?: SortOrder
    usage?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmpruntAvgOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    equipementId?: SortOrder
  }

  export type EmpruntMaxOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    equipementId?: SortOrder
    dateEmprunt?: SortOrder
    dateRetourPrevu?: SortOrder
    dateRetourEffective?: SortOrder
    usage?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmpruntMinOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    equipementId?: SortOrder
    dateEmprunt?: SortOrder
    dateRetourPrevu?: SortOrder
    dateRetourEffective?: SortOrder
    usage?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmpruntSumOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    equipementId?: SortOrder
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

  export type EnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
  }

  export type EnumStatutDemandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeFilter<$PrismaModel> | $Enums.StatutDemande
  }

  export type EnumTypeDemandeFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeDemande | EnumTypeDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeDemande[] | ListEnumTypeDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeDemande[] | ListEnumTypeDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeDemandeFilter<$PrismaModel> | $Enums.TypeDemande
  }

  export type DemandeEmpruntCountOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    equipementId?: SortOrder
    dateDemande?: SortOrder
    dateRetourPrevu?: SortOrder
    usage?: SortOrder
    statut?: SortOrder
    type?: SortOrder
    motif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DemandeEmpruntAvgOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    equipementId?: SortOrder
  }

  export type DemandeEmpruntMaxOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    equipementId?: SortOrder
    dateDemande?: SortOrder
    dateRetourPrevu?: SortOrder
    usage?: SortOrder
    statut?: SortOrder
    type?: SortOrder
    motif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DemandeEmpruntMinOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    equipementId?: SortOrder
    dateDemande?: SortOrder
    dateRetourPrevu?: SortOrder
    usage?: SortOrder
    statut?: SortOrder
    type?: SortOrder
    motif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DemandeEmpruntSumOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    equipementId?: SortOrder
  }

  export type EnumStatutDemandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutDemande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDemandeFilter<$PrismaModel>
    _max?: NestedEnumStatutDemandeFilter<$PrismaModel>
  }

  export type EnumTypeDemandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeDemande | EnumTypeDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeDemande[] | ListEnumTypeDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeDemande[] | ListEnumTypeDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeDemandeWithAggregatesFilter<$PrismaModel> | $Enums.TypeDemande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeDemandeFilter<$PrismaModel>
    _max?: NestedEnumTypeDemandeFilter<$PrismaModel>
  }

  export type EnumDisponibiliteFilter<$PrismaModel = never> = {
    equals?: $Enums.Disponibilite | EnumDisponibiliteFieldRefInput<$PrismaModel>
    in?: $Enums.Disponibilite[] | ListEnumDisponibiliteFieldRefInput<$PrismaModel>
    notIn?: $Enums.Disponibilite[] | ListEnumDisponibiliteFieldRefInput<$PrismaModel>
    not?: NestedEnumDisponibiliteFilter<$PrismaModel> | $Enums.Disponibilite
  }

  export type EnumEtatMaterielFilter<$PrismaModel = never> = {
    equals?: $Enums.EtatMateriel | EnumEtatMaterielFieldRefInput<$PrismaModel>
    in?: $Enums.EtatMateriel[] | ListEnumEtatMaterielFieldRefInput<$PrismaModel>
    notIn?: $Enums.EtatMateriel[] | ListEnumEtatMaterielFieldRefInput<$PrismaModel>
    not?: NestedEnumEtatMaterielFilter<$PrismaModel> | $Enums.EtatMateriel
  }

  export type EnumObtentionFilter<$PrismaModel = never> = {
    equals?: $Enums.Obtention | EnumObtentionFieldRefInput<$PrismaModel>
    in?: $Enums.Obtention[] | ListEnumObtentionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Obtention[] | ListEnumObtentionFieldRefInput<$PrismaModel>
    not?: NestedEnumObtentionFilter<$PrismaModel> | $Enums.Obtention
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EquipementCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    numeroDeSerie?: SortOrder
    marque?: SortOrder
    disponibilite?: SortOrder
    etatMateriel?: SortOrder
    obtention?: SortOrder
    prix?: SortOrder
    fournisseur?: SortOrder
    donateur?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipementAvgOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
  }

  export type EquipementMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    numeroDeSerie?: SortOrder
    marque?: SortOrder
    disponibilite?: SortOrder
    etatMateriel?: SortOrder
    obtention?: SortOrder
    prix?: SortOrder
    fournisseur?: SortOrder
    donateur?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipementMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    numeroDeSerie?: SortOrder
    marque?: SortOrder
    disponibilite?: SortOrder
    etatMateriel?: SortOrder
    obtention?: SortOrder
    prix?: SortOrder
    fournisseur?: SortOrder
    donateur?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipementSumOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
  }

  export type EnumDisponibiliteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Disponibilite | EnumDisponibiliteFieldRefInput<$PrismaModel>
    in?: $Enums.Disponibilite[] | ListEnumDisponibiliteFieldRefInput<$PrismaModel>
    notIn?: $Enums.Disponibilite[] | ListEnumDisponibiliteFieldRefInput<$PrismaModel>
    not?: NestedEnumDisponibiliteWithAggregatesFilter<$PrismaModel> | $Enums.Disponibilite
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisponibiliteFilter<$PrismaModel>
    _max?: NestedEnumDisponibiliteFilter<$PrismaModel>
  }

  export type EnumEtatMaterielWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EtatMateriel | EnumEtatMaterielFieldRefInput<$PrismaModel>
    in?: $Enums.EtatMateriel[] | ListEnumEtatMaterielFieldRefInput<$PrismaModel>
    notIn?: $Enums.EtatMateriel[] | ListEnumEtatMaterielFieldRefInput<$PrismaModel>
    not?: NestedEnumEtatMaterielWithAggregatesFilter<$PrismaModel> | $Enums.EtatMateriel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEtatMaterielFilter<$PrismaModel>
    _max?: NestedEnumEtatMaterielFilter<$PrismaModel>
  }

  export type EnumObtentionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Obtention | EnumObtentionFieldRefInput<$PrismaModel>
    in?: $Enums.Obtention[] | ListEnumObtentionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Obtention[] | ListEnumObtentionFieldRefInput<$PrismaModel>
    not?: NestedEnumObtentionWithAggregatesFilter<$PrismaModel> | $Enums.Obtention
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumObtentionFilter<$PrismaModel>
    _max?: NestedEnumObtentionFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumTypeNotificationFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeNotification | EnumTypeNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeNotificationFilter<$PrismaModel> | $Enums.TypeNotification
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EmpruntNullableScalarRelationFilter = {
    is?: EmpruntWhereInput | null
    isNot?: EmpruntWhereInput | null
  }

  export type DemandeEmpruntNullableScalarRelationFilter = {
    is?: DemandeEmpruntWhereInput | null
    isNot?: DemandeEmpruntWhereInput | null
  }

  export type ConsommableNullableScalarRelationFilter = {
    is?: ConsommableWhereInput | null
    isNot?: ConsommableWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    empruntId?: SortOrder
    demandeEmpruntId?: SortOrder
    consommableId?: SortOrder
    message?: SortOrder
    DateEnvoi?: SortOrder
    type?: SortOrder
    vu?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    empruntId?: SortOrder
    demandeEmpruntId?: SortOrder
    consommableId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    empruntId?: SortOrder
    demandeEmpruntId?: SortOrder
    consommableId?: SortOrder
    message?: SortOrder
    DateEnvoi?: SortOrder
    type?: SortOrder
    vu?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    empruntId?: SortOrder
    demandeEmpruntId?: SortOrder
    consommableId?: SortOrder
    message?: SortOrder
    DateEnvoi?: SortOrder
    type?: SortOrder
    vu?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    empruntId?: SortOrder
    demandeEmpruntId?: SortOrder
    consommableId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumTypeNotificationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeNotification | EnumTypeNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeNotificationWithAggregatesFilter<$PrismaModel> | $Enums.TypeNotification
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeNotificationFilter<$PrismaModel>
    _max?: NestedEnumTypeNotificationFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ConsommableCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    marque?: SortOrder
    quantiteDisponible?: SortOrder
    seuilCritique?: SortOrder
    obtention?: SortOrder
    fournisseur?: SortOrder
    donnateur?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsommableAvgOrderByAggregateInput = {
    id?: SortOrder
    quantiteDisponible?: SortOrder
    seuilCritique?: SortOrder
  }

  export type ConsommableMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    marque?: SortOrder
    quantiteDisponible?: SortOrder
    seuilCritique?: SortOrder
    obtention?: SortOrder
    fournisseur?: SortOrder
    donnateur?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsommableMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    marque?: SortOrder
    quantiteDisponible?: SortOrder
    seuilCritique?: SortOrder
    obtention?: SortOrder
    fournisseur?: SortOrder
    donnateur?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsommableSumOrderByAggregateInput = {
    id?: SortOrder
    quantiteDisponible?: SortOrder
    seuilCritique?: SortOrder
  }

  export type ConsommableScalarRelationFilter = {
    is?: ConsommableWhereInput
    isNot?: ConsommableWhereInput
  }

  export type UtilisationConsommableCountOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    consommableId?: SortOrder
    quantiteUtilise?: SortOrder
    dateUtilisation?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UtilisationConsommableAvgOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    consommableId?: SortOrder
    quantiteUtilise?: SortOrder
  }

  export type UtilisationConsommableMaxOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    consommableId?: SortOrder
    quantiteUtilise?: SortOrder
    dateUtilisation?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UtilisationConsommableMinOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    consommableId?: SortOrder
    quantiteUtilise?: SortOrder
    dateUtilisation?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UtilisationConsommableSumOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    consommableId?: SortOrder
    quantiteUtilise?: SortOrder
  }

  export type EnumPeriodeFilter<$PrismaModel = never> = {
    equals?: $Enums.Periode | EnumPeriodeFieldRefInput<$PrismaModel>
    in?: $Enums.Periode[] | ListEnumPeriodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Periode[] | ListEnumPeriodeFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodeFilter<$PrismaModel> | $Enums.Periode
  }

  export type RapportCountOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    periode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RapportAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RapportMaxOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    periode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RapportMinOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    periode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RapportSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumPeriodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Periode | EnumPeriodeFieldRefInput<$PrismaModel>
    in?: $Enums.Periode[] | ListEnumPeriodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Periode[] | ListEnumPeriodeFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodeWithAggregatesFilter<$PrismaModel> | $Enums.Periode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeriodeFilter<$PrismaModel>
    _max?: NestedEnumPeriodeFilter<$PrismaModel>
  }

  export type EmpruntCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<EmpruntCreateWithoutUtilisateurInput, EmpruntUncheckedCreateWithoutUtilisateurInput> | EmpruntCreateWithoutUtilisateurInput[] | EmpruntUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutUtilisateurInput | EmpruntCreateOrConnectWithoutUtilisateurInput[]
    createMany?: EmpruntCreateManyUtilisateurInputEnvelope
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
  }

  export type DemandeEmpruntCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<DemandeEmpruntCreateWithoutUtilisateurInput, DemandeEmpruntUncheckedCreateWithoutUtilisateurInput> | DemandeEmpruntCreateWithoutUtilisateurInput[] | DemandeEmpruntUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: DemandeEmpruntCreateOrConnectWithoutUtilisateurInput | DemandeEmpruntCreateOrConnectWithoutUtilisateurInput[]
    createMany?: DemandeEmpruntCreateManyUtilisateurInputEnvelope
    connect?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
  }

  export type UtilisationConsommableCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<UtilisationConsommableCreateWithoutUtilisateurInput, UtilisationConsommableUncheckedCreateWithoutUtilisateurInput> | UtilisationConsommableCreateWithoutUtilisateurInput[] | UtilisationConsommableUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: UtilisationConsommableCreateOrConnectWithoutUtilisateurInput | UtilisationConsommableCreateOrConnectWithoutUtilisateurInput[]
    createMany?: UtilisationConsommableCreateManyUtilisateurInputEnvelope
    connect?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
  }

  export type EmpruntUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<EmpruntCreateWithoutUtilisateurInput, EmpruntUncheckedCreateWithoutUtilisateurInput> | EmpruntCreateWithoutUtilisateurInput[] | EmpruntUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutUtilisateurInput | EmpruntCreateOrConnectWithoutUtilisateurInput[]
    createMany?: EmpruntCreateManyUtilisateurInputEnvelope
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
  }

  export type DemandeEmpruntUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<DemandeEmpruntCreateWithoutUtilisateurInput, DemandeEmpruntUncheckedCreateWithoutUtilisateurInput> | DemandeEmpruntCreateWithoutUtilisateurInput[] | DemandeEmpruntUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: DemandeEmpruntCreateOrConnectWithoutUtilisateurInput | DemandeEmpruntCreateOrConnectWithoutUtilisateurInput[]
    createMany?: DemandeEmpruntCreateManyUtilisateurInputEnvelope
    connect?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
  }

  export type UtilisationConsommableUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<UtilisationConsommableCreateWithoutUtilisateurInput, UtilisationConsommableUncheckedCreateWithoutUtilisateurInput> | UtilisationConsommableCreateWithoutUtilisateurInput[] | UtilisationConsommableUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: UtilisationConsommableCreateOrConnectWithoutUtilisateurInput | UtilisationConsommableCreateOrConnectWithoutUtilisateurInput[]
    createMany?: UtilisationConsommableCreateManyUtilisateurInputEnvelope
    connect?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleUtilisateurFieldUpdateOperationsInput = {
    set?: $Enums.RoleUtilisateur
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmpruntUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<EmpruntCreateWithoutUtilisateurInput, EmpruntUncheckedCreateWithoutUtilisateurInput> | EmpruntCreateWithoutUtilisateurInput[] | EmpruntUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutUtilisateurInput | EmpruntCreateOrConnectWithoutUtilisateurInput[]
    upsert?: EmpruntUpsertWithWhereUniqueWithoutUtilisateurInput | EmpruntUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: EmpruntCreateManyUtilisateurInputEnvelope
    set?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    disconnect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    delete?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    update?: EmpruntUpdateWithWhereUniqueWithoutUtilisateurInput | EmpruntUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: EmpruntUpdateManyWithWhereWithoutUtilisateurInput | EmpruntUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: EmpruntScalarWhereInput | EmpruntScalarWhereInput[]
  }

  export type DemandeEmpruntUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<DemandeEmpruntCreateWithoutUtilisateurInput, DemandeEmpruntUncheckedCreateWithoutUtilisateurInput> | DemandeEmpruntCreateWithoutUtilisateurInput[] | DemandeEmpruntUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: DemandeEmpruntCreateOrConnectWithoutUtilisateurInput | DemandeEmpruntCreateOrConnectWithoutUtilisateurInput[]
    upsert?: DemandeEmpruntUpsertWithWhereUniqueWithoutUtilisateurInput | DemandeEmpruntUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: DemandeEmpruntCreateManyUtilisateurInputEnvelope
    set?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    disconnect?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    delete?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    connect?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    update?: DemandeEmpruntUpdateWithWhereUniqueWithoutUtilisateurInput | DemandeEmpruntUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: DemandeEmpruntUpdateManyWithWhereWithoutUtilisateurInput | DemandeEmpruntUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: DemandeEmpruntScalarWhereInput | DemandeEmpruntScalarWhereInput[]
  }

  export type UtilisationConsommableUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<UtilisationConsommableCreateWithoutUtilisateurInput, UtilisationConsommableUncheckedCreateWithoutUtilisateurInput> | UtilisationConsommableCreateWithoutUtilisateurInput[] | UtilisationConsommableUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: UtilisationConsommableCreateOrConnectWithoutUtilisateurInput | UtilisationConsommableCreateOrConnectWithoutUtilisateurInput[]
    upsert?: UtilisationConsommableUpsertWithWhereUniqueWithoutUtilisateurInput | UtilisationConsommableUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: UtilisationConsommableCreateManyUtilisateurInputEnvelope
    set?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    disconnect?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    delete?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    connect?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    update?: UtilisationConsommableUpdateWithWhereUniqueWithoutUtilisateurInput | UtilisationConsommableUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: UtilisationConsommableUpdateManyWithWhereWithoutUtilisateurInput | UtilisationConsommableUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: UtilisationConsommableScalarWhereInput | UtilisationConsommableScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmpruntUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<EmpruntCreateWithoutUtilisateurInput, EmpruntUncheckedCreateWithoutUtilisateurInput> | EmpruntCreateWithoutUtilisateurInput[] | EmpruntUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutUtilisateurInput | EmpruntCreateOrConnectWithoutUtilisateurInput[]
    upsert?: EmpruntUpsertWithWhereUniqueWithoutUtilisateurInput | EmpruntUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: EmpruntCreateManyUtilisateurInputEnvelope
    set?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    disconnect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    delete?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    update?: EmpruntUpdateWithWhereUniqueWithoutUtilisateurInput | EmpruntUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: EmpruntUpdateManyWithWhereWithoutUtilisateurInput | EmpruntUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: EmpruntScalarWhereInput | EmpruntScalarWhereInput[]
  }

  export type DemandeEmpruntUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<DemandeEmpruntCreateWithoutUtilisateurInput, DemandeEmpruntUncheckedCreateWithoutUtilisateurInput> | DemandeEmpruntCreateWithoutUtilisateurInput[] | DemandeEmpruntUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: DemandeEmpruntCreateOrConnectWithoutUtilisateurInput | DemandeEmpruntCreateOrConnectWithoutUtilisateurInput[]
    upsert?: DemandeEmpruntUpsertWithWhereUniqueWithoutUtilisateurInput | DemandeEmpruntUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: DemandeEmpruntCreateManyUtilisateurInputEnvelope
    set?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    disconnect?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    delete?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    connect?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    update?: DemandeEmpruntUpdateWithWhereUniqueWithoutUtilisateurInput | DemandeEmpruntUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: DemandeEmpruntUpdateManyWithWhereWithoutUtilisateurInput | DemandeEmpruntUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: DemandeEmpruntScalarWhereInput | DemandeEmpruntScalarWhereInput[]
  }

  export type UtilisationConsommableUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<UtilisationConsommableCreateWithoutUtilisateurInput, UtilisationConsommableUncheckedCreateWithoutUtilisateurInput> | UtilisationConsommableCreateWithoutUtilisateurInput[] | UtilisationConsommableUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: UtilisationConsommableCreateOrConnectWithoutUtilisateurInput | UtilisationConsommableCreateOrConnectWithoutUtilisateurInput[]
    upsert?: UtilisationConsommableUpsertWithWhereUniqueWithoutUtilisateurInput | UtilisationConsommableUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: UtilisationConsommableCreateManyUtilisateurInputEnvelope
    set?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    disconnect?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    delete?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    connect?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    update?: UtilisationConsommableUpdateWithWhereUniqueWithoutUtilisateurInput | UtilisationConsommableUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: UtilisationConsommableUpdateManyWithWhereWithoutUtilisateurInput | UtilisationConsommableUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: UtilisationConsommableScalarWhereInput | UtilisationConsommableScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutEmpruntsInput = {
    create?: XOR<UtilisateurCreateWithoutEmpruntsInput, UtilisateurUncheckedCreateWithoutEmpruntsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEmpruntsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type EquipementCreateNestedOneWithoutEmpruntInput = {
    create?: XOR<EquipementCreateWithoutEmpruntInput, EquipementUncheckedCreateWithoutEmpruntInput>
    connectOrCreate?: EquipementCreateOrConnectWithoutEmpruntInput
    connect?: EquipementWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutEmpruntInput = {
    create?: XOR<NotificationCreateWithoutEmpruntInput, NotificationUncheckedCreateWithoutEmpruntInput> | NotificationCreateWithoutEmpruntInput[] | NotificationUncheckedCreateWithoutEmpruntInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutEmpruntInput | NotificationCreateOrConnectWithoutEmpruntInput[]
    createMany?: NotificationCreateManyEmpruntInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutEmpruntInput = {
    create?: XOR<NotificationCreateWithoutEmpruntInput, NotificationUncheckedCreateWithoutEmpruntInput> | NotificationCreateWithoutEmpruntInput[] | NotificationUncheckedCreateWithoutEmpruntInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutEmpruntInput | NotificationCreateOrConnectWithoutEmpruntInput[]
    createMany?: NotificationCreateManyEmpruntInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumStatutFieldUpdateOperationsInput = {
    set?: $Enums.Statut
  }

  export type UtilisateurUpdateOneRequiredWithoutEmpruntsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutEmpruntsInput, UtilisateurUncheckedCreateWithoutEmpruntsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEmpruntsInput
    upsert?: UtilisateurUpsertWithoutEmpruntsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutEmpruntsInput, UtilisateurUpdateWithoutEmpruntsInput>, UtilisateurUncheckedUpdateWithoutEmpruntsInput>
  }

  export type EquipementUpdateOneRequiredWithoutEmpruntNestedInput = {
    create?: XOR<EquipementCreateWithoutEmpruntInput, EquipementUncheckedCreateWithoutEmpruntInput>
    connectOrCreate?: EquipementCreateOrConnectWithoutEmpruntInput
    upsert?: EquipementUpsertWithoutEmpruntInput
    connect?: EquipementWhereUniqueInput
    update?: XOR<XOR<EquipementUpdateToOneWithWhereWithoutEmpruntInput, EquipementUpdateWithoutEmpruntInput>, EquipementUncheckedUpdateWithoutEmpruntInput>
  }

  export type NotificationUpdateManyWithoutEmpruntNestedInput = {
    create?: XOR<NotificationCreateWithoutEmpruntInput, NotificationUncheckedCreateWithoutEmpruntInput> | NotificationCreateWithoutEmpruntInput[] | NotificationUncheckedCreateWithoutEmpruntInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutEmpruntInput | NotificationCreateOrConnectWithoutEmpruntInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutEmpruntInput | NotificationUpsertWithWhereUniqueWithoutEmpruntInput[]
    createMany?: NotificationCreateManyEmpruntInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutEmpruntInput | NotificationUpdateWithWhereUniqueWithoutEmpruntInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutEmpruntInput | NotificationUpdateManyWithWhereWithoutEmpruntInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutEmpruntNestedInput = {
    create?: XOR<NotificationCreateWithoutEmpruntInput, NotificationUncheckedCreateWithoutEmpruntInput> | NotificationCreateWithoutEmpruntInput[] | NotificationUncheckedCreateWithoutEmpruntInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutEmpruntInput | NotificationCreateOrConnectWithoutEmpruntInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutEmpruntInput | NotificationUpsertWithWhereUniqueWithoutEmpruntInput[]
    createMany?: NotificationCreateManyEmpruntInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutEmpruntInput | NotificationUpdateWithWhereUniqueWithoutEmpruntInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutEmpruntInput | NotificationUpdateManyWithWhereWithoutEmpruntInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutDemandeEmpruntInput = {
    create?: XOR<UtilisateurCreateWithoutDemandeEmpruntInput, UtilisateurUncheckedCreateWithoutDemandeEmpruntInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutDemandeEmpruntInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type EquipementCreateNestedOneWithoutDemandeEmpruntInput = {
    create?: XOR<EquipementCreateWithoutDemandeEmpruntInput, EquipementUncheckedCreateWithoutDemandeEmpruntInput>
    connectOrCreate?: EquipementCreateOrConnectWithoutDemandeEmpruntInput
    connect?: EquipementWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutDemandeEmpruntInput = {
    create?: XOR<NotificationCreateWithoutDemandeEmpruntInput, NotificationUncheckedCreateWithoutDemandeEmpruntInput> | NotificationCreateWithoutDemandeEmpruntInput[] | NotificationUncheckedCreateWithoutDemandeEmpruntInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDemandeEmpruntInput | NotificationCreateOrConnectWithoutDemandeEmpruntInput[]
    createMany?: NotificationCreateManyDemandeEmpruntInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutDemandeEmpruntInput = {
    create?: XOR<NotificationCreateWithoutDemandeEmpruntInput, NotificationUncheckedCreateWithoutDemandeEmpruntInput> | NotificationCreateWithoutDemandeEmpruntInput[] | NotificationUncheckedCreateWithoutDemandeEmpruntInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDemandeEmpruntInput | NotificationCreateOrConnectWithoutDemandeEmpruntInput[]
    createMany?: NotificationCreateManyDemandeEmpruntInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EnumStatutDemandeFieldUpdateOperationsInput = {
    set?: $Enums.StatutDemande
  }

  export type EnumTypeDemandeFieldUpdateOperationsInput = {
    set?: $Enums.TypeDemande
  }

  export type UtilisateurUpdateOneRequiredWithoutDemandeEmpruntNestedInput = {
    create?: XOR<UtilisateurCreateWithoutDemandeEmpruntInput, UtilisateurUncheckedCreateWithoutDemandeEmpruntInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutDemandeEmpruntInput
    upsert?: UtilisateurUpsertWithoutDemandeEmpruntInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutDemandeEmpruntInput, UtilisateurUpdateWithoutDemandeEmpruntInput>, UtilisateurUncheckedUpdateWithoutDemandeEmpruntInput>
  }

  export type EquipementUpdateOneRequiredWithoutDemandeEmpruntNestedInput = {
    create?: XOR<EquipementCreateWithoutDemandeEmpruntInput, EquipementUncheckedCreateWithoutDemandeEmpruntInput>
    connectOrCreate?: EquipementCreateOrConnectWithoutDemandeEmpruntInput
    upsert?: EquipementUpsertWithoutDemandeEmpruntInput
    connect?: EquipementWhereUniqueInput
    update?: XOR<XOR<EquipementUpdateToOneWithWhereWithoutDemandeEmpruntInput, EquipementUpdateWithoutDemandeEmpruntInput>, EquipementUncheckedUpdateWithoutDemandeEmpruntInput>
  }

  export type NotificationUpdateManyWithoutDemandeEmpruntNestedInput = {
    create?: XOR<NotificationCreateWithoutDemandeEmpruntInput, NotificationUncheckedCreateWithoutDemandeEmpruntInput> | NotificationCreateWithoutDemandeEmpruntInput[] | NotificationUncheckedCreateWithoutDemandeEmpruntInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDemandeEmpruntInput | NotificationCreateOrConnectWithoutDemandeEmpruntInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutDemandeEmpruntInput | NotificationUpsertWithWhereUniqueWithoutDemandeEmpruntInput[]
    createMany?: NotificationCreateManyDemandeEmpruntInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutDemandeEmpruntInput | NotificationUpdateWithWhereUniqueWithoutDemandeEmpruntInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutDemandeEmpruntInput | NotificationUpdateManyWithWhereWithoutDemandeEmpruntInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutDemandeEmpruntNestedInput = {
    create?: XOR<NotificationCreateWithoutDemandeEmpruntInput, NotificationUncheckedCreateWithoutDemandeEmpruntInput> | NotificationCreateWithoutDemandeEmpruntInput[] | NotificationUncheckedCreateWithoutDemandeEmpruntInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDemandeEmpruntInput | NotificationCreateOrConnectWithoutDemandeEmpruntInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutDemandeEmpruntInput | NotificationUpsertWithWhereUniqueWithoutDemandeEmpruntInput[]
    createMany?: NotificationCreateManyDemandeEmpruntInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutDemandeEmpruntInput | NotificationUpdateWithWhereUniqueWithoutDemandeEmpruntInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutDemandeEmpruntInput | NotificationUpdateManyWithWhereWithoutDemandeEmpruntInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type EmpruntCreateNestedManyWithoutEquipementInput = {
    create?: XOR<EmpruntCreateWithoutEquipementInput, EmpruntUncheckedCreateWithoutEquipementInput> | EmpruntCreateWithoutEquipementInput[] | EmpruntUncheckedCreateWithoutEquipementInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutEquipementInput | EmpruntCreateOrConnectWithoutEquipementInput[]
    createMany?: EmpruntCreateManyEquipementInputEnvelope
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
  }

  export type DemandeEmpruntCreateNestedManyWithoutEquipementInput = {
    create?: XOR<DemandeEmpruntCreateWithoutEquipementInput, DemandeEmpruntUncheckedCreateWithoutEquipementInput> | DemandeEmpruntCreateWithoutEquipementInput[] | DemandeEmpruntUncheckedCreateWithoutEquipementInput[]
    connectOrCreate?: DemandeEmpruntCreateOrConnectWithoutEquipementInput | DemandeEmpruntCreateOrConnectWithoutEquipementInput[]
    createMany?: DemandeEmpruntCreateManyEquipementInputEnvelope
    connect?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
  }

  export type EmpruntUncheckedCreateNestedManyWithoutEquipementInput = {
    create?: XOR<EmpruntCreateWithoutEquipementInput, EmpruntUncheckedCreateWithoutEquipementInput> | EmpruntCreateWithoutEquipementInput[] | EmpruntUncheckedCreateWithoutEquipementInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutEquipementInput | EmpruntCreateOrConnectWithoutEquipementInput[]
    createMany?: EmpruntCreateManyEquipementInputEnvelope
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
  }

  export type DemandeEmpruntUncheckedCreateNestedManyWithoutEquipementInput = {
    create?: XOR<DemandeEmpruntCreateWithoutEquipementInput, DemandeEmpruntUncheckedCreateWithoutEquipementInput> | DemandeEmpruntCreateWithoutEquipementInput[] | DemandeEmpruntUncheckedCreateWithoutEquipementInput[]
    connectOrCreate?: DemandeEmpruntCreateOrConnectWithoutEquipementInput | DemandeEmpruntCreateOrConnectWithoutEquipementInput[]
    createMany?: DemandeEmpruntCreateManyEquipementInputEnvelope
    connect?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
  }

  export type EnumDisponibiliteFieldUpdateOperationsInput = {
    set?: $Enums.Disponibilite
  }

  export type EnumEtatMaterielFieldUpdateOperationsInput = {
    set?: $Enums.EtatMateriel
  }

  export type EnumObtentionFieldUpdateOperationsInput = {
    set?: $Enums.Obtention
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmpruntUpdateManyWithoutEquipementNestedInput = {
    create?: XOR<EmpruntCreateWithoutEquipementInput, EmpruntUncheckedCreateWithoutEquipementInput> | EmpruntCreateWithoutEquipementInput[] | EmpruntUncheckedCreateWithoutEquipementInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutEquipementInput | EmpruntCreateOrConnectWithoutEquipementInput[]
    upsert?: EmpruntUpsertWithWhereUniqueWithoutEquipementInput | EmpruntUpsertWithWhereUniqueWithoutEquipementInput[]
    createMany?: EmpruntCreateManyEquipementInputEnvelope
    set?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    disconnect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    delete?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    update?: EmpruntUpdateWithWhereUniqueWithoutEquipementInput | EmpruntUpdateWithWhereUniqueWithoutEquipementInput[]
    updateMany?: EmpruntUpdateManyWithWhereWithoutEquipementInput | EmpruntUpdateManyWithWhereWithoutEquipementInput[]
    deleteMany?: EmpruntScalarWhereInput | EmpruntScalarWhereInput[]
  }

  export type DemandeEmpruntUpdateManyWithoutEquipementNestedInput = {
    create?: XOR<DemandeEmpruntCreateWithoutEquipementInput, DemandeEmpruntUncheckedCreateWithoutEquipementInput> | DemandeEmpruntCreateWithoutEquipementInput[] | DemandeEmpruntUncheckedCreateWithoutEquipementInput[]
    connectOrCreate?: DemandeEmpruntCreateOrConnectWithoutEquipementInput | DemandeEmpruntCreateOrConnectWithoutEquipementInput[]
    upsert?: DemandeEmpruntUpsertWithWhereUniqueWithoutEquipementInput | DemandeEmpruntUpsertWithWhereUniqueWithoutEquipementInput[]
    createMany?: DemandeEmpruntCreateManyEquipementInputEnvelope
    set?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    disconnect?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    delete?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    connect?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    update?: DemandeEmpruntUpdateWithWhereUniqueWithoutEquipementInput | DemandeEmpruntUpdateWithWhereUniqueWithoutEquipementInput[]
    updateMany?: DemandeEmpruntUpdateManyWithWhereWithoutEquipementInput | DemandeEmpruntUpdateManyWithWhereWithoutEquipementInput[]
    deleteMany?: DemandeEmpruntScalarWhereInput | DemandeEmpruntScalarWhereInput[]
  }

  export type EmpruntUncheckedUpdateManyWithoutEquipementNestedInput = {
    create?: XOR<EmpruntCreateWithoutEquipementInput, EmpruntUncheckedCreateWithoutEquipementInput> | EmpruntCreateWithoutEquipementInput[] | EmpruntUncheckedCreateWithoutEquipementInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutEquipementInput | EmpruntCreateOrConnectWithoutEquipementInput[]
    upsert?: EmpruntUpsertWithWhereUniqueWithoutEquipementInput | EmpruntUpsertWithWhereUniqueWithoutEquipementInput[]
    createMany?: EmpruntCreateManyEquipementInputEnvelope
    set?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    disconnect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    delete?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    update?: EmpruntUpdateWithWhereUniqueWithoutEquipementInput | EmpruntUpdateWithWhereUniqueWithoutEquipementInput[]
    updateMany?: EmpruntUpdateManyWithWhereWithoutEquipementInput | EmpruntUpdateManyWithWhereWithoutEquipementInput[]
    deleteMany?: EmpruntScalarWhereInput | EmpruntScalarWhereInput[]
  }

  export type DemandeEmpruntUncheckedUpdateManyWithoutEquipementNestedInput = {
    create?: XOR<DemandeEmpruntCreateWithoutEquipementInput, DemandeEmpruntUncheckedCreateWithoutEquipementInput> | DemandeEmpruntCreateWithoutEquipementInput[] | DemandeEmpruntUncheckedCreateWithoutEquipementInput[]
    connectOrCreate?: DemandeEmpruntCreateOrConnectWithoutEquipementInput | DemandeEmpruntCreateOrConnectWithoutEquipementInput[]
    upsert?: DemandeEmpruntUpsertWithWhereUniqueWithoutEquipementInput | DemandeEmpruntUpsertWithWhereUniqueWithoutEquipementInput[]
    createMany?: DemandeEmpruntCreateManyEquipementInputEnvelope
    set?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    disconnect?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    delete?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    connect?: DemandeEmpruntWhereUniqueInput | DemandeEmpruntWhereUniqueInput[]
    update?: DemandeEmpruntUpdateWithWhereUniqueWithoutEquipementInput | DemandeEmpruntUpdateWithWhereUniqueWithoutEquipementInput[]
    updateMany?: DemandeEmpruntUpdateManyWithWhereWithoutEquipementInput | DemandeEmpruntUpdateManyWithWhereWithoutEquipementInput[]
    deleteMany?: DemandeEmpruntScalarWhereInput | DemandeEmpruntScalarWhereInput[]
  }

  export type EmpruntCreateNestedOneWithoutNotificationInput = {
    create?: XOR<EmpruntCreateWithoutNotificationInput, EmpruntUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: EmpruntCreateOrConnectWithoutNotificationInput
    connect?: EmpruntWhereUniqueInput
  }

  export type DemandeEmpruntCreateNestedOneWithoutNotificationInput = {
    create?: XOR<DemandeEmpruntCreateWithoutNotificationInput, DemandeEmpruntUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: DemandeEmpruntCreateOrConnectWithoutNotificationInput
    connect?: DemandeEmpruntWhereUniqueInput
  }

  export type ConsommableCreateNestedOneWithoutNotificationInput = {
    create?: XOR<ConsommableCreateWithoutNotificationInput, ConsommableUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: ConsommableCreateOrConnectWithoutNotificationInput
    connect?: ConsommableWhereUniqueInput
  }

  export type EnumTypeNotificationFieldUpdateOperationsInput = {
    set?: $Enums.TypeNotification
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EmpruntUpdateOneWithoutNotificationNestedInput = {
    create?: XOR<EmpruntCreateWithoutNotificationInput, EmpruntUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: EmpruntCreateOrConnectWithoutNotificationInput
    upsert?: EmpruntUpsertWithoutNotificationInput
    disconnect?: EmpruntWhereInput | boolean
    delete?: EmpruntWhereInput | boolean
    connect?: EmpruntWhereUniqueInput
    update?: XOR<XOR<EmpruntUpdateToOneWithWhereWithoutNotificationInput, EmpruntUpdateWithoutNotificationInput>, EmpruntUncheckedUpdateWithoutNotificationInput>
  }

  export type DemandeEmpruntUpdateOneWithoutNotificationNestedInput = {
    create?: XOR<DemandeEmpruntCreateWithoutNotificationInput, DemandeEmpruntUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: DemandeEmpruntCreateOrConnectWithoutNotificationInput
    upsert?: DemandeEmpruntUpsertWithoutNotificationInput
    disconnect?: DemandeEmpruntWhereInput | boolean
    delete?: DemandeEmpruntWhereInput | boolean
    connect?: DemandeEmpruntWhereUniqueInput
    update?: XOR<XOR<DemandeEmpruntUpdateToOneWithWhereWithoutNotificationInput, DemandeEmpruntUpdateWithoutNotificationInput>, DemandeEmpruntUncheckedUpdateWithoutNotificationInput>
  }

  export type ConsommableUpdateOneWithoutNotificationNestedInput = {
    create?: XOR<ConsommableCreateWithoutNotificationInput, ConsommableUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: ConsommableCreateOrConnectWithoutNotificationInput
    upsert?: ConsommableUpsertWithoutNotificationInput
    disconnect?: ConsommableWhereInput | boolean
    delete?: ConsommableWhereInput | boolean
    connect?: ConsommableWhereUniqueInput
    update?: XOR<XOR<ConsommableUpdateToOneWithWhereWithoutNotificationInput, ConsommableUpdateWithoutNotificationInput>, ConsommableUncheckedUpdateWithoutNotificationInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NotificationCreateNestedManyWithoutConsommableInput = {
    create?: XOR<NotificationCreateWithoutConsommableInput, NotificationUncheckedCreateWithoutConsommableInput> | NotificationCreateWithoutConsommableInput[] | NotificationUncheckedCreateWithoutConsommableInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutConsommableInput | NotificationCreateOrConnectWithoutConsommableInput[]
    createMany?: NotificationCreateManyConsommableInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UtilisationConsommableCreateNestedManyWithoutConsommableInput = {
    create?: XOR<UtilisationConsommableCreateWithoutConsommableInput, UtilisationConsommableUncheckedCreateWithoutConsommableInput> | UtilisationConsommableCreateWithoutConsommableInput[] | UtilisationConsommableUncheckedCreateWithoutConsommableInput[]
    connectOrCreate?: UtilisationConsommableCreateOrConnectWithoutConsommableInput | UtilisationConsommableCreateOrConnectWithoutConsommableInput[]
    createMany?: UtilisationConsommableCreateManyConsommableInputEnvelope
    connect?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutConsommableInput = {
    create?: XOR<NotificationCreateWithoutConsommableInput, NotificationUncheckedCreateWithoutConsommableInput> | NotificationCreateWithoutConsommableInput[] | NotificationUncheckedCreateWithoutConsommableInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutConsommableInput | NotificationCreateOrConnectWithoutConsommableInput[]
    createMany?: NotificationCreateManyConsommableInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UtilisationConsommableUncheckedCreateNestedManyWithoutConsommableInput = {
    create?: XOR<UtilisationConsommableCreateWithoutConsommableInput, UtilisationConsommableUncheckedCreateWithoutConsommableInput> | UtilisationConsommableCreateWithoutConsommableInput[] | UtilisationConsommableUncheckedCreateWithoutConsommableInput[]
    connectOrCreate?: UtilisationConsommableCreateOrConnectWithoutConsommableInput | UtilisationConsommableCreateOrConnectWithoutConsommableInput[]
    createMany?: UtilisationConsommableCreateManyConsommableInputEnvelope
    connect?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
  }

  export type NotificationUpdateManyWithoutConsommableNestedInput = {
    create?: XOR<NotificationCreateWithoutConsommableInput, NotificationUncheckedCreateWithoutConsommableInput> | NotificationCreateWithoutConsommableInput[] | NotificationUncheckedCreateWithoutConsommableInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutConsommableInput | NotificationCreateOrConnectWithoutConsommableInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutConsommableInput | NotificationUpsertWithWhereUniqueWithoutConsommableInput[]
    createMany?: NotificationCreateManyConsommableInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutConsommableInput | NotificationUpdateWithWhereUniqueWithoutConsommableInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutConsommableInput | NotificationUpdateManyWithWhereWithoutConsommableInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UtilisationConsommableUpdateManyWithoutConsommableNestedInput = {
    create?: XOR<UtilisationConsommableCreateWithoutConsommableInput, UtilisationConsommableUncheckedCreateWithoutConsommableInput> | UtilisationConsommableCreateWithoutConsommableInput[] | UtilisationConsommableUncheckedCreateWithoutConsommableInput[]
    connectOrCreate?: UtilisationConsommableCreateOrConnectWithoutConsommableInput | UtilisationConsommableCreateOrConnectWithoutConsommableInput[]
    upsert?: UtilisationConsommableUpsertWithWhereUniqueWithoutConsommableInput | UtilisationConsommableUpsertWithWhereUniqueWithoutConsommableInput[]
    createMany?: UtilisationConsommableCreateManyConsommableInputEnvelope
    set?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    disconnect?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    delete?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    connect?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    update?: UtilisationConsommableUpdateWithWhereUniqueWithoutConsommableInput | UtilisationConsommableUpdateWithWhereUniqueWithoutConsommableInput[]
    updateMany?: UtilisationConsommableUpdateManyWithWhereWithoutConsommableInput | UtilisationConsommableUpdateManyWithWhereWithoutConsommableInput[]
    deleteMany?: UtilisationConsommableScalarWhereInput | UtilisationConsommableScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutConsommableNestedInput = {
    create?: XOR<NotificationCreateWithoutConsommableInput, NotificationUncheckedCreateWithoutConsommableInput> | NotificationCreateWithoutConsommableInput[] | NotificationUncheckedCreateWithoutConsommableInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutConsommableInput | NotificationCreateOrConnectWithoutConsommableInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutConsommableInput | NotificationUpsertWithWhereUniqueWithoutConsommableInput[]
    createMany?: NotificationCreateManyConsommableInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutConsommableInput | NotificationUpdateWithWhereUniqueWithoutConsommableInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutConsommableInput | NotificationUpdateManyWithWhereWithoutConsommableInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UtilisationConsommableUncheckedUpdateManyWithoutConsommableNestedInput = {
    create?: XOR<UtilisationConsommableCreateWithoutConsommableInput, UtilisationConsommableUncheckedCreateWithoutConsommableInput> | UtilisationConsommableCreateWithoutConsommableInput[] | UtilisationConsommableUncheckedCreateWithoutConsommableInput[]
    connectOrCreate?: UtilisationConsommableCreateOrConnectWithoutConsommableInput | UtilisationConsommableCreateOrConnectWithoutConsommableInput[]
    upsert?: UtilisationConsommableUpsertWithWhereUniqueWithoutConsommableInput | UtilisationConsommableUpsertWithWhereUniqueWithoutConsommableInput[]
    createMany?: UtilisationConsommableCreateManyConsommableInputEnvelope
    set?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    disconnect?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    delete?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    connect?: UtilisationConsommableWhereUniqueInput | UtilisationConsommableWhereUniqueInput[]
    update?: UtilisationConsommableUpdateWithWhereUniqueWithoutConsommableInput | UtilisationConsommableUpdateWithWhereUniqueWithoutConsommableInput[]
    updateMany?: UtilisationConsommableUpdateManyWithWhereWithoutConsommableInput | UtilisationConsommableUpdateManyWithWhereWithoutConsommableInput[]
    deleteMany?: UtilisationConsommableScalarWhereInput | UtilisationConsommableScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutUtilisationsConsommableInput = {
    create?: XOR<UtilisateurCreateWithoutUtilisationsConsommableInput, UtilisateurUncheckedCreateWithoutUtilisationsConsommableInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutUtilisationsConsommableInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type ConsommableCreateNestedOneWithoutUtilisationsConsommableInput = {
    create?: XOR<ConsommableCreateWithoutUtilisationsConsommableInput, ConsommableUncheckedCreateWithoutUtilisationsConsommableInput>
    connectOrCreate?: ConsommableCreateOrConnectWithoutUtilisationsConsommableInput
    connect?: ConsommableWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutUtilisationsConsommableNestedInput = {
    create?: XOR<UtilisateurCreateWithoutUtilisationsConsommableInput, UtilisateurUncheckedCreateWithoutUtilisationsConsommableInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutUtilisationsConsommableInput
    upsert?: UtilisateurUpsertWithoutUtilisationsConsommableInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutUtilisationsConsommableInput, UtilisateurUpdateWithoutUtilisationsConsommableInput>, UtilisateurUncheckedUpdateWithoutUtilisationsConsommableInput>
  }

  export type ConsommableUpdateOneRequiredWithoutUtilisationsConsommableNestedInput = {
    create?: XOR<ConsommableCreateWithoutUtilisationsConsommableInput, ConsommableUncheckedCreateWithoutUtilisationsConsommableInput>
    connectOrCreate?: ConsommableCreateOrConnectWithoutUtilisationsConsommableInput
    upsert?: ConsommableUpsertWithoutUtilisationsConsommableInput
    connect?: ConsommableWhereUniqueInput
    update?: XOR<XOR<ConsommableUpdateToOneWithWhereWithoutUtilisationsConsommableInput, ConsommableUpdateWithoutUtilisationsConsommableInput>, ConsommableUncheckedUpdateWithoutUtilisationsConsommableInput>
  }

  export type EnumPeriodeFieldUpdateOperationsInput = {
    set?: $Enums.Periode
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

  export type NestedEnumRoleUtilisateurFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUtilisateur | EnumRoleUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUtilisateur[] | ListEnumRoleUtilisateurFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleUtilisateur[] | ListEnumRoleUtilisateurFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleUtilisateurFilter<$PrismaModel> | $Enums.RoleUtilisateur
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumRoleUtilisateurWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUtilisateur | EnumRoleUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUtilisateur[] | ListEnumRoleUtilisateurFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleUtilisateur[] | ListEnumRoleUtilisateurFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleUtilisateurWithAggregatesFilter<$PrismaModel> | $Enums.RoleUtilisateur
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleUtilisateurFilter<$PrismaModel>
    _max?: NestedEnumRoleUtilisateurFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
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

  export type NestedEnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
  }

  export type NestedEnumStatutDemandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeFilter<$PrismaModel> | $Enums.StatutDemande
  }

  export type NestedEnumTypeDemandeFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeDemande | EnumTypeDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeDemande[] | ListEnumTypeDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeDemande[] | ListEnumTypeDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeDemandeFilter<$PrismaModel> | $Enums.TypeDemande
  }

  export type NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutDemande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDemandeFilter<$PrismaModel>
    _max?: NestedEnumStatutDemandeFilter<$PrismaModel>
  }

  export type NestedEnumTypeDemandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeDemande | EnumTypeDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeDemande[] | ListEnumTypeDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeDemande[] | ListEnumTypeDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeDemandeWithAggregatesFilter<$PrismaModel> | $Enums.TypeDemande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeDemandeFilter<$PrismaModel>
    _max?: NestedEnumTypeDemandeFilter<$PrismaModel>
  }

  export type NestedEnumDisponibiliteFilter<$PrismaModel = never> = {
    equals?: $Enums.Disponibilite | EnumDisponibiliteFieldRefInput<$PrismaModel>
    in?: $Enums.Disponibilite[] | ListEnumDisponibiliteFieldRefInput<$PrismaModel>
    notIn?: $Enums.Disponibilite[] | ListEnumDisponibiliteFieldRefInput<$PrismaModel>
    not?: NestedEnumDisponibiliteFilter<$PrismaModel> | $Enums.Disponibilite
  }

  export type NestedEnumEtatMaterielFilter<$PrismaModel = never> = {
    equals?: $Enums.EtatMateriel | EnumEtatMaterielFieldRefInput<$PrismaModel>
    in?: $Enums.EtatMateriel[] | ListEnumEtatMaterielFieldRefInput<$PrismaModel>
    notIn?: $Enums.EtatMateriel[] | ListEnumEtatMaterielFieldRefInput<$PrismaModel>
    not?: NestedEnumEtatMaterielFilter<$PrismaModel> | $Enums.EtatMateriel
  }

  export type NestedEnumObtentionFilter<$PrismaModel = never> = {
    equals?: $Enums.Obtention | EnumObtentionFieldRefInput<$PrismaModel>
    in?: $Enums.Obtention[] | ListEnumObtentionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Obtention[] | ListEnumObtentionFieldRefInput<$PrismaModel>
    not?: NestedEnumObtentionFilter<$PrismaModel> | $Enums.Obtention
  }

  export type NestedEnumDisponibiliteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Disponibilite | EnumDisponibiliteFieldRefInput<$PrismaModel>
    in?: $Enums.Disponibilite[] | ListEnumDisponibiliteFieldRefInput<$PrismaModel>
    notIn?: $Enums.Disponibilite[] | ListEnumDisponibiliteFieldRefInput<$PrismaModel>
    not?: NestedEnumDisponibiliteWithAggregatesFilter<$PrismaModel> | $Enums.Disponibilite
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisponibiliteFilter<$PrismaModel>
    _max?: NestedEnumDisponibiliteFilter<$PrismaModel>
  }

  export type NestedEnumEtatMaterielWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EtatMateriel | EnumEtatMaterielFieldRefInput<$PrismaModel>
    in?: $Enums.EtatMateriel[] | ListEnumEtatMaterielFieldRefInput<$PrismaModel>
    notIn?: $Enums.EtatMateriel[] | ListEnumEtatMaterielFieldRefInput<$PrismaModel>
    not?: NestedEnumEtatMaterielWithAggregatesFilter<$PrismaModel> | $Enums.EtatMateriel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEtatMaterielFilter<$PrismaModel>
    _max?: NestedEnumEtatMaterielFilter<$PrismaModel>
  }

  export type NestedEnumObtentionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Obtention | EnumObtentionFieldRefInput<$PrismaModel>
    in?: $Enums.Obtention[] | ListEnumObtentionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Obtention[] | ListEnumObtentionFieldRefInput<$PrismaModel>
    not?: NestedEnumObtentionWithAggregatesFilter<$PrismaModel> | $Enums.Obtention
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumObtentionFilter<$PrismaModel>
    _max?: NestedEnumObtentionFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTypeNotificationFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeNotification | EnumTypeNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeNotificationFilter<$PrismaModel> | $Enums.TypeNotification
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTypeNotificationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeNotification | EnumTypeNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeNotificationWithAggregatesFilter<$PrismaModel> | $Enums.TypeNotification
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeNotificationFilter<$PrismaModel>
    _max?: NestedEnumTypeNotificationFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPeriodeFilter<$PrismaModel = never> = {
    equals?: $Enums.Periode | EnumPeriodeFieldRefInput<$PrismaModel>
    in?: $Enums.Periode[] | ListEnumPeriodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Periode[] | ListEnumPeriodeFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodeFilter<$PrismaModel> | $Enums.Periode
  }

  export type NestedEnumPeriodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Periode | EnumPeriodeFieldRefInput<$PrismaModel>
    in?: $Enums.Periode[] | ListEnumPeriodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Periode[] | ListEnumPeriodeFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodeWithAggregatesFilter<$PrismaModel> | $Enums.Periode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeriodeFilter<$PrismaModel>
    _max?: NestedEnumPeriodeFilter<$PrismaModel>
  }

  export type EmpruntCreateWithoutUtilisateurInput = {
    dateEmprunt?: Date | string
    dateRetourPrevu: Date | string
    dateRetourEffective?: Date | string | null
    usage: string
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    equipement: EquipementCreateNestedOneWithoutEmpruntInput
    notification?: NotificationCreateNestedManyWithoutEmpruntInput
  }

  export type EmpruntUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    equipementId: number
    dateEmprunt?: Date | string
    dateRetourPrevu: Date | string
    dateRetourEffective?: Date | string | null
    usage: string
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: NotificationUncheckedCreateNestedManyWithoutEmpruntInput
  }

  export type EmpruntCreateOrConnectWithoutUtilisateurInput = {
    where: EmpruntWhereUniqueInput
    create: XOR<EmpruntCreateWithoutUtilisateurInput, EmpruntUncheckedCreateWithoutUtilisateurInput>
  }

  export type EmpruntCreateManyUtilisateurInputEnvelope = {
    data: EmpruntCreateManyUtilisateurInput | EmpruntCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type DemandeEmpruntCreateWithoutUtilisateurInput = {
    dateDemande?: Date | string
    dateRetourPrevu: Date | string
    usage: string
    statut?: $Enums.StatutDemande
    type?: $Enums.TypeDemande
    motif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipement: EquipementCreateNestedOneWithoutDemandeEmpruntInput
    notification?: NotificationCreateNestedManyWithoutDemandeEmpruntInput
  }

  export type DemandeEmpruntUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    equipementId: number
    dateDemande?: Date | string
    dateRetourPrevu: Date | string
    usage: string
    statut?: $Enums.StatutDemande
    type?: $Enums.TypeDemande
    motif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: NotificationUncheckedCreateNestedManyWithoutDemandeEmpruntInput
  }

  export type DemandeEmpruntCreateOrConnectWithoutUtilisateurInput = {
    where: DemandeEmpruntWhereUniqueInput
    create: XOR<DemandeEmpruntCreateWithoutUtilisateurInput, DemandeEmpruntUncheckedCreateWithoutUtilisateurInput>
  }

  export type DemandeEmpruntCreateManyUtilisateurInputEnvelope = {
    data: DemandeEmpruntCreateManyUtilisateurInput | DemandeEmpruntCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type UtilisationConsommableCreateWithoutUtilisateurInput = {
    quantiteUtilise: number
    dateUtilisation?: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    consommable: ConsommableCreateNestedOneWithoutUtilisationsConsommableInput
  }

  export type UtilisationConsommableUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    consommableId: number
    quantiteUtilise: number
    dateUtilisation?: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UtilisationConsommableCreateOrConnectWithoutUtilisateurInput = {
    where: UtilisationConsommableWhereUniqueInput
    create: XOR<UtilisationConsommableCreateWithoutUtilisateurInput, UtilisationConsommableUncheckedCreateWithoutUtilisateurInput>
  }

  export type UtilisationConsommableCreateManyUtilisateurInputEnvelope = {
    data: UtilisationConsommableCreateManyUtilisateurInput | UtilisationConsommableCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type EmpruntUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: EmpruntWhereUniqueInput
    update: XOR<EmpruntUpdateWithoutUtilisateurInput, EmpruntUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<EmpruntCreateWithoutUtilisateurInput, EmpruntUncheckedCreateWithoutUtilisateurInput>
  }

  export type EmpruntUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: EmpruntWhereUniqueInput
    data: XOR<EmpruntUpdateWithoutUtilisateurInput, EmpruntUncheckedUpdateWithoutUtilisateurInput>
  }

  export type EmpruntUpdateManyWithWhereWithoutUtilisateurInput = {
    where: EmpruntScalarWhereInput
    data: XOR<EmpruntUpdateManyMutationInput, EmpruntUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type EmpruntScalarWhereInput = {
    AND?: EmpruntScalarWhereInput | EmpruntScalarWhereInput[]
    OR?: EmpruntScalarWhereInput[]
    NOT?: EmpruntScalarWhereInput | EmpruntScalarWhereInput[]
    id?: IntFilter<"Emprunt"> | number
    utilisateurId?: IntFilter<"Emprunt"> | number
    equipementId?: IntFilter<"Emprunt"> | number
    dateEmprunt?: DateTimeFilter<"Emprunt"> | Date | string
    dateRetourPrevu?: DateTimeFilter<"Emprunt"> | Date | string
    dateRetourEffective?: DateTimeNullableFilter<"Emprunt"> | Date | string | null
    usage?: StringFilter<"Emprunt"> | string
    statut?: EnumStatutFilter<"Emprunt"> | $Enums.Statut
    createdAt?: DateTimeFilter<"Emprunt"> | Date | string
    updatedAt?: DateTimeFilter<"Emprunt"> | Date | string
  }

  export type DemandeEmpruntUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: DemandeEmpruntWhereUniqueInput
    update: XOR<DemandeEmpruntUpdateWithoutUtilisateurInput, DemandeEmpruntUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<DemandeEmpruntCreateWithoutUtilisateurInput, DemandeEmpruntUncheckedCreateWithoutUtilisateurInput>
  }

  export type DemandeEmpruntUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: DemandeEmpruntWhereUniqueInput
    data: XOR<DemandeEmpruntUpdateWithoutUtilisateurInput, DemandeEmpruntUncheckedUpdateWithoutUtilisateurInput>
  }

  export type DemandeEmpruntUpdateManyWithWhereWithoutUtilisateurInput = {
    where: DemandeEmpruntScalarWhereInput
    data: XOR<DemandeEmpruntUpdateManyMutationInput, DemandeEmpruntUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type DemandeEmpruntScalarWhereInput = {
    AND?: DemandeEmpruntScalarWhereInput | DemandeEmpruntScalarWhereInput[]
    OR?: DemandeEmpruntScalarWhereInput[]
    NOT?: DemandeEmpruntScalarWhereInput | DemandeEmpruntScalarWhereInput[]
    id?: IntFilter<"DemandeEmprunt"> | number
    utilisateurId?: IntFilter<"DemandeEmprunt"> | number
    equipementId?: IntFilter<"DemandeEmprunt"> | number
    dateDemande?: DateTimeFilter<"DemandeEmprunt"> | Date | string
    dateRetourPrevu?: DateTimeFilter<"DemandeEmprunt"> | Date | string
    usage?: StringFilter<"DemandeEmprunt"> | string
    statut?: EnumStatutDemandeFilter<"DemandeEmprunt"> | $Enums.StatutDemande
    type?: EnumTypeDemandeFilter<"DemandeEmprunt"> | $Enums.TypeDemande
    motif?: StringNullableFilter<"DemandeEmprunt"> | string | null
    createdAt?: DateTimeFilter<"DemandeEmprunt"> | Date | string
    updatedAt?: DateTimeFilter<"DemandeEmprunt"> | Date | string
  }

  export type UtilisationConsommableUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: UtilisationConsommableWhereUniqueInput
    update: XOR<UtilisationConsommableUpdateWithoutUtilisateurInput, UtilisationConsommableUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<UtilisationConsommableCreateWithoutUtilisateurInput, UtilisationConsommableUncheckedCreateWithoutUtilisateurInput>
  }

  export type UtilisationConsommableUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: UtilisationConsommableWhereUniqueInput
    data: XOR<UtilisationConsommableUpdateWithoutUtilisateurInput, UtilisationConsommableUncheckedUpdateWithoutUtilisateurInput>
  }

  export type UtilisationConsommableUpdateManyWithWhereWithoutUtilisateurInput = {
    where: UtilisationConsommableScalarWhereInput
    data: XOR<UtilisationConsommableUpdateManyMutationInput, UtilisationConsommableUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type UtilisationConsommableScalarWhereInput = {
    AND?: UtilisationConsommableScalarWhereInput | UtilisationConsommableScalarWhereInput[]
    OR?: UtilisationConsommableScalarWhereInput[]
    NOT?: UtilisationConsommableScalarWhereInput | UtilisationConsommableScalarWhereInput[]
    id?: IntFilter<"UtilisationConsommable"> | number
    utilisateurId?: IntFilter<"UtilisationConsommable"> | number
    consommableId?: IntFilter<"UtilisationConsommable"> | number
    quantiteUtilise?: IntFilter<"UtilisationConsommable"> | number
    dateUtilisation?: DateTimeFilter<"UtilisationConsommable"> | Date | string
    description?: StringNullableFilter<"UtilisationConsommable"> | string | null
    createdAt?: DateTimeFilter<"UtilisationConsommable"> | Date | string
    updatedAt?: DateTimeFilter<"UtilisationConsommable"> | Date | string
  }

  export type UtilisateurCreateWithoutEmpruntsInput = {
    nom: string
    prenom: string
    email: string
    motdepasse: string
    role?: $Enums.RoleUtilisateur
    photo?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    demandeEmprunt?: DemandeEmpruntCreateNestedManyWithoutUtilisateurInput
    utilisationsConsommable?: UtilisationConsommableCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutEmpruntsInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    motdepasse: string
    role?: $Enums.RoleUtilisateur
    photo?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    demandeEmprunt?: DemandeEmpruntUncheckedCreateNestedManyWithoutUtilisateurInput
    utilisationsConsommable?: UtilisationConsommableUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutEmpruntsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutEmpruntsInput, UtilisateurUncheckedCreateWithoutEmpruntsInput>
  }

  export type EquipementCreateWithoutEmpruntInput = {
    nom: string
    numeroDeSerie: string
    marque: string
    disponibilite?: $Enums.Disponibilite
    etatMateriel?: $Enums.EtatMateriel
    obtention?: $Enums.Obtention
    prix: number
    fournisseur?: string | null
    donateur?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    demandeEmprunt?: DemandeEmpruntCreateNestedManyWithoutEquipementInput
  }

  export type EquipementUncheckedCreateWithoutEmpruntInput = {
    id?: number
    nom: string
    numeroDeSerie: string
    marque: string
    disponibilite?: $Enums.Disponibilite
    etatMateriel?: $Enums.EtatMateriel
    obtention?: $Enums.Obtention
    prix: number
    fournisseur?: string | null
    donateur?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    demandeEmprunt?: DemandeEmpruntUncheckedCreateNestedManyWithoutEquipementInput
  }

  export type EquipementCreateOrConnectWithoutEmpruntInput = {
    where: EquipementWhereUniqueInput
    create: XOR<EquipementCreateWithoutEmpruntInput, EquipementUncheckedCreateWithoutEmpruntInput>
  }

  export type NotificationCreateWithoutEmpruntInput = {
    message: string
    DateEnvoi?: Date | string
    type?: $Enums.TypeNotification
    vu?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    demandeEmprunt?: DemandeEmpruntCreateNestedOneWithoutNotificationInput
    consommable?: ConsommableCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutEmpruntInput = {
    id?: number
    demandeEmpruntId?: number | null
    consommableId?: number | null
    message: string
    DateEnvoi?: Date | string
    type?: $Enums.TypeNotification
    vu?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutEmpruntInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutEmpruntInput, NotificationUncheckedCreateWithoutEmpruntInput>
  }

  export type NotificationCreateManyEmpruntInputEnvelope = {
    data: NotificationCreateManyEmpruntInput | NotificationCreateManyEmpruntInput[]
    skipDuplicates?: boolean
  }

  export type UtilisateurUpsertWithoutEmpruntsInput = {
    update: XOR<UtilisateurUpdateWithoutEmpruntsInput, UtilisateurUncheckedUpdateWithoutEmpruntsInput>
    create: XOR<UtilisateurCreateWithoutEmpruntsInput, UtilisateurUncheckedCreateWithoutEmpruntsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutEmpruntsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutEmpruntsInput, UtilisateurUncheckedUpdateWithoutEmpruntsInput>
  }

  export type UtilisateurUpdateWithoutEmpruntsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motdepasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeEmprunt?: DemandeEmpruntUpdateManyWithoutUtilisateurNestedInput
    utilisationsConsommable?: UtilisationConsommableUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutEmpruntsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motdepasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeEmprunt?: DemandeEmpruntUncheckedUpdateManyWithoutUtilisateurNestedInput
    utilisationsConsommable?: UtilisationConsommableUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type EquipementUpsertWithoutEmpruntInput = {
    update: XOR<EquipementUpdateWithoutEmpruntInput, EquipementUncheckedUpdateWithoutEmpruntInput>
    create: XOR<EquipementCreateWithoutEmpruntInput, EquipementUncheckedCreateWithoutEmpruntInput>
    where?: EquipementWhereInput
  }

  export type EquipementUpdateToOneWithWhereWithoutEmpruntInput = {
    where?: EquipementWhereInput
    data: XOR<EquipementUpdateWithoutEmpruntInput, EquipementUncheckedUpdateWithoutEmpruntInput>
  }

  export type EquipementUpdateWithoutEmpruntInput = {
    nom?: StringFieldUpdateOperationsInput | string
    numeroDeSerie?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    disponibilite?: EnumDisponibiliteFieldUpdateOperationsInput | $Enums.Disponibilite
    etatMateriel?: EnumEtatMaterielFieldUpdateOperationsInput | $Enums.EtatMateriel
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    prix?: FloatFieldUpdateOperationsInput | number
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeEmprunt?: DemandeEmpruntUpdateManyWithoutEquipementNestedInput
  }

  export type EquipementUncheckedUpdateWithoutEmpruntInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    numeroDeSerie?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    disponibilite?: EnumDisponibiliteFieldUpdateOperationsInput | $Enums.Disponibilite
    etatMateriel?: EnumEtatMaterielFieldUpdateOperationsInput | $Enums.EtatMateriel
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    prix?: FloatFieldUpdateOperationsInput | number
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeEmprunt?: DemandeEmpruntUncheckedUpdateManyWithoutEquipementNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutEmpruntInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutEmpruntInput, NotificationUncheckedUpdateWithoutEmpruntInput>
    create: XOR<NotificationCreateWithoutEmpruntInput, NotificationUncheckedCreateWithoutEmpruntInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutEmpruntInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutEmpruntInput, NotificationUncheckedUpdateWithoutEmpruntInput>
  }

  export type NotificationUpdateManyWithWhereWithoutEmpruntInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutEmpruntInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    empruntId?: IntNullableFilter<"Notification"> | number | null
    demandeEmpruntId?: IntNullableFilter<"Notification"> | number | null
    consommableId?: IntNullableFilter<"Notification"> | number | null
    message?: StringFilter<"Notification"> | string
    DateEnvoi?: DateTimeFilter<"Notification"> | Date | string
    type?: EnumTypeNotificationFilter<"Notification"> | $Enums.TypeNotification
    vu?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UtilisateurCreateWithoutDemandeEmpruntInput = {
    nom: string
    prenom: string
    email: string
    motdepasse: string
    role?: $Enums.RoleUtilisateur
    photo?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    emprunts?: EmpruntCreateNestedManyWithoutUtilisateurInput
    utilisationsConsommable?: UtilisationConsommableCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutDemandeEmpruntInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    motdepasse: string
    role?: $Enums.RoleUtilisateur
    photo?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    emprunts?: EmpruntUncheckedCreateNestedManyWithoutUtilisateurInput
    utilisationsConsommable?: UtilisationConsommableUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutDemandeEmpruntInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutDemandeEmpruntInput, UtilisateurUncheckedCreateWithoutDemandeEmpruntInput>
  }

  export type EquipementCreateWithoutDemandeEmpruntInput = {
    nom: string
    numeroDeSerie: string
    marque: string
    disponibilite?: $Enums.Disponibilite
    etatMateriel?: $Enums.EtatMateriel
    obtention?: $Enums.Obtention
    prix: number
    fournisseur?: string | null
    donateur?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emprunt?: EmpruntCreateNestedManyWithoutEquipementInput
  }

  export type EquipementUncheckedCreateWithoutDemandeEmpruntInput = {
    id?: number
    nom: string
    numeroDeSerie: string
    marque: string
    disponibilite?: $Enums.Disponibilite
    etatMateriel?: $Enums.EtatMateriel
    obtention?: $Enums.Obtention
    prix: number
    fournisseur?: string | null
    donateur?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emprunt?: EmpruntUncheckedCreateNestedManyWithoutEquipementInput
  }

  export type EquipementCreateOrConnectWithoutDemandeEmpruntInput = {
    where: EquipementWhereUniqueInput
    create: XOR<EquipementCreateWithoutDemandeEmpruntInput, EquipementUncheckedCreateWithoutDemandeEmpruntInput>
  }

  export type NotificationCreateWithoutDemandeEmpruntInput = {
    message: string
    DateEnvoi?: Date | string
    type?: $Enums.TypeNotification
    vu?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emprunt?: EmpruntCreateNestedOneWithoutNotificationInput
    consommable?: ConsommableCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutDemandeEmpruntInput = {
    id?: number
    empruntId?: number | null
    consommableId?: number | null
    message: string
    DateEnvoi?: Date | string
    type?: $Enums.TypeNotification
    vu?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutDemandeEmpruntInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutDemandeEmpruntInput, NotificationUncheckedCreateWithoutDemandeEmpruntInput>
  }

  export type NotificationCreateManyDemandeEmpruntInputEnvelope = {
    data: NotificationCreateManyDemandeEmpruntInput | NotificationCreateManyDemandeEmpruntInput[]
    skipDuplicates?: boolean
  }

  export type UtilisateurUpsertWithoutDemandeEmpruntInput = {
    update: XOR<UtilisateurUpdateWithoutDemandeEmpruntInput, UtilisateurUncheckedUpdateWithoutDemandeEmpruntInput>
    create: XOR<UtilisateurCreateWithoutDemandeEmpruntInput, UtilisateurUncheckedCreateWithoutDemandeEmpruntInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutDemandeEmpruntInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutDemandeEmpruntInput, UtilisateurUncheckedUpdateWithoutDemandeEmpruntInput>
  }

  export type UtilisateurUpdateWithoutDemandeEmpruntInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motdepasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunts?: EmpruntUpdateManyWithoutUtilisateurNestedInput
    utilisationsConsommable?: UtilisationConsommableUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutDemandeEmpruntInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motdepasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunts?: EmpruntUncheckedUpdateManyWithoutUtilisateurNestedInput
    utilisationsConsommable?: UtilisationConsommableUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type EquipementUpsertWithoutDemandeEmpruntInput = {
    update: XOR<EquipementUpdateWithoutDemandeEmpruntInput, EquipementUncheckedUpdateWithoutDemandeEmpruntInput>
    create: XOR<EquipementCreateWithoutDemandeEmpruntInput, EquipementUncheckedCreateWithoutDemandeEmpruntInput>
    where?: EquipementWhereInput
  }

  export type EquipementUpdateToOneWithWhereWithoutDemandeEmpruntInput = {
    where?: EquipementWhereInput
    data: XOR<EquipementUpdateWithoutDemandeEmpruntInput, EquipementUncheckedUpdateWithoutDemandeEmpruntInput>
  }

  export type EquipementUpdateWithoutDemandeEmpruntInput = {
    nom?: StringFieldUpdateOperationsInput | string
    numeroDeSerie?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    disponibilite?: EnumDisponibiliteFieldUpdateOperationsInput | $Enums.Disponibilite
    etatMateriel?: EnumEtatMaterielFieldUpdateOperationsInput | $Enums.EtatMateriel
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    prix?: FloatFieldUpdateOperationsInput | number
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunt?: EmpruntUpdateManyWithoutEquipementNestedInput
  }

  export type EquipementUncheckedUpdateWithoutDemandeEmpruntInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    numeroDeSerie?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    disponibilite?: EnumDisponibiliteFieldUpdateOperationsInput | $Enums.Disponibilite
    etatMateriel?: EnumEtatMaterielFieldUpdateOperationsInput | $Enums.EtatMateriel
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    prix?: FloatFieldUpdateOperationsInput | number
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunt?: EmpruntUncheckedUpdateManyWithoutEquipementNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutDemandeEmpruntInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutDemandeEmpruntInput, NotificationUncheckedUpdateWithoutDemandeEmpruntInput>
    create: XOR<NotificationCreateWithoutDemandeEmpruntInput, NotificationUncheckedCreateWithoutDemandeEmpruntInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutDemandeEmpruntInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutDemandeEmpruntInput, NotificationUncheckedUpdateWithoutDemandeEmpruntInput>
  }

  export type NotificationUpdateManyWithWhereWithoutDemandeEmpruntInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutDemandeEmpruntInput>
  }

  export type EmpruntCreateWithoutEquipementInput = {
    dateEmprunt?: Date | string
    dateRetourPrevu: Date | string
    dateRetourEffective?: Date | string | null
    usage: string
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutEmpruntsInput
    notification?: NotificationCreateNestedManyWithoutEmpruntInput
  }

  export type EmpruntUncheckedCreateWithoutEquipementInput = {
    id?: number
    utilisateurId: number
    dateEmprunt?: Date | string
    dateRetourPrevu: Date | string
    dateRetourEffective?: Date | string | null
    usage: string
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: NotificationUncheckedCreateNestedManyWithoutEmpruntInput
  }

  export type EmpruntCreateOrConnectWithoutEquipementInput = {
    where: EmpruntWhereUniqueInput
    create: XOR<EmpruntCreateWithoutEquipementInput, EmpruntUncheckedCreateWithoutEquipementInput>
  }

  export type EmpruntCreateManyEquipementInputEnvelope = {
    data: EmpruntCreateManyEquipementInput | EmpruntCreateManyEquipementInput[]
    skipDuplicates?: boolean
  }

  export type DemandeEmpruntCreateWithoutEquipementInput = {
    dateDemande?: Date | string
    dateRetourPrevu: Date | string
    usage: string
    statut?: $Enums.StatutDemande
    type?: $Enums.TypeDemande
    motif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutDemandeEmpruntInput
    notification?: NotificationCreateNestedManyWithoutDemandeEmpruntInput
  }

  export type DemandeEmpruntUncheckedCreateWithoutEquipementInput = {
    id?: number
    utilisateurId: number
    dateDemande?: Date | string
    dateRetourPrevu: Date | string
    usage: string
    statut?: $Enums.StatutDemande
    type?: $Enums.TypeDemande
    motif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: NotificationUncheckedCreateNestedManyWithoutDemandeEmpruntInput
  }

  export type DemandeEmpruntCreateOrConnectWithoutEquipementInput = {
    where: DemandeEmpruntWhereUniqueInput
    create: XOR<DemandeEmpruntCreateWithoutEquipementInput, DemandeEmpruntUncheckedCreateWithoutEquipementInput>
  }

  export type DemandeEmpruntCreateManyEquipementInputEnvelope = {
    data: DemandeEmpruntCreateManyEquipementInput | DemandeEmpruntCreateManyEquipementInput[]
    skipDuplicates?: boolean
  }

  export type EmpruntUpsertWithWhereUniqueWithoutEquipementInput = {
    where: EmpruntWhereUniqueInput
    update: XOR<EmpruntUpdateWithoutEquipementInput, EmpruntUncheckedUpdateWithoutEquipementInput>
    create: XOR<EmpruntCreateWithoutEquipementInput, EmpruntUncheckedCreateWithoutEquipementInput>
  }

  export type EmpruntUpdateWithWhereUniqueWithoutEquipementInput = {
    where: EmpruntWhereUniqueInput
    data: XOR<EmpruntUpdateWithoutEquipementInput, EmpruntUncheckedUpdateWithoutEquipementInput>
  }

  export type EmpruntUpdateManyWithWhereWithoutEquipementInput = {
    where: EmpruntScalarWhereInput
    data: XOR<EmpruntUpdateManyMutationInput, EmpruntUncheckedUpdateManyWithoutEquipementInput>
  }

  export type DemandeEmpruntUpsertWithWhereUniqueWithoutEquipementInput = {
    where: DemandeEmpruntWhereUniqueInput
    update: XOR<DemandeEmpruntUpdateWithoutEquipementInput, DemandeEmpruntUncheckedUpdateWithoutEquipementInput>
    create: XOR<DemandeEmpruntCreateWithoutEquipementInput, DemandeEmpruntUncheckedCreateWithoutEquipementInput>
  }

  export type DemandeEmpruntUpdateWithWhereUniqueWithoutEquipementInput = {
    where: DemandeEmpruntWhereUniqueInput
    data: XOR<DemandeEmpruntUpdateWithoutEquipementInput, DemandeEmpruntUncheckedUpdateWithoutEquipementInput>
  }

  export type DemandeEmpruntUpdateManyWithWhereWithoutEquipementInput = {
    where: DemandeEmpruntScalarWhereInput
    data: XOR<DemandeEmpruntUpdateManyMutationInput, DemandeEmpruntUncheckedUpdateManyWithoutEquipementInput>
  }

  export type EmpruntCreateWithoutNotificationInput = {
    dateEmprunt?: Date | string
    dateRetourPrevu: Date | string
    dateRetourEffective?: Date | string | null
    usage: string
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutEmpruntsInput
    equipement: EquipementCreateNestedOneWithoutEmpruntInput
  }

  export type EmpruntUncheckedCreateWithoutNotificationInput = {
    id?: number
    utilisateurId: number
    equipementId: number
    dateEmprunt?: Date | string
    dateRetourPrevu: Date | string
    dateRetourEffective?: Date | string | null
    usage: string
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmpruntCreateOrConnectWithoutNotificationInput = {
    where: EmpruntWhereUniqueInput
    create: XOR<EmpruntCreateWithoutNotificationInput, EmpruntUncheckedCreateWithoutNotificationInput>
  }

  export type DemandeEmpruntCreateWithoutNotificationInput = {
    dateDemande?: Date | string
    dateRetourPrevu: Date | string
    usage: string
    statut?: $Enums.StatutDemande
    type?: $Enums.TypeDemande
    motif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutDemandeEmpruntInput
    equipement: EquipementCreateNestedOneWithoutDemandeEmpruntInput
  }

  export type DemandeEmpruntUncheckedCreateWithoutNotificationInput = {
    id?: number
    utilisateurId: number
    equipementId: number
    dateDemande?: Date | string
    dateRetourPrevu: Date | string
    usage: string
    statut?: $Enums.StatutDemande
    type?: $Enums.TypeDemande
    motif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemandeEmpruntCreateOrConnectWithoutNotificationInput = {
    where: DemandeEmpruntWhereUniqueInput
    create: XOR<DemandeEmpruntCreateWithoutNotificationInput, DemandeEmpruntUncheckedCreateWithoutNotificationInput>
  }

  export type ConsommableCreateWithoutNotificationInput = {
    nom: string
    marque: string
    quantiteDisponible: number
    seuilCritique: number
    obtention?: $Enums.Obtention
    fournisseur?: string | null
    donnateur?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisationsConsommable?: UtilisationConsommableCreateNestedManyWithoutConsommableInput
  }

  export type ConsommableUncheckedCreateWithoutNotificationInput = {
    id?: number
    nom: string
    marque: string
    quantiteDisponible: number
    seuilCritique: number
    obtention?: $Enums.Obtention
    fournisseur?: string | null
    donnateur?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisationsConsommable?: UtilisationConsommableUncheckedCreateNestedManyWithoutConsommableInput
  }

  export type ConsommableCreateOrConnectWithoutNotificationInput = {
    where: ConsommableWhereUniqueInput
    create: XOR<ConsommableCreateWithoutNotificationInput, ConsommableUncheckedCreateWithoutNotificationInput>
  }

  export type EmpruntUpsertWithoutNotificationInput = {
    update: XOR<EmpruntUpdateWithoutNotificationInput, EmpruntUncheckedUpdateWithoutNotificationInput>
    create: XOR<EmpruntCreateWithoutNotificationInput, EmpruntUncheckedCreateWithoutNotificationInput>
    where?: EmpruntWhereInput
  }

  export type EmpruntUpdateToOneWithWhereWithoutNotificationInput = {
    where?: EmpruntWhereInput
    data: XOR<EmpruntUpdateWithoutNotificationInput, EmpruntUncheckedUpdateWithoutNotificationInput>
  }

  export type EmpruntUpdateWithoutNotificationInput = {
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutEmpruntsNestedInput
    equipement?: EquipementUpdateOneRequiredWithoutEmpruntNestedInput
  }

  export type EmpruntUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    equipementId?: IntFieldUpdateOperationsInput | number
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeEmpruntUpsertWithoutNotificationInput = {
    update: XOR<DemandeEmpruntUpdateWithoutNotificationInput, DemandeEmpruntUncheckedUpdateWithoutNotificationInput>
    create: XOR<DemandeEmpruntCreateWithoutNotificationInput, DemandeEmpruntUncheckedCreateWithoutNotificationInput>
    where?: DemandeEmpruntWhereInput
  }

  export type DemandeEmpruntUpdateToOneWithWhereWithoutNotificationInput = {
    where?: DemandeEmpruntWhereInput
    data: XOR<DemandeEmpruntUpdateWithoutNotificationInput, DemandeEmpruntUncheckedUpdateWithoutNotificationInput>
  }

  export type DemandeEmpruntUpdateWithoutNotificationInput = {
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    type?: EnumTypeDemandeFieldUpdateOperationsInput | $Enums.TypeDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutDemandeEmpruntNestedInput
    equipement?: EquipementUpdateOneRequiredWithoutDemandeEmpruntNestedInput
  }

  export type DemandeEmpruntUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    equipementId?: IntFieldUpdateOperationsInput | number
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    type?: EnumTypeDemandeFieldUpdateOperationsInput | $Enums.TypeDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsommableUpsertWithoutNotificationInput = {
    update: XOR<ConsommableUpdateWithoutNotificationInput, ConsommableUncheckedUpdateWithoutNotificationInput>
    create: XOR<ConsommableCreateWithoutNotificationInput, ConsommableUncheckedCreateWithoutNotificationInput>
    where?: ConsommableWhereInput
  }

  export type ConsommableUpdateToOneWithWhereWithoutNotificationInput = {
    where?: ConsommableWhereInput
    data: XOR<ConsommableUpdateWithoutNotificationInput, ConsommableUncheckedUpdateWithoutNotificationInput>
  }

  export type ConsommableUpdateWithoutNotificationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    quantiteDisponible?: IntFieldUpdateOperationsInput | number
    seuilCritique?: IntFieldUpdateOperationsInput | number
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donnateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisationsConsommable?: UtilisationConsommableUpdateManyWithoutConsommableNestedInput
  }

  export type ConsommableUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    quantiteDisponible?: IntFieldUpdateOperationsInput | number
    seuilCritique?: IntFieldUpdateOperationsInput | number
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donnateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisationsConsommable?: UtilisationConsommableUncheckedUpdateManyWithoutConsommableNestedInput
  }

  export type NotificationCreateWithoutConsommableInput = {
    message: string
    DateEnvoi?: Date | string
    type?: $Enums.TypeNotification
    vu?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emprunt?: EmpruntCreateNestedOneWithoutNotificationInput
    demandeEmprunt?: DemandeEmpruntCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutConsommableInput = {
    id?: number
    empruntId?: number | null
    demandeEmpruntId?: number | null
    message: string
    DateEnvoi?: Date | string
    type?: $Enums.TypeNotification
    vu?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutConsommableInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutConsommableInput, NotificationUncheckedCreateWithoutConsommableInput>
  }

  export type NotificationCreateManyConsommableInputEnvelope = {
    data: NotificationCreateManyConsommableInput | NotificationCreateManyConsommableInput[]
    skipDuplicates?: boolean
  }

  export type UtilisationConsommableCreateWithoutConsommableInput = {
    quantiteUtilise: number
    dateUtilisation?: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutUtilisationsConsommableInput
  }

  export type UtilisationConsommableUncheckedCreateWithoutConsommableInput = {
    id?: number
    utilisateurId: number
    quantiteUtilise: number
    dateUtilisation?: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UtilisationConsommableCreateOrConnectWithoutConsommableInput = {
    where: UtilisationConsommableWhereUniqueInput
    create: XOR<UtilisationConsommableCreateWithoutConsommableInput, UtilisationConsommableUncheckedCreateWithoutConsommableInput>
  }

  export type UtilisationConsommableCreateManyConsommableInputEnvelope = {
    data: UtilisationConsommableCreateManyConsommableInput | UtilisationConsommableCreateManyConsommableInput[]
    skipDuplicates?: boolean
  }

  export type NotificationUpsertWithWhereUniqueWithoutConsommableInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutConsommableInput, NotificationUncheckedUpdateWithoutConsommableInput>
    create: XOR<NotificationCreateWithoutConsommableInput, NotificationUncheckedCreateWithoutConsommableInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutConsommableInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutConsommableInput, NotificationUncheckedUpdateWithoutConsommableInput>
  }

  export type NotificationUpdateManyWithWhereWithoutConsommableInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutConsommableInput>
  }

  export type UtilisationConsommableUpsertWithWhereUniqueWithoutConsommableInput = {
    where: UtilisationConsommableWhereUniqueInput
    update: XOR<UtilisationConsommableUpdateWithoutConsommableInput, UtilisationConsommableUncheckedUpdateWithoutConsommableInput>
    create: XOR<UtilisationConsommableCreateWithoutConsommableInput, UtilisationConsommableUncheckedCreateWithoutConsommableInput>
  }

  export type UtilisationConsommableUpdateWithWhereUniqueWithoutConsommableInput = {
    where: UtilisationConsommableWhereUniqueInput
    data: XOR<UtilisationConsommableUpdateWithoutConsommableInput, UtilisationConsommableUncheckedUpdateWithoutConsommableInput>
  }

  export type UtilisationConsommableUpdateManyWithWhereWithoutConsommableInput = {
    where: UtilisationConsommableScalarWhereInput
    data: XOR<UtilisationConsommableUpdateManyMutationInput, UtilisationConsommableUncheckedUpdateManyWithoutConsommableInput>
  }

  export type UtilisateurCreateWithoutUtilisationsConsommableInput = {
    nom: string
    prenom: string
    email: string
    motdepasse: string
    role?: $Enums.RoleUtilisateur
    photo?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    emprunts?: EmpruntCreateNestedManyWithoutUtilisateurInput
    demandeEmprunt?: DemandeEmpruntCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutUtilisationsConsommableInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    motdepasse: string
    role?: $Enums.RoleUtilisateur
    photo?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    emprunts?: EmpruntUncheckedCreateNestedManyWithoutUtilisateurInput
    demandeEmprunt?: DemandeEmpruntUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutUtilisationsConsommableInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutUtilisationsConsommableInput, UtilisateurUncheckedCreateWithoutUtilisationsConsommableInput>
  }

  export type ConsommableCreateWithoutUtilisationsConsommableInput = {
    nom: string
    marque: string
    quantiteDisponible: number
    seuilCritique: number
    obtention?: $Enums.Obtention
    fournisseur?: string | null
    donnateur?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: NotificationCreateNestedManyWithoutConsommableInput
  }

  export type ConsommableUncheckedCreateWithoutUtilisationsConsommableInput = {
    id?: number
    nom: string
    marque: string
    quantiteDisponible: number
    seuilCritique: number
    obtention?: $Enums.Obtention
    fournisseur?: string | null
    donnateur?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: NotificationUncheckedCreateNestedManyWithoutConsommableInput
  }

  export type ConsommableCreateOrConnectWithoutUtilisationsConsommableInput = {
    where: ConsommableWhereUniqueInput
    create: XOR<ConsommableCreateWithoutUtilisationsConsommableInput, ConsommableUncheckedCreateWithoutUtilisationsConsommableInput>
  }

  export type UtilisateurUpsertWithoutUtilisationsConsommableInput = {
    update: XOR<UtilisateurUpdateWithoutUtilisationsConsommableInput, UtilisateurUncheckedUpdateWithoutUtilisationsConsommableInput>
    create: XOR<UtilisateurCreateWithoutUtilisationsConsommableInput, UtilisateurUncheckedCreateWithoutUtilisationsConsommableInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutUtilisationsConsommableInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutUtilisationsConsommableInput, UtilisateurUncheckedUpdateWithoutUtilisationsConsommableInput>
  }

  export type UtilisateurUpdateWithoutUtilisationsConsommableInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motdepasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunts?: EmpruntUpdateManyWithoutUtilisateurNestedInput
    demandeEmprunt?: DemandeEmpruntUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutUtilisationsConsommableInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motdepasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunts?: EmpruntUncheckedUpdateManyWithoutUtilisateurNestedInput
    demandeEmprunt?: DemandeEmpruntUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type ConsommableUpsertWithoutUtilisationsConsommableInput = {
    update: XOR<ConsommableUpdateWithoutUtilisationsConsommableInput, ConsommableUncheckedUpdateWithoutUtilisationsConsommableInput>
    create: XOR<ConsommableCreateWithoutUtilisationsConsommableInput, ConsommableUncheckedCreateWithoutUtilisationsConsommableInput>
    where?: ConsommableWhereInput
  }

  export type ConsommableUpdateToOneWithWhereWithoutUtilisationsConsommableInput = {
    where?: ConsommableWhereInput
    data: XOR<ConsommableUpdateWithoutUtilisationsConsommableInput, ConsommableUncheckedUpdateWithoutUtilisationsConsommableInput>
  }

  export type ConsommableUpdateWithoutUtilisationsConsommableInput = {
    nom?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    quantiteDisponible?: IntFieldUpdateOperationsInput | number
    seuilCritique?: IntFieldUpdateOperationsInput | number
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donnateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUpdateManyWithoutConsommableNestedInput
  }

  export type ConsommableUncheckedUpdateWithoutUtilisationsConsommableInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    quantiteDisponible?: IntFieldUpdateOperationsInput | number
    seuilCritique?: IntFieldUpdateOperationsInput | number
    obtention?: EnumObtentionFieldUpdateOperationsInput | $Enums.Obtention
    fournisseur?: NullableStringFieldUpdateOperationsInput | string | null
    donnateur?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUncheckedUpdateManyWithoutConsommableNestedInput
  }

  export type EmpruntCreateManyUtilisateurInput = {
    id?: number
    equipementId: number
    dateEmprunt?: Date | string
    dateRetourPrevu: Date | string
    dateRetourEffective?: Date | string | null
    usage: string
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemandeEmpruntCreateManyUtilisateurInput = {
    id?: number
    equipementId: number
    dateDemande?: Date | string
    dateRetourPrevu: Date | string
    usage: string
    statut?: $Enums.StatutDemande
    type?: $Enums.TypeDemande
    motif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UtilisationConsommableCreateManyUtilisateurInput = {
    id?: number
    consommableId: number
    quantiteUtilise: number
    dateUtilisation?: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmpruntUpdateWithoutUtilisateurInput = {
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipement?: EquipementUpdateOneRequiredWithoutEmpruntNestedInput
    notification?: NotificationUpdateManyWithoutEmpruntNestedInput
  }

  export type EmpruntUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipementId?: IntFieldUpdateOperationsInput | number
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUncheckedUpdateManyWithoutEmpruntNestedInput
  }

  export type EmpruntUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipementId?: IntFieldUpdateOperationsInput | number
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeEmpruntUpdateWithoutUtilisateurInput = {
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    type?: EnumTypeDemandeFieldUpdateOperationsInput | $Enums.TypeDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipement?: EquipementUpdateOneRequiredWithoutDemandeEmpruntNestedInput
    notification?: NotificationUpdateManyWithoutDemandeEmpruntNestedInput
  }

  export type DemandeEmpruntUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipementId?: IntFieldUpdateOperationsInput | number
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    type?: EnumTypeDemandeFieldUpdateOperationsInput | $Enums.TypeDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUncheckedUpdateManyWithoutDemandeEmpruntNestedInput
  }

  export type DemandeEmpruntUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipementId?: IntFieldUpdateOperationsInput | number
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    type?: EnumTypeDemandeFieldUpdateOperationsInput | $Enums.TypeDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisationConsommableUpdateWithoutUtilisateurInput = {
    quantiteUtilise?: IntFieldUpdateOperationsInput | number
    dateUtilisation?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consommable?: ConsommableUpdateOneRequiredWithoutUtilisationsConsommableNestedInput
  }

  export type UtilisationConsommableUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    consommableId?: IntFieldUpdateOperationsInput | number
    quantiteUtilise?: IntFieldUpdateOperationsInput | number
    dateUtilisation?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisationConsommableUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    consommableId?: IntFieldUpdateOperationsInput | number
    quantiteUtilise?: IntFieldUpdateOperationsInput | number
    dateUtilisation?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyEmpruntInput = {
    id?: number
    demandeEmpruntId?: number | null
    consommableId?: number | null
    message: string
    DateEnvoi?: Date | string
    type?: $Enums.TypeNotification
    vu?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateWithoutEmpruntInput = {
    message?: StringFieldUpdateOperationsInput | string
    DateEnvoi?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    vu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeEmprunt?: DemandeEmpruntUpdateOneWithoutNotificationNestedInput
    consommable?: ConsommableUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutEmpruntInput = {
    id?: IntFieldUpdateOperationsInput | number
    demandeEmpruntId?: NullableIntFieldUpdateOperationsInput | number | null
    consommableId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    DateEnvoi?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    vu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutEmpruntInput = {
    id?: IntFieldUpdateOperationsInput | number
    demandeEmpruntId?: NullableIntFieldUpdateOperationsInput | number | null
    consommableId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    DateEnvoi?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    vu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyDemandeEmpruntInput = {
    id?: number
    empruntId?: number | null
    consommableId?: number | null
    message: string
    DateEnvoi?: Date | string
    type?: $Enums.TypeNotification
    vu?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateWithoutDemandeEmpruntInput = {
    message?: StringFieldUpdateOperationsInput | string
    DateEnvoi?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    vu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunt?: EmpruntUpdateOneWithoutNotificationNestedInput
    consommable?: ConsommableUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutDemandeEmpruntInput = {
    id?: IntFieldUpdateOperationsInput | number
    empruntId?: NullableIntFieldUpdateOperationsInput | number | null
    consommableId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    DateEnvoi?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    vu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutDemandeEmpruntInput = {
    id?: IntFieldUpdateOperationsInput | number
    empruntId?: NullableIntFieldUpdateOperationsInput | number | null
    consommableId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    DateEnvoi?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    vu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpruntCreateManyEquipementInput = {
    id?: number
    utilisateurId: number
    dateEmprunt?: Date | string
    dateRetourPrevu: Date | string
    dateRetourEffective?: Date | string | null
    usage: string
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemandeEmpruntCreateManyEquipementInput = {
    id?: number
    utilisateurId: number
    dateDemande?: Date | string
    dateRetourPrevu: Date | string
    usage: string
    statut?: $Enums.StatutDemande
    type?: $Enums.TypeDemande
    motif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmpruntUpdateWithoutEquipementInput = {
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutEmpruntsNestedInput
    notification?: NotificationUpdateManyWithoutEmpruntNestedInput
  }

  export type EmpruntUncheckedUpdateWithoutEquipementInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUncheckedUpdateManyWithoutEmpruntNestedInput
  }

  export type EmpruntUncheckedUpdateManyWithoutEquipementInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeEmpruntUpdateWithoutEquipementInput = {
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    type?: EnumTypeDemandeFieldUpdateOperationsInput | $Enums.TypeDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutDemandeEmpruntNestedInput
    notification?: NotificationUpdateManyWithoutDemandeEmpruntNestedInput
  }

  export type DemandeEmpruntUncheckedUpdateWithoutEquipementInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    type?: EnumTypeDemandeFieldUpdateOperationsInput | $Enums.TypeDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUncheckedUpdateManyWithoutDemandeEmpruntNestedInput
  }

  export type DemandeEmpruntUncheckedUpdateManyWithoutEquipementInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevu?: DateTimeFieldUpdateOperationsInput | Date | string
    usage?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    type?: EnumTypeDemandeFieldUpdateOperationsInput | $Enums.TypeDemande
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyConsommableInput = {
    id?: number
    empruntId?: number | null
    demandeEmpruntId?: number | null
    message: string
    DateEnvoi?: Date | string
    type?: $Enums.TypeNotification
    vu?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UtilisationConsommableCreateManyConsommableInput = {
    id?: number
    utilisateurId: number
    quantiteUtilise: number
    dateUtilisation?: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateWithoutConsommableInput = {
    message?: StringFieldUpdateOperationsInput | string
    DateEnvoi?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    vu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunt?: EmpruntUpdateOneWithoutNotificationNestedInput
    demandeEmprunt?: DemandeEmpruntUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutConsommableInput = {
    id?: IntFieldUpdateOperationsInput | number
    empruntId?: NullableIntFieldUpdateOperationsInput | number | null
    demandeEmpruntId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    DateEnvoi?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    vu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutConsommableInput = {
    id?: IntFieldUpdateOperationsInput | number
    empruntId?: NullableIntFieldUpdateOperationsInput | number | null
    demandeEmpruntId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    DateEnvoi?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    vu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisationConsommableUpdateWithoutConsommableInput = {
    quantiteUtilise?: IntFieldUpdateOperationsInput | number
    dateUtilisation?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutUtilisationsConsommableNestedInput
  }

  export type UtilisationConsommableUncheckedUpdateWithoutConsommableInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    quantiteUtilise?: IntFieldUpdateOperationsInput | number
    dateUtilisation?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisationConsommableUncheckedUpdateManyWithoutConsommableInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    quantiteUtilise?: IntFieldUpdateOperationsInput | number
    dateUtilisation?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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