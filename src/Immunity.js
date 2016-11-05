export class Immunity {
    appendToArray(instance, ...values) {
        return [
            ...instance,
            ...values
        ];
    }

    prependToArray(instance, ...values) {
        return [
            ...values,
            ...instance
        ];
    }

    appendToObject(instance, ...values) {
        return Object.assign({}, instance, ...values);
    }

    prependToObject(instance, ...values) {
        return Object.assign({}, ...values, instance);
    }

    removeFromArray(instance, ...values) {
        return instance.filter(
            (item) => values.indexOf(item) === -1
        );
    }

    removeKeyFromObject(instance, ...keys) {
        return Object.keys(instance).reduce(
            (obj, itemKey) => {
                if (keys.indexOf(itemKey) === -1) {
                    return Object.assign({}, obj, {
                        [itemKey]: instance[itemKey]
                    });
                }

                return obj;
            },
            {}
        );
    }

    removeValueFromObject(instance, ...values) {
        return Object.keys(instance).reduce(
            (obj, itemKey) => {
                if (values.indexOf(instance[itemKey]) === -1) {
                    return Object.assign({}, obj, {
                        [itemKey]: instance[itemKey]
                    });
                }

                return obj;
            },
            {}
        );
    }

    mergeArrays(...arrays) {
        return arrays.reduce(
            (obj, array) => [ ...obj, ...array ],
            {}
        );
    }

    mergeObjects(...objects) {
        return Object.assign({}, ...objects);
    }
}

export default Immunity;
