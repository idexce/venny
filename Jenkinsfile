node {
        stage('Pull code from GIT') {
                checkout scm
        }
        stage('Build Image') {
                sh 'docker build -t idexcel-interns/venny:${BUILD_NUMBER} .'
                sh 'docker tag idexcel-interns/venny:${BUILD_NUMBER} idexcelinterns/nodejs:latest'
        }
	stage('Push Image') {
                sh 'docker login -u idexcelinterns -p kutty170065'
                sh 'docker push idexcelinterns/nodejs:latest'
        }
	stage('Force Deploy') {
                sh 'aws ecs update-service --cluster Dev-MicroservicesCluster --service Dev-microservices-FirstServiceStack-1TX7WOWUN13BI-Service-CWBT959HS5HZ --force-new-deployment'
        }
}
