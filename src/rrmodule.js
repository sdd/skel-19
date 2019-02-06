export default class RRModule {
    constructor(options) {
        const { config, prefix } = options;
        
        this.config = config;
        this.prefix = prefix;        
    }

    actions = {};
    constants = {};
    reducer = null;
    sagas = {};

    api = {};
    selectors = {};
    modules = {};
    components = {};

    routes = [];
}
