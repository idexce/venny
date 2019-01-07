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
                sh 'aws ecs update-service --region us-east-1 --cluster Dev-MicroservicesCluster --service Dev-microservices-FirstServiceStack-RD0WV46FLYEU-Service-1EB1C3NS7KDHJ --force-new-deployment'
        }
	stage('sleeping time') {
		sh 'sleep 600'
		
	}
	
	stage('service status') {
	        sh  'aws ecs wait services-stable --service Dev-microservices-FirstServiceStack-RD0WV46FLYEU-Service-1EB1C3NS7KDHJ --region us-east-1 --cluster Dev-MicroservicesCluster'
	}	
}
