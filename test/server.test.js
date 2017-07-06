import plugin from '../src/server'
import packagej from '../package.json';

test('Plugin exports register function', () => (
    expect(plugin.register).toBeInstanceOf(Function)
))

test('Plugin exposes attributes', () => (
    expect(plugin.register.attributes).toBeDefined()
))

test('Plugin exposes correct name', () => (
    expect(plugin.register.attributes).toBeDefined()
    && expect(plugin.register.attributes.name).toBe(packagej.name)
))