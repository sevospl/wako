export interface Provider {
  name: string;
  enabled: boolean;
  enabled_in_list: boolean; // If true will be enabled in list mode
  languages: string[];
  base_url: string;
  response_type: 'json' | 'text';
  time_to_wait_between_each_request_ms?: number; // In list mode we're gonna do request on all visible media
  time_to_wait_on_too_many_request_ms?: number;
  token?: { // If we need to store a token for each request
    query: string;
    token_validity_time_ms?: number;
    token_format: {
      token: string;
    };
  };
  separator?: string; // words separator
  movie?: {
    query: string;
    keywords: string;
  };
  episode?: {
    query: string;
    keywords: string;
  };
  json_format?: {
    results: string;
    sub_results?: string;
    url: string;
    title: string;
    seeds: string;
    peers: string;
    size: string;
    quality?: string;
  };
  html_parser?: {
    row: string;
    url: string;
    title: string;
    seeds: string;
    peers: string;
    size: string;
  };
}
