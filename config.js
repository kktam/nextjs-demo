// DotNetAzure App Configuration library
import {
    AppConfigurationClient
} from '@azure/app-configuration';

export async function GetMSalClient() {
    // load configuration
    const azureAppConfig = {
        connectionString: ""
    };

    const appConfigClient = new AppConfigurationClient(azureAppConfig.connectionString);

    const OAUTH_APP_ID = await appConfigClient.getConfigurationSetting({
        key: 'OAUTH_APP_ID'
    });

    console.log(JSON.stringify(OAUTH_APP_ID));

    return OAUTH_APP_ID;

}