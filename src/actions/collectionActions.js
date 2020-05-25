import * as types from "../constants/ActionTypes";

const collectRef = "/apiv1/collections";

export function asyncCollections(id) {
    // fetch user's collections
    return (dispatch) => {
        if (id) {
            let userCollections = [];
            fetch(collectRef, {headers: {"x-access-token": id}}).then((data) => {
                data.json().then((data) => {
                    data.forEach((doc) => {
                        userCollections.push(doc);
                    });
                });
                dispatch(syncCollections(userCollections));
            });
        }
    };
}

export function syncCollections(payload) {
    return { type: types.SYNC_CLASSES, payload: payload };
}

export function asyncCollection(collectionID, uid) {
    // fetch projects in collection
    return (dispatch) => {
        if (collectionID) {
            let collectionProjects = [];
            let projectOptions = [];
            fetch(`${collectRef}/id/${collectionID}`, {headers: {"x-access-token": uid}})
                .then((resp) => {
                    resp.json().then((data) => {
                        data.forEach((doc) => {
                            collectionProjects.push(doc);
                        });
                        collectionProjects.map((proj) => {
                            projectOptions.push({
                                value: proj._id,
                                label: proj.name
                            });
                        });

                        dispatch(syncCollection(projectOptions));
                    });
                });
        }
    };
}

export function syncCollection(payload) {
    return { type: types.SYNC_CLASS, payload: payload };
}

export function deleteCollection(id, name = null, uid) {
    return (dispatch) => {
        name = (name ? name : id);
        if (window.confirm(`Are you sure you want to delete collection "${name}"?`)) {

            // Delete Document
            fetch(`${collectRef}/id/${name}`, {method: "DELETE", headers: { "x-access-token": uid}}).then((resp) => {
                if(resp.status !== 204) {
                    console.error(`Error deleting collection ${name}: ${resp.statusText}`);
                    return;
                }
                dispatch({ type: types.DELETE_CLASS, id: id });
            });
        }
    };
}

export function createCollection(name, uid) {
    name = name.toLowerCase();
    
    fetch(`${collectRef}/`, {
        method: "POST", 
        body: JSON.stringify({collectID: name}),
        headers:{"Content-Type": "application/json", "x-access-token": uid}
    }).then((resp) => {
        if(resp.status === 409){
            window.alert("Error: A collection already exists with that collection name.");
        }else if (resp.status !== 201) {
            window.alert(`Error creating collection: ${resp.statusText}`);
        }else{
            this.props.collectionActions.asyncCollections(this.props.user.uid);
            window.alert("Collection added!");
        }
    });
}


export default {
    asyncCollection,
    asyncCollections,
    deleteCollection,
    syncCollection,
    syncCollections,
    createCollection
};