import { toNano } from '@ton/core';
import { TonSmartFuncScaffold } from '../wrappers/TonSmartFuncScaffold';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const tonSmartFuncScaffold = provider.open(
        TonSmartFuncScaffold.createFromConfig(
            {
                id: Math.floor(Math.random() * 10000),
                counter: 0,
            },
            await compile('TonSmartFuncScaffold')
        )
    );

    await tonSmartFuncScaffold.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(tonSmartFuncScaffold.address);

    console.log('ID', await tonSmartFuncScaffold.getID());
}
