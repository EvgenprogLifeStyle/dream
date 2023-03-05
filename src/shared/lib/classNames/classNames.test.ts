import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('some')).toBe('some');
    });
    test('with addition class', () => {
        expect(classNames('some', {}, ['some'])).toBe('some some');
    });
    test('with mods', () => {
        const expected = 'some some hovered';
        expect(classNames('some', { hovered: true }, ['some'])).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'some some';
        expect(classNames('some', { hovered: false }, ['some'])).toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'some some';
        expect(classNames('some', { hovered: undefined }, ['some'])).toBe(expected);
    });
});
