export class DynamicCodeExecution {
    methodA() {}
    methodB() {}
    
    async addFirstLevelItemCloudObj(resource) {
        const data = await this[resource.name]();
        return data;
    }
}

export class DenialOfServiceVulnerability {
    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    replaceAllNew(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
}

export class IncompleteSanitizationOfString {
    sanitize(input) {
        return input.replace('{', '').replace('}', '');
    }
}