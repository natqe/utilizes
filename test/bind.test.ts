import { bind } from '../src/bind'

class TestingBind {

  constructor() {
    bind(this)
  }

  getThis() {
    return this
  }

}

const { getThis } = new TestingBind()

test(`"this" should be referer to the class instace`, () => expect(getThis()).toBeInstanceOf(TestingBind))