import React, { Component }                          from 'react'
import './App.scss'
import '../Host/Host'
import Host                                          from '../Host/Host'
import Join                                          from '../Join/Join'
import { ApolloProvider }                            from 'react-apollo'
import appSyncConfig                                 from '../aws-exports'
import AWSAppSyncClient, { defaultDataIdFromObject } from 'aws-appsync'
import { Rehydrated }                                from 'aws-appsync-react'

const client = new AWSAppSyncClient({
    url: appSyncConfig.aws_appsync_graphqlEndpoint,
    region: appSyncConfig.aws_appsync_region,
    auth: {
        type: appSyncConfig.aws_appsync_authenticationType,
        apiKey: appSyncConfig.aws_appsync_apiKey,
    },
    cacheOptions: {
        dataIdFromObject: (obj) => {
            let id = defaultDataIdFromObject(obj)

            if (!id) {
                const {__typename: typename} = obj
                switch (typename) {
                    case 'Comment':
                        return `${typename}:${obj.commentId}`
                    default:
                        return id
                }
            }

            return id
        },
    },
})

class App extends Component {
    render () {
        return (
            <ApolloProvider client={client}>
                <Rehydrated>
                    <div className="container-fluid App">
                        <div className="d-flex flex-row">
                            <div className="flex-fill align-self-center">
                                <h1>Join Game</h1>
                                <Join/>
                            </div>
                            <div className="flex-fill align-self-center">
                                <h1>Host Game</h1>
                                <Host/>
                            </div>
                        </div>
                    </div>
                </Rehydrated>
            </ApolloProvider>
        )
    }
}

export default App