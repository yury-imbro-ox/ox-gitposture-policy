export class DynamicCodeExecution {
    methodA() {}
    methodB() {}
    
    async addFirstLevelItemCloudObj(resource) {
        const data = await this[resource.name]();
        return data;
    }
}

export class DenialOfServiceVulnerability {
    replaceAll(string, find, replace) {
        return string.replace(new RegExp(find, 'g'), replace);
    }
}

export class IncompleteSanitizationOfString {
    sanitize(input) {
        return input.replace('{', '').replace('}', '');
    }
}
