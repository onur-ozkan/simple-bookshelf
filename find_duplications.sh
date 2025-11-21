#!/usr/bin/env bash

exit_code=0

echo "Checking duplicated IDs..."
duplicated_ids=$(grep -oP '^\s*\K\d+(?=,)' books.js | sort -n | uniq -d)
if [[ -n "$duplicated_ids" ]]; then
  echo "Duplicate IDs detected:"
  echo "$duplicated_ids"
  exit_code=1
else
  echo "No duplicate IDs found."
fi

echo "Checking duplicated ISBNs..."
duplicated_isbns=$(grep -n '"isbn":' books.js | awk -F '"' '{print $4}' | sort | uniq -d)
if [[ -n "$duplicated_isbns" ]]; then
  echo "Duplicate ISBNs detected:"
  echo "$duplicated_isbns"
  exit_code=1
else
  echo "No duplicate ISBNs found."
fi

if [[ "$exit_code" -eq 0 ]]; then
  echo "No duplicates detected."
fi

exit "$exit_code"
