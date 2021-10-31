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
                    url: 'https://github.com/muhtarmamatov/EMS'
            }
        }
        stage('Maven Build'){
            steps{
               sh 'mvn clean package'
            }

        }
        stage('Docker Build'){
            steps{
               sh 'docker build . -t muktarbek/ems:${DOCKER_TAG}'
            }

        }
        stage('DockerHub Push'){
            steps{
                withCredentials([string(credentialsId: 'docker-user', variable: 'dockerHubPwd')]) {
                    sh "docker login -u muktarbek -p ${dockerHubPwd}"
                 }
               sh 'docker push  muktarbek/ems:${DOCKER_TAG}'
            }

        }
        stage('Docker Deploy'){
            steps{
                ansiblePlaybook credentialsId: 'dev-server',
                disableHostKeyChecking: true, installation: 'Ansible',
                inventory: 'dev.ini', playbook: 'docker-deploy.yml'
            }
        }
    }
}

def getVersion(){
    def commitHash = sh returnStdout: true, script: 'git rev-parse --short HEAD'
    return commitHash
}
