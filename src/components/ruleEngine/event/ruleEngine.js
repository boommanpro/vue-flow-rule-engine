import {useVueFlow} from "@vue-flow/core";






export default function setupRuleEngine() {
    console.log('setupRuleEngine');
    const {onNodeClick, onNodeDragStop, onConnect, addEdges} = useVueFlow();

    onNodeClick(({event, node}) => {
        console.log('nodeClick', {event, node});
    });

    onNodeDragStop(({event, nodes, node}) => {
        console.log('Node Drag Stop', {event, nodes, node});
    });

    onConnect((connection) => {
        addEdges(connection);
    });
}
