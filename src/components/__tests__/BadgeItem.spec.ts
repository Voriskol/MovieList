// @vitest-environment jsdom

// import { mount } from '@vue/test-utils'
// import { describe, expect, test } from 'vitest'
// import BadgeItem from '../BadgeItem.vue'

// describe('BadgeItem.vue', () => {
//   test('renders the correct style for genre', () => {
//     const id = 'genre'
//     const wrapper = mount(BadgeItem, {
//       props: { id },
//     })
//     expect(wrapper.classes()).toEqual(expect.arrayContaining(['genre']))
//   })
//   test('renders the correct style for duration', () => {
//     const id = 'duration'
//     const wrapper = mount(BadgeItem, {
//       props: { id },
//     })
//     expect(wrapper.classes()).toEqual(expect.arrayContaining(['duration']))
//   })
//   test('renders the correct style for bad rating', () => {
//     const id = 'rating'
//     const text = 3
//     const wrapper = mount(BadgeItem, {
//       props: { id, text },
//     })
//     expect(wrapper.classes()).toEqual(expect.arrayContaining(['bad-rating']))
//   })
//   test('renders the correct style for bad rating', () => {
//     const id = 'rating'
//     const text = 6
//     const wrapper = mount(BadgeItem, {
//       props: { id, text },
//     })
//     expect(wrapper.classes()).toEqual(expect.arrayContaining(['normal-rating']))
//   })
//   test('renders the correct style for bad rating', () => {
//     const id = 'rating'
//     const text = 8
//     const wrapper = mount(BadgeItem, {
//       props: { id, text },
//     })
//     expect(wrapper.classes()).toEqual(expect.arrayContaining(['good-rating']))
//   })
// })
