import SeniorMethods from '../methods';

import searchRepository from './searchRepository';
import install from './install';
import uninstall from './uninstall';
import list from './list';
import listModuleIndexes from './listModuleIndexes';
import load from './load';
import loadAll from './loadAll';

const npm: SeniorMethods = {
    searchRepository,
    install,
    uninstall,
    list,
    listModuleIndexes,
    load,
    loadAll,
};

export {
    npm as default,
    searchRepository,
    install,
    uninstall,
    list,
    listModuleIndexes,
    load,
    loadAll,
};
