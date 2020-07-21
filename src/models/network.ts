import Graph from "./graph";
import Bus from "./bus";
import Generator from "./generator";
import Link from "./link";
import Load from "./load";

export interface NetworkData {
  name?: string;
  description?: string;
  graph: Graph;
  buses: Bus[];
  generators: Generator[];
  links: Link[];
  loads: Load[];
  createdAt?: string;
  updatedAt?: string;
  _id: string;
}

export class Network {
  name: string;
  description: string;
  graph: Graph;
  buses: Bus[];
  generators: Generator[];
  links: Link[];
  loads: Load[];

  constructor(data: NetworkData) {
    this.name = data.name ?? "Unnamed";
    this.description = data.description ?? "No description";
    this.graph = data.graph;
    this.buses = data.buses;
    this.generators = data.generators;
    this.links = data.links;
    this.loads = data.loads;
  }
}
