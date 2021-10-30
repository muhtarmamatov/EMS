pipeline{
    agent any
    environment {
        DOCKER_TAG = getVersion()
        RUNNING_TAG = getRunningDockerTag()
        PREVIOUS_TAG = getPreviousTag()
    }
    stages{
        stage('SCM'){
            steps{
                git branch: 'main', credentialsId: 'github',
                    url: 'https://github.com/muhtarmamatov/Employee-Leave-Management-System'
            }
        }
        stage('Maven Build'){
            steps{
               sh 'mvn clean package'
            }

        }
        stage('Docker Build'){
            steps{
               sh 'docker build . -t muktarbek/elms:${DOCKER_TAG}'
            }

        }
        stage('DockerHub Push'){
            steps{
                withCredentials([string(credentialsId: 'docker-user', variable: 'dockerHubPwd')]) {
                    sh "docker login -u muktarbek -p ${dockerHubPwd}"
                 }
               sh 'docker push  muktarbek/elms:${DOCKER_TAG}'
            }

        }
        stage('Docker Deploy'){
                    steps{
                        ansiblePlaybook credentialsId: 'dev-server', disableHostKeyChecking: true,
                        extras: "-e DOCKER_TAG=${DOCKER_TAG} -e RUNNING_TAG=${RUNNING_TAG}
                        -e PREVIOUS_TAG=${PREVIOUS_TAG}", installation: 'Ansible',
                        inventory: 'dev.inv', playbook: 'docker-deploy.yml'
                    }
        }
    }
}

def getVersion(){
    def commitHash = sh returnStdout: true, script: 'git rev-parse --short HEAD'
    return commitHash
}

def getRunningDockerTag(){
    def runningTag = sh returnStdout: true,script: 'git rev-parse --short HEAD~1'
    return runningTag
}
def getPreviousTag(){
    def previousTag = sh returnStdout: true,script: 'git rev-parse --short HEAD~2'
    return previousTag
}
