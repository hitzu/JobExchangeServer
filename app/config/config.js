
function getSettings(){
    switch (process.env.NODE_ENV) {
        case 'development':
            return require("./develop")
        case 'production':
            return require("./production")
        default:
            return { error: "Error load settings" }
    }
}

module.exports = getSettings();