import HomePage from "./components/HomePage"
import { GlobalRepository } from "./repository"
import { Version } from "./Version"

export default async function Home() {
  const repository = GlobalRepository.getInstance()
  const actualVersion: Version = await repository.getLatestVersion()
  const allVersions: Version[] = await repository.getAllVersions()

  return (
    <HomePage actualVersion={actualVersion} allVerssions={allVersions}/>
  )
}
