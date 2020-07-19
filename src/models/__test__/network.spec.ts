import { Network, NetworkData } from "../network";
import Graph from "../graph";
import Bus from "../bus";
import Generator from "../generator";
import Link from "../link";
import Load from "../load";


describe("A network model", () => {
    test("can be created from blueprint input data", () => {

        const graph = <Graph>{
            nodes: [
                "bus-0",
                "bus-1",
                "gen-0",
                "link-0",
                "load-0"
            ],
            edges: [
                {
                    node0: "gen-0",
                    node1: "bus-0",
                    port: "inj"
                },
                {
                    node0: "bus-0",
                    node1: "link-0",
                    port: "from"
                },
                {
                    node0: "link-0",
                    node1: "bus-1",
                    port: "to"
                },
                {
                    node0: "bus-1",
                    node1: "load-0",
                    port: "ext"
                }
            ]
        }

        const buses = <Bus[]>[
            {
                label: "bus-0",
                name: "Point of injection",
                nomVoltage: 33.0,
                posX: 0,
                posY: 0,
                voltageMag: 1.0
            },
            {
                label: "bus-1",
                name: "Point of extraction",
                nomVoltage: 33.0,
                posX: 70.0,
                posY: -50.0
            }
        ];

        const generators = <Generator[]>[
            {
                label: "gen-0",
                name: "Waste power plant",
                control: "slack"
            }
        ];

        const links = <Link[]>[
            {
                label: "link-0",
                lines: [
                    {
                        resistance: 2.6,
                        reactance: 6.0,
                        shuntConductivity: 5e-5,
                        shuntSusceptance: 5e-6
                    },
                    {
                        resistance: 2.6,
                        reactance: 6.0,
                        shuntConductivity: 5e-5,
                        shuntSusceptance: 5e-6
                    }
                ]
            }
        ];

        const loads = <Load[]>[
            {
                label: "load-0",
                name: "Urban area",
                activePowerExt: 85,
                reactivePowerExt: -5.0
            }
        ]

        const networkData = <NetworkData>{
            name: "Test fixture",
            description: "This model is created in a unit test",
            graph: graph,
            buses: buses,
            generators: generators,
            links: links,
            loads: loads
        };
        const network = new Network(networkData);

        expect(network.name).toBe("Test fixture");
        expect(network.description).toBe("This model is created in a unit test");
        expect(network.graph).toEqual(graph);
        expect(network.buses).toEqual(buses);
        expect(network.links).toEqual(links);
        expect(network.loads).toEqual(loads);

    })
})