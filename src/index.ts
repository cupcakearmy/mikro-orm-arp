import { MikroORM, IDatabaseDriver, Connection, EntityRepository } from '@mikro-orm/core'

export type ObjectType<T> = { new (): T } | Function

let orm: MikroORM<IDatabaseDriver<Connection>>

export abstract class BaseEntity {
  static getRepo<T extends BaseEntity>(this: ObjectType<T>) {
    if (!orm) throw new Error('Orm not initialized')
    return orm.em.getRepository<T>(this)
  }

  // Native Functions
  static count<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['count']>): ReturnType<EntityRepository<T>['count']> {
    return (this as any).getRepo().count(...args)
  }
  static create<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['create']>): ReturnType<EntityRepository<T>['create']> {
    return (this as any).getRepo().create(...args)
  }
  static find<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['find']>): ReturnType<EntityRepository<T>['find']> {
    return (this as any).getRepo().find(...args)
  }
  static findAll<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['findAll']>): ReturnType<EntityRepository<T>['findAll']> {
    return (this as any).getRepo().findAll(...args)
  }
  static findAndCount<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['findAndCount']>): ReturnType<EntityRepository<T>['findAndCount']> {
    return (this as any).getRepo().findAndCount(...args)
  }
  static findOne<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['findOne']>): ReturnType<EntityRepository<T>['findOne']> {
    return (this as any).getRepo().findOne(...args)
  }
  static findOneOrFail<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['findOneOrFail']>): ReturnType<EntityRepository<T>['findOneOrFail']> {
    return (this as any).getRepo().findOneOrFail(...args)
  }
  static flush<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['flush']>): ReturnType<EntityRepository<T>['flush']> {
    return (this as any).getRepo().flush(...args)
  }
  static getReference<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['getReference']>): ReturnType<EntityRepository<T>['getReference']> {
    return (this as any).getRepo().getReference(...args)
  }
  static map<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['map']>): ReturnType<EntityRepository<T>['findOneOrFail']> {
    return (this as any).getRepo().map(...args)
  }
  static nativeDelete<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['nativeDelete']>): ReturnType<EntityRepository<T>['nativeDelete']> {
    return (this as any).getRepo().nativeDelete(...args)
  }
  static nativeInsert<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['nativeInsert']>): ReturnType<EntityRepository<T>['nativeInsert']> {
    return (this as any).getRepo().nativeInsert(...args)
  }
  static nativeUpdate<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['nativeUpdate']>): ReturnType<EntityRepository<T>['nativeUpdate']> {
    return (this as any).getRepo().nativeUpdate(...args)
  }
  static persist<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['persist']>): ReturnType<EntityRepository<T>['persist']> {
    return (this as any).getRepo().persist(...args)
  }
  static persistAndFlush<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['persistAndFlush']>): ReturnType<EntityRepository<T>['persistAndFlush']> {
    return (this as any).getRepo().persist(...args)
  }
  static populate<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['populate']>): ReturnType<EntityRepository<T>['populate']> {
    return (this as any).getRepo().populate(...args)
  }
  static remove<T extends BaseEntity>(this: ObjectType<T>, ...args: Parameters<EntityRepository<T>['remove']>): ReturnType<EntityRepository<T>['remove']> {
    return (this as any).getRepo().remove(...args)
  }
}

export const register = <D extends IDatabaseDriver = IDatabaseDriver<Connection>>(db: MikroORM<D>) => (orm = db)
