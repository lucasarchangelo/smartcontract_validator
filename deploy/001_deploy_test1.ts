import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, ethers, network } = hre;
	const { deploy } = deployments;
	const [deployer] = await ethers.getSigners();

	const deployedContract = await deploy('Test1', {
		from: deployer.address,
		args: [
			deployer.address
		],
		log: true,
		autoMine: true, // speed up deployment on local network (ganache, hardhat), no effect on live networks
		skipIfAlreadyDeployed: true,
	});
};

export default func;
func.tags = ['Test1'];