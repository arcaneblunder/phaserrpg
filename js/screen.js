var TitleScene = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function TitleScene() {
    Phaser.Scene.call(this, { key: "TitleScene" });
  },
  preload: function () {
    this.load.audio("theme", ["assets/old-city-theme-remaxim-opengameart.ogg"]);
    this.load.image("background_splash", "assets/ansimuz-opengameart.png");
    this.load.image(
      "button",
      "assets/buttonStock1-stumpy-strust-opengameart.png"
    );
  },
  create: function () {
    theme = this.sound.add("theme", { loop: true });
    // Set Background
    var background = this.add.image(150, 120, "background_splash");
    // Set TExt
    let title_text = this.add.text(100, 75, "Phaser RPG");

    var image = this.add.image(150, 175, "button").setInteractive();
    theme.play();

    // https://www.html5gamedevs.com/topic/37617-trouble-changing-scenes-in-phaser-3/ answer by samme
    image.on(
      "pointerdown",
      function (pointer) {
        this.scene.start("BootScene");
        theme.stop();
      },
      this
    );
  }
});
