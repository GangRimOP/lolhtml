function onGameInit()
{
    document.title = "Lol in HTML";

    GAME_FPS = 30;
    debugSystem.debugMode = true;

    resourcePreLoader.AddImage("background.jpg");
    resourcePreLoader.AddImage("neeko.jpg");
    resourcePreLoader.AddImage("r.jpg");


    // 게임 초기 시작 상태 설정
    after_loading_state = new PlayState();
    setInterval( gameLoop, 1000 / GAME_FPS );
}



window.addEventListener("load", onGameInit, false);
