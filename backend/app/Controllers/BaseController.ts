import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default abstract class BaseController {
  protected async handle(ctx: HttpContextContract): Promise<any> {
    throw new Error('Method not implemented')
  }

  protected success(data: any = null, message: string = 'Success') {
    return {
      status: 'success',
      message,
      data,
    }
  }

  protected error(message: string = 'Error', code: number = 400) {
    return {
      status: 'error',
      message,
      code,
    }
  }

  protected paginate(data: any[], meta: any) {
    return {
      status: 'success',
      data,
      meta,
    }
  }
} 