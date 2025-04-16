const WispTools = {
  help: function () {
    /*
    How to use:

WispTools.say(string) - creates a popup window
WispTools.popup(string) - creates a popup window with text input
WispTools.confirm(string) - creates a popup window with True or False chose

WispTools.Input - Sub category for Key Inputs (Does not do anything)
WispTools.Input.getAxisHeld(positive key, negative key) - if positive key held down returns 1, if negative key held down returns -1, if no or both keys are held down returns 0
    */
    console.log("---WispTools Help Menu---")
    console.log("WispTools.say(string) - creates a popup window")
    console.log(
      "WispTools.popup(string) - creates a popup window with text input",
    )
    console.log(
      "WispTools.confirm(string) - creates a popup window with True or False chose",
    )
    console.log(
      "WispTools.Input - Sub category for Key Inputs (Does not do anything)",
    )
    console.log(
      "WWispTools.Input.getAxisHeld(positive key, negative key) - if positive key held down returns 1, if negative key held down returns -1, if no or both keys are held down returns 0",
    )
  },

  say: function (text: any) {
    alert(text.toString())
  },
  popup: function (text: any) {
    return prompt(text.toString())
  },
  confirm: function (text: any) {
    return confirm(text.toString())
  },
  toNumber: function (value: any) {
    return value * 1
  },
  toString: function (value: any) {
    return value + ""
  },
  Input: {
    getAxisHeld(positive: Key, negative: Key) {
      return (
        WispTools.toNumber(Keyboard.keyHeld(positive)) -
        WispTools.toNumber(Keyboard.keyHeld(negative))
      )
    },
  },
  Vector2: {
    create(x: number, y: number) {
      return { x: x, y: y }
    },
    spriteGoTo(vec2: any) {
      sprite.x = vec2.x
      sprite.y = vec2.y
    },
  },
}

let x = WispTools.Vector2.create(0, 0)
WispTools.say(x)
