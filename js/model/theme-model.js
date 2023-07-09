export default class ThemeModel {
  constructor() {
    this.themes = [];
  }

  init(themes) {
    this.themes = themes;
  }

  getThemes() {
    return this.themes;
  }
}