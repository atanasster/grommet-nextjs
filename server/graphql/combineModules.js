
class CombineModules {
  constructor(modules) {
    this.modules = modules;
    this.typeDefs = [];
    modules.filter(module => module.typeDefs)
      .forEach((module) => {
        if (Array.isArray(module.typeDefs)) {
          this.typeDefs = this.typeDefs.concat(module.typeDefs);
        } else {
          this.typeDefs.push(module.typeDefs);
        }
      });
  }

  async createContext(req, res, context = {}) {
    return this.modules.filter(module => module.createContext).reduce(async (cumulated, module) => {
      const ctx = await module.createContext(req, res, cumulated);
      return { ...cumulated, ...ctx };
    }, context);
  }
  resolvers(pubSub) {
    let result = [];
    this.modules.filter(module => module.resolvers)
      .forEach((module) => {
        const resolved = module.resolvers(pubSub);
        if (Array.isArray(resolved)) {
          result = result.concat(resolved);
        } else {
          result.push(resolved);
        }
      });
    return result;
  }
}

module.exports = CombineModules;
