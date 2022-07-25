// style.c.js

ImGui.StyleColorsDark = function()
{
    let colors = ImGui.GetStyle().Colors;

    ImGui.GetStyle().WindowTitleAlign.x = 0.5;

    colors[ImGui.Col.Text] = new ImGui.Vec4(0.95, 0.96, 0.98, 1.00);
    colors[ImGui.Col.TextDisabled] = new ImGui.Vec4(0.36, 0.42, 0.47, 1.00);
    colors[ImGui.Col.WindowBg] = new ImGui.Vec4(0.11, 0.15, 0.17, 1.00);
    colors[ImGui.Col.ChildBg] = new ImGui.Vec4(0.15, 0.18, 0.22, 1.00);
    colors[ImGui.Col.PopupBg] = new ImGui.Vec4(0.08, 0.08, 0.08, 0.94);
    colors[ImGui.Col.Border] = new ImGui.Vec4(0.08, 0.10, 0.12, 1.00);
    colors[ImGui.Col.BorderShadow] = new ImGui.Vec4(0.00, 0.00, 0.00, 0.00);
    colors[ImGui.Col.FrameBg] = new ImGui.Vec4(0.20, 0.25, 0.29, 1.00);
    colors[ImGui.Col.FrameBgHovered] = new ImGui.Vec4(0.12, 0.20, 0.28, 1.00);
    colors[ImGui.Col.FrameBgActive] = new ImGui.Vec4(0.09, 0.12, 0.14, 1.00);
    colors[ImGui.Col.TitleBg] = new ImGui.Vec4(0.09, 0.12, 0.14, 0.65);
    colors[ImGui.Col.TitleBgActive] = new ImGui.Vec4(0.08, 0.10, 0.12, 1.00);
    colors[ImGui.Col.TitleBgCollapsed] = new ImGui.Vec4(0.00, 0.00, 0.00, 0.51);
    colors[ImGui.Col.MenuBarBg] = new ImGui.Vec4(0.15, 0.18, 0.22, 1.00);
    colors[ImGui.Col.ScrollbarBg] = new ImGui.Vec4(0.02, 0.02, 0.02, 0.39);
    colors[ImGui.Col.ScrollbarGrab] = new ImGui.Vec4(0.20, 0.25, 0.29, 1.00);
    colors[ImGui.Col.ScrollbarGrabHovered] = new ImGui.Vec4(0.18, 0.22, 0.25, 1.00);
    colors[ImGui.Col.ScrollbarGrabActive] = new ImGui.Vec4(0.09, 0.21, 0.31, 1.00);
    colors[ImGui.Col.CheckMark] = new ImGui.Vec4(0.28, 0.56, 1.00, 1.00);
    colors[ImGui.Col.SliderGrab] = new ImGui.Vec4(0.28, 0.56, 1.00, 1.00);
    colors[ImGui.Col.SliderGrabActive] = new ImGui.Vec4(0.37, 0.61, 1.00, 1.00);
    colors[ImGui.Col.Button] = new ImGui.Vec4(0.20, 0.25, 0.29, 1.00);
    colors[ImGui.Col.ButtonHovered] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
    colors[ImGui.Col.ButtonActive] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
    colors[ImGui.Col.Header] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
    colors[ImGui.Col.HeaderHovered] = new ImGui.Vec4(0.26, 0.59, 0.98, 0.80);
    colors[ImGui.Col.HeaderActive] = new ImGui.Vec4(0.26, 0.59, 0.98, 1.00);
    colors[ImGui.Col.Separator] = new ImGui.Vec4(0.20, 0.25, 0.29, 1.00);
    colors[ImGui.Col.SeparatorHovered] = new ImGui.Vec4(0.10, 0.40, 0.75, 0.78);
    colors[ImGui.Col.SeparatorActive] = new ImGui.Vec4(0.10, 0.40, 0.75, 1.00);
    colors[ImGui.Col.ResizeGrip] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
    colors[ImGui.Col.ResizeGripHovered] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
    colors[ImGui.Col.ResizeGripActive] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
    colors[ImGui.Col.Tab] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
    colors[ImGui.Col.TabHovered] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
    colors[ImGui.Col.TabActive] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
    colors[ImGui.Col.TabUnfocused] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
    colors[ImGui.Col.TabUnfocusedActive] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
    colors[ImGui.Col.PlotLines] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
    colors[ImGui.Col.PlotLinesHovered] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
    colors[ImGui.Col.PlotHistogram] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
    colors[ImGui.Col.PlotHistogramHovered] = new ImGui.Vec4(1.00, 00.3, 0.3, 0.3);
    colors[ImGui.Col.TextSelectedBg] = new ImGui.Vec4(0.3, 0.3, 0.3, 0.3);
    colors[ImGui.Col.DragDropTarget] = new ImGui.Vec4(0.3, 0.3, 0.3, 0.3);
    colors[ImGui.Col.NavHighlight] = new ImGui.Vec4(0.3, 0.3, 0.3, 0.3);
    colors[ImGui.Col.NavWindowingHighlight] = new ImGui.Vec4(0.3, 0.3, 0.3, 0.3);
    colors[ImGui.Col.NavWindowingDimBg] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.20);
    colors[ImGui.Col.ModalWindowDimBg] = new ImGui.Vec4(0.30, 0.30, 0.30, 0.30);
}

// utils.h.js

class Utils
{
    getRootElement      = null; // args: void
    getRootObject       = null; // args: void
    getRenderElement    = null; // args: void
    getRandomArbitrary  = null; // args: void

    isNotOpenChat       = null; // args: void
    isNotKillZone       = null; // args: 1 - world, 2 - position {x, y, z}
    isGameReady         = null; // args: void
    isPlayerEnemy       = null; // args: 1 - localPlayer, 2 - player

    getPlayers          = null; // args: 1 - world, 2 - localPlayer, 3 - isOnlyEnemy (= false)
    getPlayerById       = null; // args: 1 - world, 2 - localPlayer, 3 - playerId
    getPlayerName       = null; // args: 1 - player

    getBodyById         = null; // args: 1 - world, 2 - localPlayer, 3 - playerId
    getPlayerBody       = null; // args: 1 - player

    saveStates          = null; // args: void
    getStates           = null; // args: void
}

utilsObjects =
{
    rootElement: null,
    rootObject: null
}

class ImGui_Var
{
    constructor(value)
    {
        this.value = value;
        this.access = (value = this.value) => this.value = value;
    };
}

// utils.c.js

Utils.getRootElement = function ()
{
    if (utilsObjects.rootElement)
    {
        return utilsObjects.rootElement;
    }

    if (!document.getElementById("root"))
    {
        return null;
    }

    return utilsObjects.rootElement = document.getElementById("root")._reactRootContainer;
}

Utils.getRootObject = function ()
{
    if (utilsObjects.rootObject)
    {
        utilsObjects.rootObject.store.state.shop.enabled = true;

        return utilsObjects.rootObject;
    }

    let rootElement = Utils.getRootElement();

    if (!rootElement)
    {
        return null;
    }

    if (!rootElement.hasOwnProperty("_internalRoot"))
    {
        return null;
    }

    return utilsObjects.rootObject = rootElement._internalRoot.current.memoizedState.
        element.type.prototype;
}

Utils.getRenderElement = function ()
{
    return document.getElementsByClassName("sc-bwzfXH hjlOfi").item(0);
}

Utils.getRandomArbitrary = function (min, max)
{
    return Math.random() * (max - min) + min;
}

Utils.isNotOpenChat = function ()
{
    return (document.getElementsByClassName("sc-bwzfXH iokmvL").item(0) == null);
}

Utils.isNotKillZone = function (world, position)
{
    if (!world)
        return false;

    let bounds = world.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds;

    if (!bounds)
        return false;

    if (position.x != 0 && (position.x >= bounds.maxX || position.x <= bounds.minX))
        return false;

    if (position.y != 0 && (position.y >= bounds.maxY || position.y <= bounds.minY))
        return false;

    return true;
}

Utils.isGameReady = function ()
{
    let rootObject = Utils.getRootObject();

    if (!rootObject)
    {
        return false;
    }

    if (!rootObject.store.state.battleStatistics.battleLoaded)
    {
        return false;
    }

    let localPlayer = GameObjects.getLocalPlayer();

    if (!localPlayer)
    {
        return false;
    }

    if (localPlayer.length == 0)
    {
        return false;
    }

    return true;
}

Utils.isPlayerEnemy = function(localPlayer, player)
{
    if (!player || !localPlayer)
    {
        return null;
    }

    if (!player.at(0))
    {
        return null;
    }

    let team = player.at(0).team;

    if (!team)
    {
        return null;
    }

    let name$ = team.name$;

    if (!name$)
    {
        return null;
    }

    if (localPlayer.at(0).team.name$ != "NONE" && localPlayer.at(0).team.name$ == name$)
    {
        return false;
    }

    return true;
}

Utils.getPlayers = function(world, localPlayer, isOnlyEnemy = false)
{
    if (!world || !localPlayer)
    {
        return null;
    }

    let bodies = world.physicsScene_0.bodies_0.toArray();

    if (!bodies)
    {
        return null;
    }

    let playersArray = [];

    for (let i = 0; i < bodies.length; i++)
    {
        if (!bodies.at(i))
        {
            continue;
        }

        let data = bodies.at(i).data;

        if (!data)
        {
            continue;
        }

        let components_0 = data.components_0;

        if (!components_0)
        {
            continue;
        }

        components_0 = components_0.array;

        if (!components_0)
        {
            continue;
        }

        if (components_0.length == 0)
        {
            continue;
        }

        if (isOnlyEnemy)
        {
            if (Utils.isPlayerEnemy(localPlayer, components_0) == false)
            {
                continue;
            }
        }

        if (localPlayer != components_0)
        {
            playersArray.push(components_0);
        }
    }

    return playersArray;
}

Utils.getPlayerById = function(world, localPlayer, playerId)
{
    if (!world || !localPlayer || !playerId)
    {
        return null;
    }

    let playersArray = Utils.getPlayers(world, localPlayer);

    if (!playersArray)
    {
        return null;
    }

    if (playersArray.length == 0)
    {
        return null;
    }

    for (let i = 0; i < playersArray.length; i++)
    {
        for (let n = 0; n < playersArray.at(i).length; n++)
        {
            if (playersArray.at(i).at(n).__proto__.hasOwnProperty("userId"))
            {
                if (playerId == playersArray.at(i).at(n).userId)
                {
                    return playersArray.at(i);
                }
            }
        }
    }

    return null;
}

Utils.getPlayerName = function(player)
{
    if (!player)
    {
        return null;
    }

    if (player.length == 0)
    {
        return null;
    }

    let configuration_0;

    for (let i = 0; i < player.length; i++)
    {
        if (player.at(i).hasOwnProperty("configuration_0"))
        {
            configuration_0 = player.at(i).configuration_0;
            break;
        }
    }

    if (!configuration_0)
    {
        return null;
    }

    if (!configuration_0.userName)
    {
        return null;
    }

    return configuration_0.userName;
}

Utils.getBodyById = function(world, localPlayer, playerId)
{
    if (!world || !localPlayer || !playerId)
    {
        return null;
    }

    let player = Utils.getPlayerById(world, localPlayer, playerId);

    if (!player)
    {
        return null;
    }

    for (let i = 0; i < player.length; i++)
    {
        if (player.at(i).__proto__.hasOwnProperty("tankBody_0"))
        {
            tankBody_0 = player.at(i).tankBody_0;

            if (!tankBody_0)
            {
                return null;
            }

            return tankBody_0;
        }
    }

    return null;
}

Utils.getPlayerBody = function(player)
{
    if (!player)
    {
        return null;
    }

    for (let i = 0; i < player.length; i++)
    {
        if (player.at(i).__proto__.hasOwnProperty("tankBody_0"))
        {
            tankBody_0 = player.at(i).tankBody_0;

            if (!tankBody_0)
            {
                return null;
            }

            return tankBody_0;
        }
    }

    return null;
}

clearCookies = function ()
{
    Cookies.remove("Afterburner");
}

Utils.saveStates = function ()
{
    Cookies.set("Afterburner", JSON.stringify({
        airBreak,
        boxTeleport,
        clickerData,
        flagTeleportData,
        noKnockbackMply,
        otherData,
        removeMines,
        stickData,
        strikerData,
        syncData,
        espData,
        colorEnemyRGB,
        colorTeamRGB,
        colorTargetRGB
    }));
}

Utils.getStates = function ()
{
    let obj = Cookies.get("shizoval");

    if (!obj)
    {
        Utils.saveStates();
        return;
    }

    obj = JSON.parse(obj);

    // AirBreak
    airBreak.enabled.value = obj.airBreak.enabled.value;
    airBreak.airWalk.value = obj.airBreak.airWalk.value;
    airBreak.speed.value = obj.airBreak.speed.value;

    // Box Teleport
    boxTeleport.value = obj.boxTeleport.value;

    // Clicker
    clickerData.autoSupplies.value = obj.clickerData.autoSupplies.value;
    clickerData.autoMining.value = obj.clickerData.autoMining.value;
    clickerData.autoHealingData.state.value = obj.clickerData.autoHealingData.state.value;

    // Flag Teleport
    flagTeleportData.state.value = obj.flagTeleportData.state.value;

    // No Knockback
    noKnockbackMply.value = obj.noKnockbackMply.value;

    // Other
    otherData.speedHack.value = obj.otherData.speedHack.value;
    otherData.noCollision.value = obj.otherData.noCollision.value;
    otherData.gravity.value = obj.otherData.gravity.value;
    otherData.rapidUpdateData.state.value = obj.otherData.rapidUpdateData.state.value;
    otherData.rapidUpdateData.mply.value = obj.otherData.rapidUpdateData.mply.value;

    // Remove Mines
    removeMines.value = obj.removeMines.value;

    // Striker
    strikerData.aimBot.value = obj.strikerData.aimBot.value;
    strikerData.shellsTeleport.value = obj.strikerData.shellsTeleport.value;
    strikerData.noLaser.value = obj.strikerData.noLaser.value;
    strikerData.getTargetWithScope.value = obj.strikerData.getTargetWithScope.value;

    // Sync
    syncData.state.value = obj.syncData.state.value;
    syncData.antiMine.value = obj.syncData.antiMine.value;
    syncData.antiMineHeight.value = obj.syncData.antiMineHeight.value;
    syncData.randomTeleport.value = obj.syncData.randomTeleport.value;
    syncData.spinner.value = obj.syncData.spinner.value;
    syncData.antiStrikerHackData.state.value = obj.syncData.antiStrikerHackData.state.value;
    syncData.fakeLagData.state.value = obj.syncData.fakeLagData.state.value;
    syncData.fakeLagData.distance.value = obj.syncData.fakeLagData.distance.value;
    syncData.deSyncData.state.value = obj.syncData.deSyncData.state.value;
    syncData.deSyncData.teleportToRealPosition.value = obj.syncData.deSyncData.teleportToRealPosition.value;

    // WallHack
    espData.enabled.value = obj.espData.enabled.value;
    espData.onlyEnemy.value = obj.espData.onlyEnemy.value;
    espData.boxGlow.value = obj.espData.boxGlow.value;
    espData.colorEnemy = obj.espData.colorEnemy;
    espData.colorTarget = obj.espData.colorTarget;
    espData.colorTeam = obj.espData.colorTeam;
    colorEnemyRGB.value = obj.colorEnemyRGB.value;
    colorTeamRGB.value = obj.colorTeamRGB.value;
    colorTargetRGB.value = obj.colorTargetRGB.value;
}

// gameObjects.h.js

class GameObjects
{
    // World
    getWorld                = null; // args: void
    getGameActions          = null; // args: void
    getMines                = null; // args: void
    getFlags                = null; // args: void

    // Tank
    getLocalPlayer          = null; // args: void
    getPhysicsComponent     = null; // args: void
    getHealthComponent      = null; // args: void
    getCamera               = null; // args: void
    getTrackedChassis       = null; // args: void
    getSpeedCharacteristics = null; // args: void
    getServerUpdates        = null; // args: void

    // Weapon
    getStrikerComponent     = null; // args: void
}

// gameObjects.c.js

gameObjects =
{
    localPlayer: null,
    world: null,
    gameActions: null,
    mines: null,
    flags: null,
    physicsComponent: null,
    healthComponent: null,
    camera: null,
    trackedChassis: null,
    speedCharacteristics: null,
    serverUpdates: null,
    strikerComponent: null
}

GameObjects.getWorld = function ()
{
    if (gameObjects.world)
    {
        return gameObjects.world;
    }

    let rootObject = Utils.getRootObject();

    if (!rootObject)
    {
        return null;
    }

    let subs = rootObject.store.subscribers.toArray();

    if (!subs)
    {
        return null;
    }

    let world = subs.find(element => element["tank"] != null && element["tank"].hasOwnProperty("world"));

    if (!world)
    {
        return null;
    }

    return gameObjects.world = world.tank.world;
}

GameObjects.getGameActions = function ()
{
    if (gameObjects.gameActions)
    {
        return gameObjects.gameActions;
    }

    let world = this.getWorld();

    if (!world)
    {
        return null;
    }

    return gameObjects.gameActions = Array.from(world.inputManager.input.gameActions_0.map);
}

GameObjects.getMines = function ()
{
    if (gameObjects.mines)
    {
        return gameObjects.mines;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;
    }

    let gameMode_0 = localPlayer.at(0).gameMode_0.components_0.array;

    if (!gameMode_0)
    {
        return null;
    }

    return gameObjects.mines = gameMode_0.at(15);
}

GameObjects.getFlags = function ()
{
    if (gameObjects.flags)
    {
        return gameObjects.flags;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;
    }

    let gameMode_0 = localPlayer.at(0).gameMode_0.components_0.array;

    if (!gameMode_0)
    {
        return null;
    }

    for (let i = 0; i < gameMode_0.length; i++)
    {
        if (gameMode_0.at(i).hasOwnProperty("flags_0"))
        {
            if (gameMode_0.at(i).flags_0.internalMap_uxhen5$_0)
            {
                return gameObjects.flags = gameMode_0.at(i).flags_0.internalMap_uxhen5$_0.backingMap_0;
            }
        }
    }

    return null;
}

GameObjects.getLocalPlayer = function ()
{
    if (gameObjects.localPlayer)
    {
        return gameObjects.localPlayer;
    }

    let world = this.getWorld();

    if (!world)
    {
        return null;
    }

    let bodies = world.physicsScene_0.bodies_0.toArray();

    for (let i = 0; i < bodies.length; i++)
    {
        if (bodies.at(i).data.isPossessed == true)
        {
            return gameObjects.localPlayer = bodies.at(i).data.components_0.array;
        }
    }

    return null;
}

GameObjects.getPhysicsComponent = function ()
{
    if (gameObjects.physicsComponent)
    {
        return gameObjects.physicsComponent;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;
    }

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).__proto__.hasOwnProperty("tankPhysicsComponent_0"))
        {
            return gameObjects.physicsComponent = localPlayer.at(i).tankPhysicsComponent_0;
        }
    }

    return null;
}

GameObjects.getHealthComponent = function ()
{
    if (gameObjects.healthComponent)
    {
        return gameObjects.healthComponent;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;
    }

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).__proto__.hasOwnProperty("health"))
        {
            return gameObjects.healthComponent = localPlayer.at(i);
        }
    }

    return null;
}

GameObjects.getCamera = function ()
{
    if (gameObjects.camera)
    {
        return gameObjects.camera;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;
    }

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).__proto__.hasOwnProperty("followCamera_0"))
        {
            return gameObjects.camera = localPlayer.at(i).followCamera_0.currState_0;
        }
    }

    return null;
}

GameObjects.getTrackedChassis = function ()
{
    if (gameObjects.trackedChassis)
    {
        return gameObjects.trackedChassis;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;
    }

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).__proto__.hasOwnProperty("trackedChassis_0"))
        {
            return gameObjects.trackedChassis = localPlayer.at(i).trackedChassis_0.params_0;
        }
    }

    return null;
}

GameObjects.getSpeedCharacteristics = function ()
{
    if (gameObjects.speedCharacteristics)
    {
        return gameObjects.speedCharacteristics;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;
    }

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).__proto__.hasOwnProperty("speedCharacteristics_0") &&
        localPlayer.at(i).__proto__.hasOwnProperty("maxSpeedSmoother_0"))
        {
            return gameObjects.speedCharacteristics = localPlayer.at(i);
        }
    }

    return null;
}

GameObjects.getServerUpdates = function ()
{
    if (gameObjects.serverUpdates)
    {
        return gameObjects.serverUpdates;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;
    }

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).hasOwnProperty("needImmediateUpdate_0"))
        {
            return gameObjects.serverUpdates = localPlayer.at(i);
        }
    }

    return null;
}

GameObjects.getStrikerComponent = function ()
{
    if (gameObjects.strikerComponent)
    {
        return gameObjects.strikerComponent;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;
    }

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).__proto__.hasOwnProperty("strikerWeapon_0"))
        {
            strikerData.type = "striker";
            return gameObjects.strikerComponent = localPlayer.at(i).strikerWeapon_0;
        }
        else if (localPlayer.at(i).hasOwnProperty("scorpioData_7x2wz0$_0"))
        {
            strikerData.type = "scorpion";
            return gameObjects.strikerComponent = localPlayer.at(i);
        }
    }

    return null;

}


GameObjects.getHealthComponent = function ()
{
    if (gameObjects.healthComponent)
    {
        return gameObjects.healthComponent;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;
    }

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).__proto__.hasOwnProperty("health"))
        {
            return gameObjects.healthComponent = localPlayer.at(i);
        }
    }

    return null;
}

class FlyHack

{

    process = null; // args: 1 - localPlayer

}



const flyHack =

{

    isKeyPressed: false,

    state: new ImGui_Var(false),

    speed: new ImGui_Var(50),

    position: { x: 0, y: 0, z: 0 }

}



document.addEventListener('keyup', (e) =>

{

    if (e.keyCode == 103 && Utils.isGameReady() && Utils.isNotOpenChat())

    {

        flyHack.isKeyPressed = true;

    }

})



FlyHack.process = function (localPlayer)

{

    if (!localPlayer)

    {

        return;

    }



    let world = GameObjects.getWorld();



    if (!world)

    {

        return;

    }



    let physicsComponent = GameObjects.getPhysicsComponent();



    if (!physicsComponent)

    {

        return;

    }



    if (flyHack.isKeyPressed)

    {

        flyHack.isKeyPressed = false;



        flyHack.state.value = !flyHack.state.value;



        if (flyHack.state.value)

        {

            flyHack.position.x = physicsComponent.body.state.position.x;

            flyHack.position.y = physicsComponent.body.state.position.y;

            flyHack.position.z = physicsComponent.body.state.position.z;

        }

        else

        {


            physicsComponent.body.movable = true;

            physicsComponent.body.state.velocity.x = 0;

            physicsComponent.body.state.velocity.y = 0;

            physicsComponent.body.state.velocity.z = 0;



            physicsComponent.body.state.angularVelocity.x = 0;

            physicsComponent.body.state.angularVelocity.y = 0;

            physicsComponent.body.state.angularVelocity.z = 0;

        }

    }



    if (!flyHack.state.value)

    {

        return;

    }



    if (KeyPressing.isKeyPressed(38 /*key: Up*/) && Utils.isNotOpenChat())

    {

        let position =

        {

            x: 0,

            y: flyHack.position.y + flyHack.speed.value,

            z: 0

        };



        if (Utils.isNotKillZone(world, position))

        {

            flyHack.position.y = position.y;

        }

    }



    if (KeyPressing.isKeyPressed(40 /*key: Down*/) && Utils.isNotOpenChat())

    {

        let position =

        {

            x: 0,

            y: flyHack.position.y - flyHack.speed.value,

            z: 0

        };



        if (Utils.isNotKillZone(world, position))

        {

            flyHack.position.y = position.y;

        }

    }



    if (KeyPressing.isKeyPressed(37 /*key: Left*/) && Utils.isNotOpenChat())

    {

        let position =

        {

            x: flyHack.position.x - flyHack.speed.value,

            y: 0,

            z: 0

        };



        if (Utils.isNotKillZone(world, position))

        {

            flyHack.position.x = position.x;

        }

    }



    if (KeyPressing.isKeyPressed(39 /*key: Right*/) && Utils.isNotOpenChat())

    {

        let position =

        {

            x: flyHack.position.x + flyHack.speed.value,

            y: 0,

            z: 0

        };



        if (Utils.isNotKillZone(world, position))

        {

            flyHack.position.x = position.x;

        }

    }



    if (KeyPressing.isKeyPressed(81 /*key: Q*/) && Utils.isNotOpenChat())

    {

        flyHack.position.z += flyHack.speed.value;

    }



    if (KeyPressing.isKeyPressed(69 /*key: E*/) && Utils.isNotOpenChat())

    {

        flyHack.position.z -= flyHack.speed.value;

    }



    if (KeyPressing.isKeyPressed(101 /*key: F*/) && Utils.isNotOpenChat())

    {

        if (flyHack.speed.value > 1)

            flyHack.speed.value -= 2;

    }



    if (KeyPressing.isKeyPressed(102 /*key: V*/) && Utils.isNotOpenChat())

    {

        flyHack.speed.value += 2;

    }



    if(flyHack.speed.value >= 300){

    flyHack.speed.value = 300

    }



    physicsComponent.body.movable = false;

    physicsComponent.body.state.position.x = flyHack.position.x;

    physicsComponent.body.state.position.y = flyHack.position.y;

    physicsComponent.body.state.position.z = flyHack.position.z;



    physicsComponent.body.state.orientation.w = 0;

    physicsComponent.body.state.orientation.z = 0;

    physicsComponent.body.state.orientation.x = 0;

    physicsComponent.body.state.orientation.y = 0;



    physicsComponent.body.state.angularVelocity.x = 0;

    physicsComponent.body.state.angularVelocity.y = 0;

    physicsComponent.body.state.angularVelocity.z = 0;

}


// airBreak.h.js

class AirBreak
{
    process = null; // args: 1 - localPlayer
}

// airBreak.c.js

airBreak =
{
    enabled: new ImGui_Var(true),
    isShiftPressed: false,
    state: false,
    airWalk: new ImGui_Var(false),
    speed: new ImGui_Var(70),
    position: { x: 0, y: 0, z: 0 }
}

let startSpeed =
{
    forward: 0,
    right: 0,
    up: 0
};

document.addEventListener('keyup', (e) =>
{
    if (e.keyCode == 16 && e.location == 2 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        airBreak.isShiftPressed = true;
    }
})

document.addEventListener('keyup', (e) =>
{
    if (e.keyCode == 104 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        airBreak.airWalk.value = !airBreak.airWalk.value;
    }
})

AirBreak.process = function (localPlayer)
{
    if (!airBreak.enabled.value)
    {
        return;
    }

    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let physicsComponent = GameObjects.getPhysicsComponent();

    if (!physicsComponent)
    {
        return;
    }

    let trackedChassis = GameObjects.getTrackedChassis();

    let camera = GameObjects.getCamera();

    if (!camera)
    {
        return;
    }

    let bodies = world.physicsScene_0.bodies_0.array_hd7ov6$_0;

    if (!bodies)
    {
        return;
    }

    if (!airBreak.state.value && trackedChassis)
    {
        trackedChassis.maxRayLength = 50;
        trackedChassis.dampingCoeff = 2000;
        trackedChassis.springCoeff = 16000;
    }

    if (airBreak.isShiftPressed)
    {
        airBreak.isShiftPressed = false;

        airBreak.state = !airBreak.state;

        startSpeed =
        {
            forward: 0,
            right: 0,
            up: 0
        };

        if (airBreak.state)
        {
            airBreak.position.x = physicsComponent.body.state.position.x;
            airBreak.position.y = physicsComponent.body.state.position.y;
            airBreak.position.z = physicsComponent.body.state.position.z;
        }
        else
        {
            physicsComponent.body.movable = true;
            physicsComponent.body.state.velocity.x = 0;
            physicsComponent.body.state.velocity.y = 0;
            physicsComponent.body.state.velocity.z = 0;

            physicsComponent.body.state.angularVelocity.x = 0;
            physicsComponent.body.state.angularVelocity.y = 0;
            physicsComponent.body.state.angularVelocity.z = 0;

            for (let i = 0; i < bodies.length; i++)
            {
                bodies.at(i).state.velocity.x = 0;
                bodies.at(i).state.velocity.y = 0;
                bodies.at(i).state.velocity.z = 0;

                bodies.at(i).state.angularVelocity.x = 0;
                bodies.at(i).state.angularVelocity.y = 0;
                bodies.at(i).state.angularVelocity.z = 0;

                bodies.at(i).movable = true;
            }
        }
    }

    if (!airBreak.state)
    {
        return;
    }

    let dt = world.physicsScene_0.dt * 2;
    let direction = camera.direction;

    if (!airBreak.airWalk.value)
    {
        if (KeyPressing.isKeyPressed(87 /*key: W*/) && Utils.isNotOpenChat())
        {
            startSpeed.forward += (airBreak.speed.value - startSpeed.forward) * dt;

            let position =
            {
                x: airBreak.position.x + startSpeed.forward * Math.sin(-direction),
                y: airBreak.position.y + startSpeed.forward * Math.cos(-direction),
                z: 0
            };

            if (Utils.isNotKillZone(world, position))
            {
                airBreak.position.x = position.x;
                airBreak.position.y = position.y;
            }
        }
        else
        {
            if (startSpeed.forward > 0)
            {
                startSpeed.forward += (0 - startSpeed.forward) * (dt * 1.3);

                let position =
                {
                    x: airBreak.position.x + startSpeed.forward * Math.sin(-direction),
                    y: airBreak.position.y + startSpeed.forward * Math.cos(-direction),
                    z: 0
                };

                if (Utils.isNotKillZone(world, position))
                {
                    airBreak.position.x = position.x;
                    airBreak.position.y = position.y;
                }
            }
        }


        if (KeyPressing.isKeyPressed(83 /*key: S*/) && Utils.isNotOpenChat())
        {
            startSpeed.forward -= (airBreak.speed.value - (-startSpeed.forward)) * dt;

            let position =
            {
                x: airBreak.position.x + startSpeed.forward * Math.sin(-direction),
                y: airBreak.position.y + startSpeed.forward * Math.cos(-direction),
                z: 0
            };

            if (Utils.isNotKillZone(world, position))
            {
                airBreak.position.x = position.x;
                airBreak.position.y = position.y;
            }
        }
        else
        {
            if (startSpeed.forward < 0)
            {
                startSpeed.forward -= (0 - (-startSpeed.forward)) * (dt * 1.3);

                let position =
                {
                    x: airBreak.position.x + startSpeed.forward * Math.sin(-direction),
                    y: airBreak.position.y + startSpeed.forward * Math.cos(-direction),
                    z: 0
                };

                if (Utils.isNotKillZone(world, position))
                {
                    airBreak.position.x = position.x;
                    airBreak.position.y = position.y;
                }
            }
        }

        if (KeyPressing.isKeyPressed(65 /*key: A*/) && Utils.isNotOpenChat())
        {
            startSpeed.right -= (airBreak.speed.value - (-startSpeed.right)) * dt;

            let position =
            {
                x: airBreak.position.x + startSpeed.right * Math.sin(-(direction - Math.PI / 2)),
                y: airBreak.position.y + startSpeed.right * Math.cos(-(direction - Math.PI / 2)),
                z: 0
            };

            if (Utils.isNotKillZone(world, position))
            {
                airBreak.position.x = position.x;
                airBreak.position.y = position.y;
            }
        }
        else
        {
            if (startSpeed.right < 0)
            {
                startSpeed.right -= (0 - (-startSpeed.right)) * (dt * 1.3);

                let position =
                {
                    x: airBreak.position.x + startSpeed.right * Math.sin(-(direction - Math.PI / 2)),
                    y: airBreak.position.y + startSpeed.right * Math.cos(-(direction - Math.PI / 2)),
                    z: 0
                };

                if (Utils.isNotKillZone(world, position))
                {
                    airBreak.position.x = position.x;
                    airBreak.position.y = position.y;
                }
            }
        }

        if (KeyPressing.isKeyPressed(68 /*key: D*/) && Utils.isNotOpenChat())
        {
            startSpeed.right += (airBreak.speed.value - startSpeed.right) * dt;

            let position =
            {
                x: airBreak.position.x + startSpeed.right * Math.sin(-(direction - Math.PI / 2)),
                y: airBreak.position.y + startSpeed.right * Math.cos(-(direction - Math.PI / 2)),
                z: 0
            };

            if (Utils.isNotKillZone(world, position))
            {
                airBreak.position.x = position.x;
                airBreak.position.y = position.y;
            }
        }
        else
        {
            if (startSpeed.right > 0)
            {
                startSpeed.right += (0 - startSpeed.right) * (dt * 1.3);

                let position =
                {
                    x: airBreak.position.x + startSpeed.right * Math.sin(-(direction - Math.PI / 2)),
                    y: airBreak.position.y + startSpeed.right * Math.cos(-(direction - Math.PI / 2)),
                    z: 0
                };

                if (Utils.isNotKillZone(world, position))
                {
                    airBreak.position.x = position.x;
                    airBreak.position.y = position.y;
                }
            }
        }
    }


    if (KeyPressing.isKeyPressed(81 /*key: Q*/) && Utils.isNotOpenChat())
    {
        startSpeed.up += (airBreak.speed.value - startSpeed.up) * dt;

        airBreak.position.z += startSpeed.up;
    }
    else
    {
        if (startSpeed.up > 0)
        {
            startSpeed.up += (0 - startSpeed.up) * (dt * 1.3);
            airBreak.position.z += startSpeed.up;
        }
    }

    if (KeyPressing.isKeyPressed(69 /*key: E*/) && Utils.isNotOpenChat())
    {
        startSpeed.up -= (airBreak.speed.value - (-startSpeed.up)) * dt;

        airBreak.position.z += startSpeed.up;
    }
    else
    {
        if (startSpeed.up < 0)
        {
            startSpeed.up -= (0 - (-startSpeed.up)) * (dt * 1.3);
            airBreak.position.z += startSpeed.up;
        }
    }

    if (!airBreak.airWalk.value)
    {
        for (let i = 0; i < bodies.length; i++)
        {
            bodies.at(i).state.velocity.x = 0;
            bodies.at(i).state.velocity.y = 0;
            bodies.at(i).state.velocity.z = 0;

            bodies.at(i).state.angularVelocity.x = 0;
            bodies.at(i).state.angularVelocity.y = 0;
            bodies.at(i).state.angularVelocity.z = 0;

            bodies.at(i).movable = false;
        }

        physicsComponent.body.state.position.x = airBreak.position.x;
        physicsComponent.body.state.position.y = airBreak.position.y;

        physicsComponent.body.state.velocity.x = 0;
        physicsComponent.body.state.velocity.y = 0;
        physicsComponent.body.state.angularVelocity.z = 0;

        if (syncData.deSyncData.state.value && syncData.deSyncData.teleportToRealPosition.value)
        {
            physicsComponent.body.state.orientation.w = syncData.deSyncData.orientation.w;
            physicsComponent.body.state.orientation.z = syncData.deSyncData.orientation.z;
        }
        else
        {
            physicsComponent.body.state.orientation.w = Math.sin(-(camera.direction - Math.PI) / 2);
            physicsComponent.body.state.orientation.z = Math.cos(-(camera.direction - Math.PI) / 2);
        }
    }
    else
    {
        for (let i = 0; i < bodies.length; i++)
        {
            bodies.at(i).movable = true;
        }

        if (trackedChassis)
        {
            trackedChassis.maxRayLength = 1e+100;
            trackedChassis.dampingCoeff = 0;
            trackedChassis.springCoeff = 0;
        }
    }

    physicsComponent.body.state.position.z = airBreak.position.z;

    physicsComponent.body.state.angularVelocity.x = 0;
    physicsComponent.body.state.angularVelocity.y = 0;
    physicsComponent.body.state.velocity.z = 0;

    physicsComponent.body.state.orientation.x = 0;
    physicsComponent.body.state.orientation.y = 0;
}

// boxTeleport.h.js

class BoxTeleport
{
    process = null; // args: 1 - localPlayer
}

// boxTeleport.c.js

let boxTeleport = new ImGui_Var(false);

BoxTeleport.process = function (localPlayer)
{
    if (!boxTeleport.value)
    {
        return;
    }

    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let physicsComponent = GameObjects.getPhysicsComponent();

    if (!physicsComponent)
    {
        return;
    }

    let camera = GameObjects.getCamera();

    if (!camera)
    {
        return;
    }

    let triggers = world.triggers_0.triggers_0.array;

    if (triggers && triggers.length != 0)
    {
        for (let i = 0; i < triggers.length; i++)
        {
            if (triggers.at(i).enabled)
            {
                let triggerPosition = triggers.at(i).bonus_0;

                if (!triggerPosition)
                {
                    continue;
                }

                if (!triggerPosition.hasOwnProperty("_bonusMesh_0"))
                {
                    continue;
                }

                triggerPosition = triggerPosition._bonusMesh_0.object3d.aabb;

                if (!triggerPosition)
                {
                    continue;
                }

                physicsComponent.body.state.position.x = triggerPosition.center.x;
                physicsComponent.body.state.position.y = triggerPosition.center.y;
                physicsComponent.body.state.position.z = triggerPosition.maxZ;

                physicsComponent.body.state.orientation.w = Math.sin(-(camera.direction - Math.PI) / 2);
                physicsComponent.body.state.orientation.z = Math.cos(-(camera.direction - Math.PI) / 2);
                physicsComponent.body.state.orientation.x = 0;
                physicsComponent.body.state.orientation.y = 0;

                physicsComponent.body.state.angularVelocity.x = 0;
                physicsComponent.body.state.angularVelocity.y = 0;
                physicsComponent.body.state.angularVelocity.z = 0;

                physicsComponent.body.state.velocity.x = 0;
                physicsComponent.body.state.velocity.y = 0;
                physicsComponent.body.state.velocity.z = 0;
            }
        }
    }
}

// clicker.h.js

class Clicker
{
    process = null; // args: 1 - localPlayer
}

// clicker.c.js

clickerData =
{
    autoMining: new ImGui_Var(false),
    autoSupplies: new ImGui_Var(true),
    healing: true,
    autoHealingData:
    {
        state: new ImGui_Var(false),
        mply: new ImGui_Var(1),

        supplyData:
        {
            firstAID: null,
            mine: null,
            doubleArmor: null,
            doubleDamage: null,
            speed: null
        }
    }
};

Clicker.process = function (localPlayer)
{
    if (!clickerData.autoSupplies.value && !clickerData.autoMining.value && !clickerData.autoHealingData.state.value)
    {
        return;
    }

    if (KeyPressing.isKeyPressed(pingKey) && Utils.isNotOpenChat())
    {
        return;
    }

    if (!localPlayer)
    {
        return;
    }

    let gameActions = GameObjects.getGameActions();

    if (!gameActions)
    {
        return;
    }
   let healthComponent = GameObjects.getHealthComponent();

    if (!healthComponent)
    {
        return;
    }

    if (!clickerData.autoHealingData.supplyData.firstAID || !clickerData.autoHealingData.supplyData.mine)
    {
        for (let i = 0; i < localPlayer.length; i++)
        {
            if (localPlayer.at(i).hasOwnProperty("supplyTypeConfigs_0"))
            {
                let map = localPlayer.at(i).supplyTypeConfigs_0.map_97q5dv$_0.
                    internalMap_uxhen5$_0.backingMap_0;

                for (let key in map)
                {
                    if (map[key].key_5xhq3d$_0.name$ == "FIRST_AID")
                    {
                        clickerData.autoHealingData.supplyData.firstAID = map[key]._value_0._value_0;
                    }

                    if (map[key].key_5xhq3d$_0.name$ == "MINE")
                    {
                        clickerData.autoHealingData.supplyData.mine = map[key]._value_0._value_0;
                    }
                    if (map[key].key_5xhq3d$_0.name$ == "NITRO")
                    {
                        clickerData.autoHealingData.supplyData.speed = map[key]._value_0._value_0;
                    }
                    if (map[key].key_5xhq3d$_0.name$ == "DOUBLE_ARMOR")
                    {
                        clickerData.autoHealingData.supplyData.doubleArmor = map[key]._value_0._value_0;
                    }
                    if (map[key].key_5xhq3d$_0.name$ == "DOUBLE_DAMAGE")
                    {
                        clickerData.autoHealingData.supplyData.doubleDamage = map[key]._value_0._value_0;
                    }
                }

                break;
            }
        }
    }

    if (clickerData.autoSupplies.value)
    {
clickerData.autoHealingData.supplyData.doubleArmor.onUserActivatedSupply();

clickerData.autoHealingData.supplyData.doubleDamage.onUserActivatedSupply();

clickerData.autoHealingData.supplyData.speed.onUserActivatedSupply();
    }

    if (clickerData.autoMining.value)
    {
clickerData.autoHealingData.supplyData.mine.onUserActivatedSupply();
    }

    if (!clickerData.autoHealingData.state.value || !clickerData.autoHealingData.supplyData.firstAID || !clickerData.autoHealingData.supplyData.mine)
    {
        return;
    }

    for (let i = 0; i < Number(clickerData.autoHealingData.mply.value.toFixed(0)); i++)
    {
        clickerData.autoHealingData.supplyData.firstAID.onUserActivatedSupply();
        clickerData.autoHealingData.supplyData.mine.onUserActivatedSupply();
    }
}

document.addEventListener('keyup', (e) =>
{
    if (e.keyCode == 35 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        clickerData.autoHealingData.state.value = !clickerData.autoHealingData.state.value;
    }
})

document.addEventListener('keyup', (e) =>
{
    if (e.keyCode == 53 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        clickerData.autoMining.value = !clickerData.autoMining.value;
    }
})

// flagTeleport.h.js

class FlagTeleport
{
    process = null; // args: 1 - localPlayer
}

// flagTeleport.c.js

flagTeleportData =
{
    state: new ImGui_Var(false),
    cooldown: true
};

FlagTeleport.process = function (localPlayer)
{
    if (!flagTeleportData.state.value)
    {
        return;
    }

    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let flags = GameObjects.getFlags();

    if (!flags)
    {
        return;
    }

    let physicsComponent = GameObjects.getPhysicsComponent();

    if (!physicsComponent)
    {
        return;
    }

    let serverUpdates = GameObjects.getServerUpdates();

    if (!serverUpdates)
    {
        return;
    }

    if (flagTeleportData.cooldown)
    {
        let localFlag, enemyFlag;

        if (flags[0].value.teamType.name != localPlayer.at(0).team.name)
        {
            enemyFlag = flags[0].value;
            localFlag = flags[1].value;
        }
        else
        {
            enemyFlag = flags[1].value;
            localFlag = flags[0].value;
        }

        if (localFlag.state.name == "AT_BASE" && enemyFlag.state.name != "CARRIED")
        {
            flagTeleportData.cooldown = false;

            let enemyFlagPosition = enemyFlag.interpolatedStatus_o5md0j$_0.position;
            let localFlagPosition = localFlag.interpolatedStatus_o5md0j$_0.position;

            let t = physicsComponent.getInterpolatedBodyState();

            t.position.x = enemyFlagPosition.x;
            t.position.y = enemyFlagPosition.y;
            t.position.z = enemyFlagPosition.z;

            serverUpdates.sendUpdate_0(t, world.physicsTime);

            t.position.x = localFlagPosition.x;
            t.position.y = localFlagPosition.y;
            t.position.z = localFlagPosition.z;

            serverUpdates.sendUpdate_0(t, world.physicsTime);

            setTimeout(() =>
            {
                flagTeleportData.cooldown = true;
            }, 5000);

            return;
        }
    }
}

// noKnockback.h.js

class NoKnockback
{
    init = null; // args: 1 - localPlayer
}

// noKnockback.c.js

noKnockbackMply = new ImGui_Var(1);

NoKnockback.init = function (localPlayer)
{
    if (!localPlayer)
    {
        return;
    }

    let physicsComponent = GameObjects.getPhysicsComponent();

    if (!physicsComponent)
    {
        return;
    }

    physicsComponent.body.addWorldForce_f5o1bj$ = function(t, e, n)
    {
        n *= noKnockbackMply.value;

        var o = n * e.x
          , i = n * e.y
          , r = n * e.z;
        this.forceAccum_0.x = this.forceAccum_0.x + o,
        this.forceAccum_0.y = this.forceAccum_0.y + i,
        this.forceAccum_0.z = this.forceAccum_0.z + r;
        var s = this.state.position
          , a = t.x - s.x
          , c = t.y - s.y
          , u = t.z - s.z;
        this.torqueAccum_0.x = this.torqueAccum_0.x + (c * r - u * i),
        this.torqueAccum_0.y = this.torqueAccum_0.y + (u * o - a * r),
        this.torqueAccum_0.z = this.torqueAccum_0.z + (a * i - c * o)
    }
}

// other.h.js

class Other
{
    process = null; // args: 1 - localPlayer
}

// other.c.js

otherData =
{
    gravity: new ImGui_Var(-1000),
    noCollision: new ImGui_Var(false),
    speedHack: new ImGui_Var(false),

    rapidUpdateData:
    {
        state: new ImGui_Var(false),
        mply: new ImGui_Var(1)
    }
};

Other.process = function (localPlayer)
{
    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let physicsComponent = GameObjects.getPhysicsComponent();

    if (!physicsComponent)
    {
        return;
    }

    let speedCharacteristics = GameObjects.getSpeedCharacteristics();

    if (!speedCharacteristics)
    {
        return;
    }

    let maxSpeedSmoother_0 = speedCharacteristics.maxSpeedSmoother_0;

    if (!maxSpeedSmoother_0)
    {
        return;
    }

    let serverUpdates = GameObjects.getServerUpdates();

    if (!serverUpdates)
    {
        return;
    }

    if (otherData.speedHack.value)
    {
        maxSpeedSmoother_0.currentValue = 1e+50;
    }
    else
    {
        maxSpeedSmoother_0.currentValue = maxSpeedSmoother_0.targetValue;
    }

    world.physicsScene_0.gravity.z = otherData.gravity.value;

    if (otherData.noCollision.value)
    {
        physicsComponent.tankCollisionBox.collisionMask = 76;
    }
    else
    {
        physicsComponent.tankCollisionBox.collisionMask = 75;
    }

    if (KeyPressing.isKeyPressed(pingKey) && Utils.isNotOpenChat())
    {
        return;
    }

    if (!otherData.rapidUpdateData.state.value)
    {
        return;
    }

    for (let i = 0; i < otherData.rapidUpdateData.mply.value; i++)
    {
        serverUpdates.sendState_0(physicsComponent.getInterpolatedBodyState());
    }
}

document.addEventListener('keyup', (e) =>
{
    if (e.keyCode == 105 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        otherData.rapidUpdateData.state.value = !otherData.rapidUpdateData.state.value;
    }
})


// removeMines.h.js

class RemoveMines
{
    process = null; // args: 1 - localPlayer
}

// removeMines.c.js

let removeMines = new ImGui_Var(true);

RemoveMines.process = function (localPlayer)
{
    if (!removeMines.value)
    {
        return;
    }

    if (!localPlayer)
    {
        return;
    }

    let mines = GameObjects.getMines();

    if (!mines)
    {
        return;
    }

    var n;
    for (n = mines.minesByUser_0.keys.iterator(); n.hasNext();)
    {
        var o = n.next();
        mines.removeAllMines_0(o)
    }
}

// stick.h.js

class Stick
{
    process = null; // args: 1 - localPlayer
}

// stick.c.js

stickData =
{
    state: new ImGui_Var(false),
    temp: false,
    target: null
};

Stick.process = function (localPlayer)
{
    if (!stickData.state.value && stickData.temp == false)
    {
        return;
    }

    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let physicsComponent = GameObjects.getPhysicsComponent();

    if (!physicsComponent)
    {
        return;
    }

    let camera = GameObjects.getCamera();

    if (!camera)
    {
        return;
    }

    if (!stickData.target)
    {
        return;
    }

    if (!stickData.state.value && stickData.temp == true)
    {
        stickData.temp = false;

        physicsComponent.body.state.velocity.x = 0;
        physicsComponent.body.state.velocity.y = 0;
        physicsComponent.body.state.velocity.z = 0;
        return;
    }

    stickData.temp = true;

    physicsComponent.body.state.position.x = stickData.target.state.position.x;
    physicsComponent.body.state.position.y = stickData.target.state.position.y;
    physicsComponent.body.state.position.z = stickData.target.state.position.z;

    physicsComponent.body.state.orientation.w = stickData.target.state.orientation.w;
    physicsComponent.body.state.orientation.z = stickData.target.state.orientation.z;
    physicsComponent.body.state.orientation.x = stickData.target.state.orientation.x;
    physicsComponent.body.state.orientation.y = stickData.target.state.orientation.y;

    physicsComponent.body.state.angularVelocity.x = 0;
    physicsComponent.body.state.angularVelocity.y = 0;
    physicsComponent.body.state.angularVelocity.z = 0;

    physicsComponent.body.state.velocity.x = 0;
    physicsComponent.body.state.velocity.y = 0;
    physicsComponent.body.state.velocity.z = 100000;
}

// striket.h.js

class Striker
{
    init = null; // args: 1 - localPlayer
    process = null; // args: 1 - localPlayer
}

// striker.c.js

strikerData =
{
    aimBot: new ImGui_Var(true),
    shellsTeleport: new ImGui_Var(true),
    noLaser: new ImGui_Var(true),
    state: false,
    salvoRocketsCount: 8,
    shellsTimeout: null,
    type: "striker",
    shellCache: null,
    getTargetWithScope: new ImGui_Var(true)
};

Striker.init = function (localPlayer)
{
    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let striker = GameObjects.getStrikerComponent();

    if (!striker)
    {
        return;
    }

    if (strikerData.type == "striker")
    {
        strikerData.salvoRocketsCount = striker.salvoRocketsCount;

        if (striker.targetingSystem_0 && striker.targetingSystem_0.targetingSystem_vutpoz$_0)
        {
            let targetingSystem_0 = striker.targetingSystem_0.targetingSystem_vutpoz$_0;

            if (targetingSystem_0.directionCalculator_0 &&
                targetingSystem_0.directionCalculator_0.targetingSectorsCalculator_0)
            {
                let targetingSectorsCalculator_0 = targetingSystem_0.directionCalculator_0.
                    targetingSectorsCalculator_0;

                targetingSectorsCalculator_0.maxElevationAngle_0 = 100000;
                targetingSectorsCalculator_0.minElevationAngle_0 = -100000;
            }
        }
    }
    else
    {
        strikerData.salvoRocketsCount = striker.scorpioData_0.secondarySalvoSize;
    }

    striker.lockTarget_gcez93$ = function (t, e, n)
    {
        if (strikerData.aimBot.value)
        {
            strikerData.getTargetWithScope.value ? targetId = e : t.targetId = targetId;
            this.lockTarget_gcez93$$default(t, targetId);
            return true;
        }
        else
        {
            return void 0 === e && (e = null), n ? n(t, e) : this.lockTarget_gcez93$$default(t, e);
        }
    }

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).hasOwnProperty("shellCache_0"))
        {
            strikerData.shellCache = localPlayer.at(i).shellCache_0.itemsInUse.array_hd7ov6$_0;
            break;
        }
    }
}

Striker.process = function (localPlayer)
{
    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let striker = GameObjects.getStrikerComponent();

    if (!striker)
    {
        return;
    }

    if (!strikerData.shellCache)
    {
        return;
    }

    if (strikerData.type == "striker" && strikerData.noLaser.value)
    {
        striker.stopAiming();
    }

    if (!strikerData.shellsTeleport.value)
    {
        return;
    }

    if (!targetId)
    {
        return;
    }

    if (KeyPressing.isKeyPressed(82 /*key: R*/) && Utils.isNotOpenChat())
    {
        strikerData.state = true;
    }

    if (!strikerData.state && strikerData.shellCache.length == strikerData.salvoRocketsCount)
    {
        if (!strikerData.shellsTimeout)
        {
            strikerData.shellsTimeout = setTimeout(() => { strikerData.state = true; strikerData.shellsTimeout = null; },
            strikerData.type == "striker" ? 2000 : 4000);
        }
    }

    let targetBody = Utils.getBodyById(world, localPlayer, targetId);

    if (!targetBody)
    {
        return;
    }

    if (!targetBody.state)
    {
        return;
    }

    if (!targetBody.state.position)
    {
        return;
    }

    let target = Utils.getPlayerById(world, localPlayer, targetId);

    if (!target)
    {
        return;
    }

    if (strikerData.state)
    {
        for (let i = 0; i < strikerData.shellCache.length; i++)
        {
            strikerData.shellCache.at(i).components_0.array.at(1).direction.x = 0;
            strikerData.shellCache.at(i).components_0.array.at(1).direction.y = 0;
            strikerData.shellCache.at(i).components_0.array.at(1).direction.z = 0;

            strikerData.shellCache.at(i).components_0.array.at(1).position.x = targetBody.state.position.x;
            strikerData.shellCache.at(i).components_0.array.at(1).position.y = targetBody.state.position.y;
            strikerData.shellCache.at(i).components_0.array.at(1).position.z = targetBody.state.position.z;
        }

        if (strikerData.shellCache.length == 0)
        {
            strikerData.state = false;
        }
    }
    else
    {
        for (let i = 0; i < strikerData.shellCache.length; i++)
        {
            strikerData.shellCache.at(i).components_0.array.at(1).direction.x = 0;
            strikerData.shellCache.at(i).components_0.array.at(1).direction.y = 0;
            strikerData.shellCache.at(i).components_0.array.at(1).direction.z = 0;
        }
    }
}

// sync.h.js

class Sync
{
    init = null; // args: 1 - localPlayer
}

// sync.c.js

syncData =
{
    state: new ImGui_Var(true),
    antiMine: new ImGui_Var(true),
    antiMineHeight: new ImGui_Var(100),
    randomTeleport: new ImGui_Var(false),
    spinner: new ImGui_Var(false),

    antiStrikerHackData:
    {
        state: new ImGui_Var(true),
        process: null,
        randomTeleport: false
    },

    fakeLagData:
    {
        state: new ImGui_Var(false),
        process: null,
        temp: false,
        position: { x: 0, y: 0, z: 0 },
        distance: new ImGui_Var(300)
    },

    deSyncData:
    {
        state: new ImGui_Var(false),
        temp: false,
        orientation: { w: 0, x: 0, y: 0, z: 0 },
        position: { x: 0, y: 0, z: 0 },
        teleportToRealPosition: new ImGui_Var(false)
    }
};

Sync.init = function (localPlayer)
{
    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let physicsComponent = GameObjects.getPhysicsComponent();

    if (!physicsComponent)
    {
        return;
    }

    let serverUpdates = GameObjects.getServerUpdates();

    if (!serverUpdates)
    {
        return;
    }

    serverUpdates.sendState_0 = function(t)
    {
        if (KeyPressing.isKeyPressed(pingKey) && Utils.isNotOpenChat())
        {
            return;
        }

        if (KeyPressing.isKeyPressed(46 /*key: DELETE*/) && Utils.isNotOpenChat())
        {
            t.position.z = 99999;
            this.sendUpdate_0(t, this.world.physicsTime);
            return;
        }

        if (syncData.state.value)
        {
            if (syncData.spinner.value)
            {
                t.orientation.w = Utils.getRandomArbitrary(-1, 1);
                t.orientation.x = Utils.getRandomArbitrary(-1, 1);
                t.orientation.y = Utils.getRandomArbitrary(-1, 1);
                t.orientation.z = Utils.getRandomArbitrary(-1, 1);
            }

            if (syncData.antiMine.value)
            {
                t.position.z += syncData.antiMineHeight.value;
            }

            if (syncData.fakeLagData.process(this, t, physicsComponent) == true)
            {
                return;
            }

            if (syncData.deSyncData.process(this, t, physicsComponent) == true)
            {
                return;
            }

            syncData.antiStrikerHackData.process(this, t);

            if (syncData.randomTeleport.value)
            {
                let bounds = world.entities_0.toArray().at(0).components_0.array.at(0).bounds;

                t.position.x = Utils.getRandomArbitrary(bounds.minX, bounds.maxX);
                t.position.y = Utils.getRandomArbitrary(bounds.minY, bounds.maxY);
                t.position.z = Utils.getRandomArbitrary(bounds.maxZ + 60, bounds.maxZ + 2000);

                this.sendUpdate_0(t, this.world.physicsTime);

                t.position.x = Utils.getRandomArbitrary(bounds.minX, bounds.maxX);
                t.position.y = Utils.getRandomArbitrary(bounds.minY, bounds.maxY);
                t.position.z = Utils.getRandomArbitrary(bounds.maxZ + 60, bounds.maxZ + 2000);
            }
        }

        this.sendUpdate_0(t, this.world.physicsTime);
    }

}
document.addEventListener('keyup', (e) =>
{
    if (e.keyCode == 79 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        syncData.randomTeleport.value = !syncData.randomTeleport.value;
    }
})

// antiStrikerHack.c.js

syncData.antiStrikerHackData.process = function (ecx, t)
{
    if (!syncData.antiStrikerHackData.state.value)
    {
        syncData.antiStrikerHackData.randomTeleport = false;
        return;
    }

    let localPlayer = GameObjects.getLocalPlayer();

    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    if (syncData.antiStrikerHackData.randomTeleport)
    {
        let bounds = world.entities_0.toArray().at(0).components_0.array.at(0).bounds;

        t.position.x = Utils.getRandomArbitrary(bounds.minX, bounds.maxX);
        t.position.y = Utils.getRandomArbitrary(bounds.minY, bounds.maxY);
        t.position.z = Utils.getRandomArbitrary(bounds.maxZ + 60, bounds.maxZ + 2000);

        ecx.sendUpdate_0(t, world.physicsTime);

        t.position.x = Utils.getRandomArbitrary(bounds.minX, bounds.maxX);
        t.position.y = Utils.getRandomArbitrary(bounds.minY, bounds.maxY);
        t.position.z = Utils.getRandomArbitrary(bounds.maxZ + 200, bounds.maxZ + 2000);
    }

    let playersArray = Utils.getPlayers(world, localPlayer);

    if (!playersArray)
    {
        return;
    }

    if (playersArray.length == 0)
    {
        return;
    }

    for (let i = 0; i < playersArray.length; i++)
    {
        for (let n = 0; n < playersArray.at(i).length; n++)
        {
            let shellCache;
            let striker;

            if (playersArray.at(i).at(n).hasOwnProperty("shellCache_0"))
            {
                striker = playersArray.at(i).at(n);

                if (!striker.rocketLauncherCC_0)
                {
                    continue;
                }

                if (striker.rocketLauncherCC_0.salvoSize != 8)
                {
                    continue;
                }

                shellCache = playersArray.at(i).at(n).shellCache_0.itemsInUse.toArray();

                if (!playersArray.at(i).at(n).tempTimeout)
                {
                    playersArray.at(i).at(n).tempTimeout = null;
                }

                if (!playersArray.at(i).at(n).tempState)
                {
                    playersArray.at(i).at(n).tempState = false;
                }
            }
            else
            {
                continue;
            }

            if (playersArray.at(i).at(n).tempState == true)
            {
                continue;
            }

            for (let i = 0; i < shellCache.length; i++)
            {
                shellCache.at(i).components_0.array.at(1).direction.x = 0;
                shellCache.at(i).components_0.array.at(1).direction.y = 0;
                shellCache.at(i).components_0.array.at(1).direction.z = 0;
            }

            if (playersArray.at(i).at(n).tempTimeout == null && shellCache.length == 8)
            {
                playersArray.at(i).at(n).tempTimeout = setTimeout(() =>
                {
                    playersArray.at(i).at(n).tempState = syncData.antiStrikerHackData.randomTeleport = true;

                    setTimeout(() =>
                    {
                        syncData.antiStrikerHackData.randomTeleport = false;
                        playersArray.at(i).at(n).tempTimeout = null;
                        playersArray.at(i).at(n).tempState = true;
                    }, 500);

                    setTimeout(() =>
                    {
                        playersArray.at(i).at(n).tempState = false;
                    }, 1000);
                }, 1600);
            }

            break;
        }
    }
}

// deSync.c.js

function getDeSyncState(t)
{
    syncData.deSyncData.position.x = t.position.x;
    syncData.deSyncData.position.y = t.position.y;
    syncData.deSyncData.position.z = t.position.z;

    syncData.deSyncData.orientation.w = t.orientation.w;
    syncData.deSyncData.orientation.x = t.orientation.x;
    syncData.deSyncData.orientation.y = t.orientation.y;
    syncData.deSyncData.orientation.z = t.orientation.z;
}

syncData.deSyncData.process = function (ecx, t, physicsComponent)
{
    if (syncData.deSyncData.temp && !syncData.deSyncData.state.value)
    {
        syncData.deSyncData.temp = false;

        getDeSyncState(t);
        ecx.sendUpdate_0(t, ecx.world.physicsTime);
        return true;
    }
    else if (!syncData.deSyncData.temp && syncData.deSyncData.state.value)
    {
        syncData.deSyncData.temp = true;

        getDeSyncState(t);
        ecx.sendUpdate_0(t, ecx.world.physicsTime);
        return true;
    }

    if (syncData.deSyncData.state.value)
    {
        if (syncData.deSyncData.teleportToRealPosition.value && !airBreak.state)
        {
            physicsComponent.body.state.position.x = syncData.deSyncData.position.x;
            physicsComponent.body.state.position.y = syncData.deSyncData.position.y;
            physicsComponent.body.state.position.z = syncData.deSyncData.position.z;

            physicsComponent.body.state.orientation.w = syncData.deSyncData.orientation.w;
            physicsComponent.body.state.orientation.x = syncData.deSyncData.orientation.x;
            physicsComponent.body.state.orientation.y = syncData.deSyncData.orientation.y;
            physicsComponent.body.state.orientation.z = syncData.deSyncData.orientation.z;

            physicsComponent.body.state.angularVelocity.x = 0;
            physicsComponent.body.state.angularVelocity.y = 0;
            physicsComponent.body.state.angularVelocity.z = 0;

            physicsComponent.body.state.velocity.x = 0;
            physicsComponent.body.state.velocity.y = 0;
            physicsComponent.body.state.velocity.z = 0;
        }

        return true;
    }

    return false;
}

// fakeLag.c.js

function calculateDistance(p1, p2)
{
    var a = p2.x - p1.x;
    var b = p2.y - p1.y;
    var c = p2.z - p1.z;

    return Math.sqrt(a * a + b * b + c * c);
}

syncData.fakeLagData.process = function (ecx, t, physicsComponent)
{
    if (syncData.fakeLagData.temp && !syncData.fakeLagData.state.value)
    {
        syncData.fakeLagData.temp = false;

        syncData.fakeLagData.position.x = t.position.x;
        syncData.fakeLagData.position.y = t.position.y;
        syncData.fakeLagData.position.z = t.position.z;

        ecx.sendUpdate_0(t, ecx.world.physicsTime);

        return true;
    }
    else if (!syncData.fakeLagData.temp && syncData.fakeLagData.state.value)
    {
        syncData.fakeLagData.temp = true;

        syncData.fakeLagData.position.x = t.position.x;
        syncData.fakeLagData.position.y = t.position.y;
        syncData.fakeLagData.position.z = t.position.z;

        ecx.sendUpdate_0(t, ecx.world.physicsTime);

        return true;
    }

    if (syncData.fakeLagData.state.value)
    {
        let distance = calculateDistance(syncData.fakeLagData.position, physicsComponent.body.state.position);

        t.velocity.z += Infinity;

        if (distance >= syncData.fakeLagData.distance.value)
        {
            syncData.fakeLagData.position.x = t.position.x;
            syncData.fakeLagData.position.y = t.position.y;
            syncData.fakeLagData.position.z = t.position.z;

            ecx.sendUpdate_0(t, ecx.world.physicsTime);

            return true;
        }
        else
        {
            return true;
        }
    }

    return false;
}

// wallHack.h.js

class WallHack
{
    process = null; // args: 1 - localPlayer
}

// wallHack.c.js

let espData =
{
    enabled: new ImGui_Var(true),
    colorEnemy: 16711680,
    colorTarget: 16777215,
    colorTeam: 255,
    onlyEnemy: new ImGui_Var(false),
    boxGlow: new ImGui_Var(true)
};

function drawEsp(player, color)
{
    if (!player)
    {
        return;
    }

    if (player.length == 0)
    {
        return;
    }

    let weaponSkin;
    let weaponChildren;
    let hull;
    let hullChildren;

    for (let i = 0; i < player.length; i++)
    {
        if (player.at(i).__proto__.hasOwnProperty("weaponSkin_0"))
        {
            weaponSkin = player.at(i).weaponSkin_0.root;
            weaponChildren = weaponSkin.children_ich852$_0.array;
            hull = player.at(i).weaponSkin_0.hullSkinComponent_0.hull;
            hullChildren = hull.children_ich852$_0.array;
            break;
        }
    }

    if (!weaponSkin || !hull || !weaponChildren || !hullChildren)
    {
        return;
    }

    if (color == 0)
    {
        weaponSkin.outlined = false;
        hull.outlined = false;

        for (let i = 0; i < weaponChildren.length; i++)
        {
            weaponChildren.at(i).outlined = false;
        }

        for (let i = 0; i < hullChildren.length; i++)
        {
            hullChildren.at(i).outlined = false;
        }

        return;
    }

    weaponSkin.outlined = true;
    weaponSkin.outlineBold = false;
    weaponSkin.outlineColor = color;

    hull.outlined = true;
    hull.outlineBold = false;
    hull.outlineColor = color;

    for (let i = 0; i < weaponChildren.length; i++)
    {
        weaponChildren.at(i).outlined = true;
        weaponChildren.at(i).outlineBold = false;
        weaponChildren.at(i).outlineColor = color;
    }

    for (let i = 0; i < hullChildren.length; i++)
    {
        hullChildren.at(i).outlined = true;
        hullChildren.at(i).outlineBold = false;
        hullChildren.at(i).outlineColor = color;
    }
}

WallHack.process = function (localPlayer)
{
    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let playersArray = Utils.getPlayers(world, localPlayer);

    if (!playersArray)
    {
        return;
    }

    if (playersArray.length == 0)
    {
        return;
    }

    for (let i = 0; i < playersArray.length; i++)
    {
        if (!espData.enabled.value)
        {
            drawEsp(playersArray.at(i), 0);
            continue;
        }

        if (Utils.getPlayerById(world, localPlayer, targetId) == playersArray.at(i))
        {
            drawEsp(playersArray.at(i), espData.colorTarget);
            continue;
        }

        if (Utils.isPlayerEnemy(localPlayer, playersArray.at(i)))
        {
            drawEsp(playersArray.at(i), espData.colorEnemy);
            continue;
        }

        if (!espData.onlyEnemy.value)
        {
            drawEsp(playersArray.at(i), espData.colorTeam);
        }
        else
        {
            drawEsp(playersArray.at(i), 0);
        }
    }

    let triggers = world.triggers_0.triggers_0.array;

    if (triggers && triggers.length != 0)
    {
        for (let i = 0; i < triggers.length; i++)
        {
            if (!triggers.at(i).enabled)
            {
                continue;
            }

            if (!triggers.at(i).bonus_0)
            {
                continue;
            }

            let bonusMesh = triggers.at(i).bonus_0.bonusMesh;

            if (!bonusMesh)
            {
                continue;
            }

            let object3d = bonusMesh.object3d;

            if (!object3d)
            {
                continue;
            }

            let bonusData_0 = triggers.at(i).bonus_0.bonusData_0;

            if (!bonusData_0)
            {
                continue;
            }

            object3d.outlineColor = bonusData_0.bonusLight.lightColor.color;

            if (!espData.boxGlow.value || !espData.enabled.value)
            {
                object3d.outlined = false;
                continue;
            }

            object3d.outlineBold = false;
            object3d.outlined = true;
        }
    }
}

// cheatMenu.c.js

class CheatMenu
{
    draw = null; // args: 1 - time
}

class Tabs
{
    localPlayer = null; // args: void
    weapon = null; // args: void
    visuals = null; // args: void
    players = null; // args: void
}

// cheatMenu.c.js

document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock;

let menuShow = false;

(async function()
{
    await ImGui.default();

    ImGui.CreateContext();
    ImGui.StyleColorsDark();

    const output = document.getElementById("output") || document.body;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2", { alpha: true }) || canvas.getContext("webgl", { alpha: true });

    output.appendChild(canvas);

    canvas.tabIndex = 1000;
    canvas.id = "canvas__imgui";

    canvas.style.position = "absolute";
    canvas.style.left = "0px";
    canvas.style.right = "0px";
    canvas.style.top = "0px";
    canvas.style.bottom = "0px";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.userSelect = "none";
    canvas.style.visibility = "hidden";

    ImGui_Impl.Init(canvas);
    ImGui_Impl.gl = context;
})();

document.addEventListener('keyup', (e) =>
{
    if (e.keyCode == 45 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        menuShow = !menuShow;

        let canvas = document.getElementById("canvas__imgui");

        menuShow ? canvas.style.visibility = "" : canvas.style.visibility = "hidden";

        if (menuShow)
        {
            document.exitPointerLock();
        }
    }
})

CheatMenu.draw = function (time)
{
    if (!menuShow)
    {
        return;
    }

    ImGui_Impl.NewFrame(time);
    ImGui.NewFrame();

    ImGui.SetNextWindowSize(new ImGui.ImVec2(650, 370), ImGui.Cond.FirstUseEver);
    ImGui.Begin("Afterburner", null, ImGui.WindowFlags.NoCollapse | ImGui.WindowFlags.NoResize);

    if (ImGui.BeginTabBar("##tabbar", ImGui.TabBarFlags.None))
    {
        if (ImGui.BeginTabItem("Local Player"))
        {
            Tabs.localPlayer();

            ImGui.EndTabItem();
        }

        if (ImGui.BeginTabItem("Weapon"))
        {
            Tabs.weapon();

            ImGui.EndTabItem();
        }

        if (ImGui.BeginTabItem("Visuals"))
        {
            Tabs.visuals();

            ImGui.EndTabItem();
        }

        if (ImGui.BeginTabItem("Players"))
        {
            Tabs.players();

            ImGui.EndTabItem();
        }

        ImGui.EndTabBar();
    }

    ImGui.End();

    ImGui.EndFrame();
    ImGui.Render();

    ImGui_Impl.RenderDrawData(ImGui.GetDrawData());
}

// localPlayer.tab.js

Tabs.localPlayer = function ()
{
    ImGui.Checkbox("AirBreak [R. Shift]", airBreak.enabled.access);
    ImGui.SameLine();
    ImGui.SliderInt("##airBreak.speed", airBreak.speed.access, 1, 300);
    ImGui.Checkbox("AirWalk [Num8]", airBreak.airWalk.access);
    ImGui.Checkbox("Fly Hack [Num7]", flyHack.state.access);
    ImGui.SameLine();
    ImGui.SliderInt("##flyhack.speed", flyHack.speed.access, 1, 300);

    ImGui.Checkbox("Sync", syncData.state.access);

    if (syncData.state.value)
    {
        ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15);
        ImGui.Checkbox("Anti Mine", syncData.antiMine.access);

        if (syncData.antiMine.value)
        {
            ImGui.SameLine();
            ImGui.InputInt("Height", syncData.antiMineHeight.access, 10, 10);
        }

        ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15);
        ImGui.Checkbox("Spinner", syncData.spinner.access);

        ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15);
        ImGui.Checkbox("Random Teleport [O]", syncData.randomTeleport.access);

        if (syncData.randomTeleport.value)
        {
            syncData.deSyncData.state.value = false;
            syncData.fakeLagData.state.value = false;
            syncData.antiStrikerHackData.state.value = false;
            syncData.spinner.value = false;
            syncData.antiMine.value = false;
        }

        ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15);
        ImGui.Checkbox("deSync", syncData.deSyncData.state.access);

        if (syncData.deSyncData.state.value)
        {
            ImGui.SameLine();
            ImGui.Checkbox("Teleport to Real Position", syncData.deSyncData.teleportToRealPosition.access);

            syncData.randomTeleport.value = false;
            syncData.fakeLagData.state.value = false;
            syncData.antiStrikerHackData.state.value = false;
            syncData.spinner.value = false;
            syncData.antiMine.value = false;
        }

        ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15);
        ImGui.Checkbox("Fake Lag", syncData.fakeLagData.state.access);

        if (syncData.fakeLagData.state.value)
        {
            ImGui.SameLine();
            ImGui.InputInt("Distance", syncData.fakeLagData.distance.access, 10, 100);

            if (syncData.fakeLagData.distance.value < 0)
            {
                syncData.fakeLagData.distance.value = 0;
            }

            syncData.randomTeleport.value = false;
            syncData.deSyncData.state.value = false;
            syncData.antiStrikerHackData.state.value = false;
        }

        ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15);
        ImGui.Checkbox("Avoid Striker Hack", syncData.antiStrikerHackData.state.access);

        if (syncData.antiStrikerHackData.state.value)
        {
            syncData.randomTeleport.value = false;
            syncData.deSyncData.state.value = false;
            syncData.fakeLagData.state.value = false;
        }
    }

    ImGui.Checkbox("OD Hack [End]", clickerData.autoHealingData.state.access);

    if (clickerData.autoHealingData.state.value)
    {
        ImGui.SameLine();
        ImGui.SliderInt("Multiply##AH", clickerData.autoHealingData.mply.access, 1, 5);
    }

    ImGui.Checkbox("Mines Clicker [5]", clickerData.autoMining.access);
    ImGui.SameLine();
    ImGui.Checkbox("Auto Supplies", clickerData.autoSupplies.access);

    ImGui.Checkbox("No Collision", otherData.noCollision.access);

    ImGui.SliderInt("Gravity", otherData.gravity.access, -1000, 1000);

    ImGui.SliderFloat("No Knockback", noKnockbackMply.access, 0, 2);

    ImGui.Checkbox("Box Teleport", boxTeleport.access);

    ImGui.Checkbox("SpeedHack", otherData.speedHack.access);

    ImGui.Checkbox("Flag Teleport", flagTeleportData.state.access);

    ImGui.Checkbox("Rapid Update [Num9]", otherData.rapidUpdateData.state.access);

    if (otherData.rapidUpdateData.state.value)
    {
        ImGui.SameLine();
        ImGui.SliderInt("Multiply##RU", otherData.rapidUpdateData.mply.access, 1, 5);
    }
}

// players.tab.js

let selected = new ImGui_Var(-1);
let selectedPlayerName = "none";
let targetId;
let onlyEnemy = new ImGui_Var(false);

Tabs.players = function ()
{
    let localPlayer = GameObjects.getLocalPlayer();

    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let physicsComponent = GameObjects.getPhysicsComponent();

    if (!physicsComponent)
    {
        return;
    }

    let camera = GameObjects.getCamera();

    if (!camera)
    {
        return;
    }

    ImGui.Checkbox("Only enemy", onlyEnemy.access);

    let playersArray = Utils.getPlayers(world, localPlayer, onlyEnemy.value);

    if (!playersArray)
    {
        return null;
    }

    if (playersArray.length == 0)
    {
        return null;
    }

    for (let i = 0; i < playersArray.length; i++)
    {
        if (!playersArray.at(i))
        {
            continue;
        }

        if (playersArray.at(i).length == 0)
        {
            continue;
        }

        let playerName = Utils.getPlayerName(playersArray.at(i));

        if (ImGui.Selectable(playerName, selected.value === i))
        {
            selectedPlayerName = playerName;
            selected.value = i;
        }
    }

    ImGui.Separator();

    if (selected.value >= 0)
    {
        if (!playersArray.at(selected.value))
        {
            return;
        }

        if (playersArray.at(selected.value).length == 0)
        {
            return;
        }

        ImGui.Text(`Selected player: ${selectedPlayerName}`);

        let playerBody = Utils.getPlayerBody(playersArray.at(selected.value));

        if (!playerBody)
        {
            return;
        }

        if (ImGui.Button("Set target"))
        {
            for (let i = 0; i < playersArray.at(selected.value).length; i++)
            {
                if (playersArray.at(selected.value).at(i).__proto__.hasOwnProperty("userId"))
                {
                    targetId = playersArray.at(selected.value).at(i).userId;
                    break;
                }
            }
        }

        ImGui.SameLine();

        ImGui.Checkbox("Stick", stickData.state.access);

        if (stickData.state.access)
        {
            stickData.target = playerBody;
        }
    }
}

// visuals.tab.js

const rgbToHex = (v) => [parseInt((255 * v[0]).toFixed(1)),
    parseInt((255 * v[1]).toFixed(1)), parseInt((255 * v[2]).toFixed(1))].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')

let colorEnemyRGB = new ImGui_Var([1, 0, 0]);
let colorTeamRGB = new ImGui_Var([0, 0, 1]);
let colorTargetRGB = new ImGui_Var([1, 1, 1]);

Tabs.visuals = function ()
{
    ImGui.Checkbox("Glow ESP", espData.enabled.access);

    if (espData.enabled.value)
    {
        ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15);
        ImGui.Checkbox("Only Enemy", espData.onlyEnemy.access);
        ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15);
        ImGui.Checkbox("Box ESP", espData.boxGlow.access);

        ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15);
        ImGui.ColorEdit3("Color Enemy", colorEnemyRGB.value);
        espData.colorEnemy = parseInt(rgbToHex(colorEnemyRGB.value), 16);

        ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15);
        ImGui.ColorEdit3("Color Team", colorTeamRGB.value);
        espData.colorTeam = parseInt(rgbToHex(colorTeamRGB.value), 16);

        ImGui.SetCursorPosX(ImGui.GetCursorPosX() + 15);
        ImGui.ColorEdit3("Color Target", colorTargetRGB.value);
        espData.colorTarget = parseInt(rgbToHex(colorTargetRGB.value), 16);
    }

    ImGui.Checkbox("Remove Mines", removeMines.access);
}

// weapon.tab.js

Tabs.weapon = function ()
{
    ImGui.Text("Striker / Scorpion");

    ImGui.Checkbox("Aim-Bot##striker", strikerData.aimBot.access);

    ImGui.SameLine();

    ImGui.Checkbox("No Laser##striker", strikerData.noLaser.access);

    ImGui.SameLine();

    ImGui.Checkbox("Rockets Teleport##striker", strikerData.shellsTeleport.access);

    ImGui.Checkbox("Lock Target With Scope##striker", strikerData.getTargetWithScope.access);

    ImGui.Separator();
}
// content.c.js

// Data
let init = false;
let frameCounter = 0;
let pingKey = 187; /* key: J */

function reset()
{
    init = airBreak.state = stickData.state.value = syncData.state.value = menuShow = false;
    flagTeleportData.cooldown = true;

    let canvas = document.getElementById("canvas__imgui");
    canvas.style.visibility = "hidden";

    stickData.target = null;

    gameObjects =
    {
        localPlayer: null,
        world: null,
        gameActions: null,
        mines: null,
        flags: null,
        physicsComponent: null,
        healthComponent: null,
        camera: null,
        trackedChassis: null,
        speedCharacteristics: null,
        serverUpdates: null,
        strikerComponent: null
    }

    clickerData.autoHealingData.supplyData =
    {
        firstAID: null,
        mine: null
    };
}

function mainEvent(time)
{
    if (!init && Utils.isGameReady())
    {
        let localPlayer = GameObjects.getLocalPlayer();

        if (localPlayer)
        {
            init = true;

            Sync.init(localPlayer);
            Striker.init(localPlayer);
            NoKnockback.init(localPlayer);
        }
    }
    else if (init && !Utils.isGameReady())
    {
        reset();
    }

    if (init)
    {
        let localPlayer = GameObjects.getLocalPlayer();

        Stick.process(localPlayer);
        AirBreak.process(localPlayer);
        BoxTeleport.process(localPlayer);
        FlagTeleport.process(localPlayer);
        Clicker.process(localPlayer);
        Other.process(localPlayer);
        FlyHack.process(localPlayer);

        frameCounter++;

        if (frameCounter >= 2)
        {
            Striker.process(localPlayer);
            RemoveMines.process(localPlayer);
            WallHack.process(localPlayer);

            frameCounter = 0;
        }

        CheatMenu.draw(time);
    }

    requestAnimationFrame(mainEvent);
}

Utils.getStates(); setInterval(Utils.saveStates, 5000); requestAnimationFrame(mainEvent);
alert("special for u");
