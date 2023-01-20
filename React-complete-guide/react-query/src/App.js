import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { focusManager } from "react-query";

import BackgroundFetchingIndicators from "./Component/BackgroundFetchingIndicators";

import Todo from "./Component/Todo";
import UseQuery from "./Component/UseQuery";
import GlobalLoadingIndicator, { Todos } from "./Component/isFectingView";
import PaginatedQueries from "./Component/PaginatedQueries";
import InfiniteQueriesView from "./Component/InfiniteQueriesView";
import Mutations from "./Component/Mutations";

function App() {
  // Create Client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      },
    },
  });
  const focus = () => {
    focusManager.setEventListener(Todo);
  };

  focusManager.setFocused(true);
  return (
    <div>
      {/* Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        {/* <Todo/> */}
        <br />
        {/* <UseQuery herodIds={[1, 2]} /> */}
        {/* <GlobalLoadingIndicator/> */}
        <Todos />
        <Mutations/>
        {/* <PaginatedQueries/> */}
        {/* <InfiniteQueriesView/> */}
        {/* <BackgroundFetchingIndicators/> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
