export default class Tormenta20Handler {
    constructor(msg) {
        const itemId = $(msg.data.content).attr("data-item-id");
        const tokenId = msg.data.speaker.token;
  
        this._actorToken = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor.items.get(itemId) != null);
        this._itemId = itemId;

        switch (this._actorToken.actor.data.data.tamanho) {
            case "Minusculo":
                this._actorToken.actor.data.data["traits"] = {
                    size: "tiny"
                }
                break;
            case "Pequeno":
                this._actorToken.actor.data.data["traits"] = {
                    size: "sm"
                }
                break;
            case "Grande":
                this._actorToken.actor.data.data["traits"] = {
                    size: "lg"
                }
                break;
            case "Enorme":
                    this._actorToken.actor.data.data["traits"] = {
                        size: "huge"
                    }
                    break;
            case "Colossal":
                this._actorToken.actor.data.data["traits"] = {
                    size: "grg"
                }
                break;
            case "Medio":
            default:
                this._actorToken.actor.data.data["traits"] = {
                    size: "med"
                }
                break;
        }

        const targets = Array.from(msg.user.targets);
        targets.forEach((target) => {
            switch (target.actor.data.data.tamanho) {
                case "Minusculo":
                    target.actor.data.data["traits"] = {
                        size: "tiny"
                    }
                    break;
                case "Pequeno":
                    target.actor.data.data["traits"] = {
                        size: "sm"
                    }
                    break;
                case "Grande":
                    target.actor.data.data["traits"] = {
                        size: "lg"
                    }
                    break;
                case "Enorme":
                    target.actor.data.data["traits"] = {
                        size: "huge"
                    }
                    break;
                case "Colossal":
                    target.actor.data.data["traits"] = {
                        size: "grg"
                    }
                    break;
                case "Medio":
                default:
                    target.actor.data.data["traits"] = {
                        size: "med"
                    }
                    break;
            }
        });
        this._allTargets = Array.from(msg.user.targets);
        this._itemName = this._actorToken.actor?.items?.get(itemId)?.name?.toLowerCase() ?? "";
        this._itemSource = this._actorToken.actor.items.get(itemId)?.data?.data?.source?.toLowerCase() ?? "";
        this._itemType = this._actorToken.actor.items?.get(itemId)?.data?.type?.toLowerCase();
        // getting flag data from Animation Tab
        this._flags = this._actorToken.actor.items?.get(itemId)?.data?.flags?.autoanimations ?? "";
        // 
        this._animColor = this._actorToken.actor.items?.get(itemId)?.data?.flags?.autoanimations?.color?.toLowerCase() ?? "";
        this._animName = this._flags.animName?.toLowerCase() ?? "";
        this._animExColor = this._flags.explodeColor?.toLowerCase() ?? "";
        this._animExRadius = this._flags.explodeRadius?.toLowerCase() ?? "";
        this._animExVariant = this._flags.explodeVariant?.toLowerCase() ?? "";
        this._animExLoop = this._flags.explodeLoop ?? "";
        this._animType = this._flags.animType?.toLowerCase() ?? "";
        this._animKill = this._flags.killAnim;
        this._animOverride = this._flags.override;
        this._animExplode = this._flags.explosion;
        this._animDgThrVar = this._flags.dtvar?.toLowerCase() ?? "";
        this._selfRadius = this._flags.selfRadius ?? "";
        this._animTint = this._flags.animTint ?? "";
        this._auraOpacity = this._flags.auraOpacity ?? "";
        this._ctaOption = this._flags.ctaOption ?? "";
        this._hmAnim = this._flags.hmAnim ?? "";
        this._uaStrikeType = this._flags.uaStrikeType ?? "";
        this._teleDist = this._flags.teleDist ?? "";
        this._spellVar = this._flags.spellVar ?? "";
        this._bardTarget = this._flags.bards?.bardTarget ?? true;
        this._bardSelf = this._flags.bards?.bardSelf ?? true;
        this._bardAnim = this._flags.bards?.bardAnim ?? "";
        this._bards = this._flags.bards ?? "";
        this._allSounds = this._flags.allSounds ?? "";
        this._itemSound = this._flags.allSounds?.item?.enableAudio ?? false;
        this._explodeSound = this._flags.allSounds?.explosion?.audioExplodeEnabled ?? false;
        this._spellLoops = this._flags?.spellOptions?.spellLoops ?? 1;
        this._divineSmite = this._flags.divineSmite ?? "";
        this._templates = this._flags.templates ?? "";

        //console.log(this._animName);
        this._animNameFinal;
        switch (true) {
            case((!this._animOverride) || ((this._animOverride) && (this._animName === ``))):
                this._animNameFinal = this._itemName;
                break;
            default:
                this._animNameFinal = this._animName;
                break;
        }
        //console.log(this._animNameFinal);
        this._animColorEffect;
        switch (true) {
            case(this._animColor === ``):
                this._animColorEffect = this._itemSource;
                break;
            default:
                this._animColorEffect = this._animColor;
                break;
        }
        //console.log(this._animColorEffect);
    }

    get itemMacro () {
        return "";
    }

    get playOnMiss() {
        return false;
    }
  
    get actor() {
        return this._actorToken.actor;
    }
    
    get reachCheck() {
        let reach = 0;
        if (this._actorToken.actor?.items?.get(this._itemId)?.data?.data?.propriedades?.alongada) {
            reach +=5;
        }
        return reach;
    }
  
    get actorToken() {
        return this._actorToken;
    }
  
    get allTargets() {
        return this._allTargets;
    }
  
    get targetAssistant() {
        return this._allTargets;
    }
  
    get isValid() {
        return true;
    }
  
    get itemType() {
        return this._actorToken.actor.items?.get(itemId).data?.type?.toLowerCase();
    }
  
    get checkSaves() {
        return;
    }
  
    get animColor() {
        return this._animColorEffect;
    }
            
    get color () {
        return this._animColor;
    }
  
    get animName() {
        return this._animNameFinal;
    }
  
    get animExColor() {
        return this._animExColor;
    }
  
    get animExRadius() {
        return this._animExRadius;
    }
  
    get animExVariant() {
        return this._animExVariant;
    }
  
    get animExLoop() {
        return this._animExLoop;
    }
  
    get animType() {
        return this._animType;
    }
  
    get animKill() {
        return this._animKill;
    }
  
    get animOverride() {
        return this._animOverride;
    }
  
    get animExplode() {
        return this._animExplode;
    }
  
    get animDagThrVar() {
        return this._animDgThrVar;
    }
  
    get selfRadius() {
        return this._selfRadius;
    }

    get animTint() {
        return this._animTint;
    }

    get auraOpacity() {
        return this._auraOpacity;
    }

    get ctaOption() {
        return this._ctaOption;
    }

    get hmAnim() {
        return this._hmAnim;
    }

    get uaStrikeType() {
        return this._uaStrikeType;
    }
    
    get teleRange() {
        return this._teleDist;
    }

    get spellVariant() {
        return this._spellVar;
    }

    get bardTarget() {
        return this._bardTarget;
    }

    get bardSelf() {
        return this._bardSelf;
    }

    get bardAnim() {
        return this._bardAnim;
    }
    
    get bards() {
        return this._bards;
    }

    get allSounds() {
        return this._allSounds;
    }

    get itemSound() {
        return this._itemSound;
    }

    get explodeSound() {
        return this._explodeSound
    }
  
    get spellLoops() {
        return this._spellLoops;
    }

    get divineSmite() {
        return this._divineSmite;
    }
    
    get templates() {
        return this._templates;
    }

    getDistanceTo(target) {
        var x, x1, y, y1, d, r, segments = [], rdistance, distance;
        for (x = 0; x < this._actorToken.data.width; x++) {
            for (y = 0; y < this._actorToken.data.height; y++) {
                const origin = new PIXI.Point(...canvas.grid.getCenter(this._actorToken.data.x + (canvas.dimensions.size * x), this._actorToken.data.y + (canvas.dimensions.size * y)));
                for (x1 = 0; x1 < target.data.width; x1++) {
                    for (y1 = 0; y1 < target.data.height; y1++) {
                        const dest = new PIXI.Point(...canvas.grid.getCenter(target.data.x + (canvas.dimensions.size * x1), target.data.y + (canvas.dimensions.size * y1)));
                        const r = new Ray(origin, dest);
                        segments.push({ ray: r });
                    }
                }
            }
        }
        if (segments.length === 0) {
            return -1;
        }
        rdistance = canvas.grid.measureDistances(segments, { gridSpaces: true });
        distance = rdistance[0];
        rdistance.forEach(d => {
            if (d < distance)
                distance = d;
        });
        return distance;
    }
  /*
    itemIncludes() {
        return [...arguments].every(a => this._itemName?.includes(a) || this._itemSource?.includes(a));
    }
    */
    itemIncludes() {
        return [...arguments].every(a => this._animNameFinal?.includes(a) || this._itemSource?.includes(a));
    }
    itemSourceIncludes() {
        return [...arguments].every(a => this._itemSource?.includes(a));
    }
    itemColorIncludes() {
        return [...arguments].every(a => this._animColorEffect?.includes(a));
    }
    itemNameIncludes() {
        return [...arguments].every(a => this._animNameFinal?.includes(a));
    }
    itemTypeIncludes() {
        return [...arguments].every(a => this._itemType?.includes(a));
    }
    animNameIncludes() {
        return [...arguments].every(a => this._animName?.includes(a));
    }
  }
  
