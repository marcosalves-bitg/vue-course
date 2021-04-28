new Vue({
    el: "#app",
    data: {
        playerLife: 100,
        monsterLife: 100,
        running: false,
        logs: [],
        enableMagic: false,
        chargeMagic: 0,
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 | this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
            this.chargeMagic = 0
            this.enableMagic = false
        },
        attack(magic) {
            this.chargeTheMagic(magic)
            console.log(this.chargeMagic, magic)
            this.hurt('monsterLife', 5, 10, magic, 'Player', 'Monster', 'player')
            if(this.monsterLife > 0) {
                this.hurt('playerLife', 7, 12, false, 'Monster', 'Player', 'monster')
            }
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Player healed ${heal} of life`, 'healed')
            this.registerLog(`Player lost focus of charging MAGIC POWER. Need ${3 - this.chargeMagic} more attacks to complete charging`, 'chargeMagic')
        },
        hurt(atr, min, max, magic, source, target, cls) {
            const plus = magic ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
            this.registerLog(`${source} hit ${target} with ${hurt} power.`, cls)
        },
        healAndHurt() {
            this.heal(10, 15)
            this.chargeMagic = Math.min(this.chargeMagic--, 3)
            this.hurt('playerLife', 7, 12, false, 'Monster', 'Player', 'monster')
        },
        getRandom(min, max) {
            const value = Math.random() * (max-min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({text, cls})
        },
        chargeTheMagic(charge) {
            if(!charge){
                this.chargeMagic++
                if(this.chargeMagic < 3) {
                    this.registerLog(`Player is charging MAGIC POWER. Need ${3 - this.chargeMagic} more attacks to complete charging`, 'chargeMagic')
                } else {
                    this.registerLog(`MAGIC POWER is charged. RELEASE HELLFIRE!!`, 'chargedMagic')
                }
            } else {
                this.chargeMagic = 0
            }
        }
    },
    watch: {
        hasResult(value) {
            this.running = value ? false : true
        },
        chargeMagic(value) {
            this.enableMagic = value >= 3 ? true : false
        }
    }
})